import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rename, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { getKingdomData } from './kingdom-data';
import { GET } from '../app/api/kingdoms/route';
import { NextRequest } from 'next/server';

async function fixture(run: (root: string, directory: string) => Promise<void>) {
  const root = await mkdtemp(join(tmpdir(), 'nusantara-territories-'));
  const directory = join(root, 'public', 'data');
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'kingdoms.json'), '[]');
  try {
    await run(root, directory);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}

function collection(id: string) {
  return JSON.stringify({
    type: 'FeatureCollection',
    features: [
      { type: 'Feature', properties: { id }, geometry: { type: 'Polygon', coordinates: [] } },
    ],
  });
}

test('a running process sees new snapshots after reading an older file', async () => {
  await fixture(async (root, directory) => {
    const path = join(directory, 'kingdom-territories.geojson');
    await writeFile(path, collection('old-data'));
    assert.equal((await getKingdomData(root)).territories.features[0].properties.id, 'old-data');
    // Same-length edits must invalidate the cache too.
    await writeFile(path, collection('new-data'));
    assert.equal((await getKingdomData(root)).territories.features[0].properties.id, 'new-data');
    await writeFile(path + '.new', collection('replaced'));
    await rename(path + '.new', path);
    assert.equal((await getKingdomData(root)).territories.features[0].properties.id, 'replaced');
  });
});

test('metadata updates are visible without restarting the API', async () => {
  await fixture(async (root, directory) => {
    await writeFile(join(directory, 'kingdom-territories.geojson'), collection('indonesia'));
    const path = join(directory, 'kingdoms.json');
    await writeFile(path, JSON.stringify([{ id: 'indonesia', description: 'Before' }]));
    assert.equal((await getKingdomData(root)).kingdomsMap.get('indonesia')?.description, 'Before');
    await writeFile(path, JSON.stringify([{ id: 'indonesia', description: 'Updated' }]));
    assert.equal((await getKingdomData(root)).kingdomsMap.get('indonesia')?.description, 'Updated');
  });
});

test('invalid JSON does not poison subsequent reads after the file is repaired', async () => {
  await fixture(async (root, directory) => {
    const path = join(directory, 'kingdom-territories.geojson');
    await writeFile(path, '{');
    await assert.rejects(getKingdomData(root));
    await writeFile(path, collection('fixed'));
    assert.equal((await getKingdomData(root)).territories.features[0].properties.id, 'fixed');
  });
});

test('colonial and republican years return real colored polygon features through the API', async () => {
  for (const [year, id] of [
    [1650, 'voc-dutch-republic'],
    [1900, 'dutch-east-indies'],
    [1943, 'japanese-occupation'],
    [1950, 'republic-of-indonesia'],
    [new Date().getUTCFullYear(), 'republic-of-indonesia'],
  ] as const) {
    const response = await GET(new NextRequest(`http://localhost/api/kingdoms?year=${year}`));
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    const data = await response.json();
    const feature = data.features.find(
      (item: { properties: { id: string } }) => item.properties.id === id,
    );
    assert(feature, `Missing ${id} at ${year}`);
    assert.match(feature.properties.color, /^#[a-fA-F0-9]{6}$/);
    assert(['Polygon', 'MultiPolygon'].includes(feature.geometry.type));
    assert(feature.geometry.coordinates.length > 0);
    if (year === 1950)
      assert.equal(
        data.features.filter((item: { properties: { id: string } }) => item.properties.id === id)
          .length,
        1,
      );
  }
});
