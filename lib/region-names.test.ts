import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getActiveRegionLabels } from './region-names';

test('regional names evolve across timeline', () => {
  // Prehistory / Ice age (-15000)
  const iceAge = getActiveRegionLabels(-15000);
  const sumatraIce = iceAge.find(l => l.id === 'sumatra')!;
  assert.match(sumatraIce.text, /SUNDA/i);
  const javaIce = iceAge.find(l => l.id === 'java')!;
  assert.match(javaIce.text, /JAWA PURBA/i);
  const javaSeaIce = iceAge.find(l => l.id === 'sea-java')!;
  assert.match(javaSeaIce.text, /LEMBAH SUNDA/i); // Not a sea in Ice Age!

  // Majapahit era (1350 M)
  const majapahit = getActiveRegionLabels(1350);
  const sumatraMaj = majapahit.find(l => l.id === 'sumatra')!;
  assert.equal(sumatraMaj.text, 'BHUMI MALAYU');
  const borneoMaj = majapahit.find(l => l.id === 'kalimantan')!;
  assert.equal(borneoMaj.text, 'TANJUNGPURA');
  const bruneiMaj = majapahit.find(l => l.id === 'brunei')!;
  assert.equal(bruneiMaj.text, 'BARUNE');
  const malayaMaj = majapahit.find(l => l.id === 'peninsular-malaysia')!;
  assert.equal(malayaMaj.text, 'HUJUNG MEDINI');

  // Colonial era (1900 M)
  const colonial = getActiveRegionLabels(1900);
  const javaCol = colonial.find(l => l.id === 'java')!;
  assert.equal(javaCol.text, 'JAVA');
  const malayaCol = colonial.find(l => l.id === 'peninsular-malaysia')!;
  assert.equal(malayaCol.text, 'BRITISH MALAYA');

  // Modern era (2025 M)
  const modern = getActiveRegionLabels(2025);
  const sumatraMod = modern.find(l => l.id === 'sumatra')!;
  assert.equal(sumatraMod.text, 'SUMATERA');
  const bruneiMod = modern.find(l => l.id === 'brunei')!;
  assert.equal(bruneiMod.text, 'BRUNEI DARUSSALAM');
});
