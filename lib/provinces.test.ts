import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MODERN_PROVINCES, HISTORICAL_ADMIN_DIVISIONS, getActiveProvinces } from './provinces';

test('defines all 38 modern Indonesian provinces with valid metadata', () => {
  assert.equal(MODERN_PROVINCES.length, 38, 'Must have exactly 38 provinces');

  const ids = new Set<string>();
  for (const p of MODERN_PROVINCES) {
    assert.ok(!ids.has(p.id), `Duplicate province ID: ${p.id}`);
    ids.add(p.id);

    assert.ok(p.name.length > 0, `${p.id} name must not be empty`);
    assert.ok(p.capital.length > 0, `${p.id} capital must not be empty`);
    assert.ok(p.historicalBackground.length > 0, `${p.id} background must not be empty`);

    const [lng, lat] = p.coordinates;
    assert.ok(lng >= 95 && lng <= 141, `${p.id} longitude ${lng} out of range`);
    assert.ok(lat >= -11 && lat <= 6, `${p.id} latitude ${lat} out of range`);
  }
});

test('defines historical administrative divisions for BCE, Majapahit, colonial, and 1945', () => {
  // Prehistoric zones
  const bceZones = HISTORICAL_ADMIN_DIVISIONS.filter((d) => d.category === 'prehistoric-zone');
  assert.ok(bceZones.length >= 3, 'Prehistoric zones should exist');

  // Majapahit mancanagara
  const majapahitZones = HISTORICAL_ADMIN_DIVISIONS.filter((d) => d.category === 'mancanagara');
  assert.ok(majapahitZones.length >= 4, 'Majapahit mancanagara should exist');

  // Gouvernementen
  const gouv = HISTORICAL_ADMIN_DIVISIONS.filter((d) => d.category === 'gouvernement');
  assert.ok(gouv.length >= 4, 'Colonial gouvernements should exist');

  // 1945 initial provinces
  const p1945 = HISTORICAL_ADMIN_DIVISIONS.filter((d) => d.category === 'provinsi-1945');
  assert.equal(p1945.length, 8, 'PPKI 1945 must have exactly 8 initial provinces');
});

test('getActiveProvinces selects appropriate divisions per era', () => {
  // 1350 M Majapahit
  const p1350 = getActiveProvinces(1350);
  assert.ok(p1350.some((d) => 'category' in d && d.category === 'mancanagara'));

  // 1945 M Proclamation
  const p1945 = getActiveProvinces(1945);
  assert.equal(p1945.length, 8);

  // 2026 M Present (all 38 provinces formed by 2022)
  const p2026 = getActiveProvinces(2026);
  assert.equal(p2026.length, 38);
});
