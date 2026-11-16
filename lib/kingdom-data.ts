import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import type { KingdomCollection } from '../components/types';

interface KingdomMetadata {
  id?: string;
  description?: string;
  wikipedia_title?: string;
  wikidata_id?: string;
}

interface FileSnapshot {
  version: string;
  value: Promise<unknown>;
}

// Check the file version on each request; reparse only when its contents can change.
const snapshots = new Map<string, FileSnapshot>();

async function readSnapshot<T>(path: string): Promise<T> {
  const info = await stat(path, { bigint: true });
  const version = `${info.ino}:${info.size}:${info.mtimeNs}:${info.ctimeNs}`;
  let snapshot = snapshots.get(path);
  if (!snapshot || snapshot.version !== version) {
    const value = readFile(path, 'utf8').then((content) => JSON.parse(content) as T);
    snapshot = { version, value };
    snapshots.set(path, snapshot);
    value.catch(() => {
      if (snapshots.get(path)?.value === value) snapshots.delete(path);
    });
  }
  return snapshot.value as Promise<T>;
}

export async function getKingdomData(root = process.cwd()) {
  const directory = join(root, 'public', 'data');
  const [territories, kingdoms] = await Promise.all([
    readSnapshot<KingdomCollection>(join(directory, 'kingdom-territories.geojson')),
    readSnapshot<KingdomMetadata[]>(join(directory, 'kingdoms.json')),
  ]);
  return {
    territories,
    kingdomsMap: new Map(
      kingdoms.filter((kingdom) => kingdom.id).map((kingdom) => [kingdom.id!, kingdom]),
    ),
  };
}
