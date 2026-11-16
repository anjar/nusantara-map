import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CITIES_DATA, getActiveCities } from './cities';

test('cities dataset covers Before Christ (BCE) to modern era', () => {
  const bceCities = CITIES_DATA.filter((c) => c.startYear < 0);
  assert.ok(bceCities.length >= 5, `Expected at least 5 BCE cities, got ${bceCities.length}`);

  const modernCities = CITIES_DATA.filter((c) => c.endYear >= 2024);
  assert.ok(
    modernCities.length >= 30,
    `Expected at least 30 modern cities, got ${modernCities.length}`,
  );
});

test('all cities have valid coordinates in Nusantara bounds', () => {
  for (const c of CITIES_DATA) {
    const [lng, lat] = c.coordinates;
    assert.ok(lng >= 94 && lng <= 142, `${c.id} longitude ${lng} out of bounds`);
    assert.ok(lat >= -12 && lat <= 8, `${c.id} latitude ${lat} out of bounds`);
    assert.ok(c.id.length > 0, 'City ID must be non-empty');
    assert.ok(c.name.length > 0, 'City name must be non-empty');
    assert.ok(c.province.length > 0, 'Province must be non-empty');
    assert.ok(c.source.length > 0, 'Source must be non-empty');
  }
});

test('getActiveCities filters correctly by timeline year', () => {
  // In 300 SM (-300)
  const bceActive = getActiveCities(-300);
  const bceIds = bceActive.map((c) => c.id);
  assert.ok(bceIds.includes('batujaya-buni'), 'Batujaya should be active in 300 SM');
  assert.ok(bceIds.includes('plawangan'), 'Plawangan should be active in 300 SM');
  assert.ok(bceIds.includes('gilimanuk'), 'Gilimanuk should be active in 300 SM');
  assert.ok(!bceIds.includes('trowulan'), 'Trowulan must not be active in 300 SM');
  assert.ok(!bceIds.includes('jakarta'), 'Jakarta must not be active in 300 SM');

  // In 1350 M (Majapahit peak)
  const majapahitActive = getActiveCities(1350);
  const majapahitIds = majapahitActive.map((c) => c.id);
  assert.ok(majapahitIds.includes('trowulan'), 'Trowulan active in 1350');
  assert.ok(majapahitIds.includes('tuban'), 'Tuban active in 1350');
  assert.ok(majapahitIds.includes('samudera-pasai'), 'Samudera Pasai active in 1350');
  assert.ok(majapahitIds.includes('jakarta'), 'Sunda Kalapa active in 1350');
  assert.ok(!majapahitIds.includes('bandung'), 'Bandung not active in 1350');

  // In 2026 M (Present)
  const presentActive = getActiveCities(2026);
  const presentIds = presentActive.map((c) => c.id);
  assert.ok(presentIds.includes('nusantara-ikn'), 'IKN active in 2026');
  assert.ok(presentIds.includes('jakarta'), 'Jakarta active in 2026');
  assert.ok(presentIds.includes('jayapura'), 'Jayapura active in 2026');
  assert.ok(!presentIds.includes('trowulan'), 'Trowulan metropolis not active in 2026');
});

test('historical names update dynamically according to timeline year', () => {
  // Jakarta name evolution
  const jkt1350 = getActiveCities(1350).find((c) => c.id === 'jakarta');
  assert.equal(jkt1350?.currentHistoricalName, 'Sunda Kalapa');

  const jkt1530 = getActiveCities(1530).find((c) => c.id === 'jakarta');
  assert.equal(jkt1530?.currentHistoricalName, 'Jayakarta');

  const jkt1700 = getActiveCities(1700).find((c) => c.id === 'jakarta');
  assert.equal(jkt1700?.currentHistoricalName, 'Batavia');

  const jkt1950 = getActiveCities(1950).find((c) => c.id === 'jakarta');
  assert.equal(jkt1950?.currentHistoricalName, 'Jakarta');

  // Yogyakarta name evolution
  const yogya1600 = getActiveCities(1600).find((c) => c.id === 'yogyakarta');
  assert.equal(yogya1600?.currentHistoricalName, 'Kotagede');

  const yogya1800 = getActiveCities(1800).find((c) => c.id === 'yogyakarta');
  assert.equal(yogya1800?.currentHistoricalName, 'Ngayogyakarta Hadiningrat');
});
