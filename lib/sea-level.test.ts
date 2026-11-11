import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getSeaLevel, getThreshold, getEraLabel, paleoshorelinePath } from './sea-level';

test('getSeaLevel returns 0 for modern/recent history (>= -4000)', () => {
  assert.equal(getSeaLevel(1350), 0);
  assert.equal(getSeaLevel(0), 0);
  assert.equal(getSeaLevel(-3400), 0);
  assert.equal(getSeaLevel(-4000), 0);
});

test('getSeaLevel interpolates correctly for prehistoric years', () => {
  assert.equal(getSeaLevel(-18000), -120);
  assert.equal(getSeaLevel(-20000), -125);
  assert.equal(getSeaLevel(-25000), -125); // clamped to deepest curve point
  assert.equal(getSeaLevel(-14000), -100);
  assert.equal(getSeaLevel(-10000), -50);
  // Linear interpolation between -14000 (-100m) and -12000 (-60m)
  assert.equal(getSeaLevel(-13000), -80);
});

test('getThreshold maps sea level to appropriate depth tier', () => {
  assert.equal(getThreshold(0), null);
  assert.equal(getThreshold(-5), null);
  assert.equal(getThreshold(-9), null);
  assert.equal(getThreshold(-15), 25);
  assert.equal(getThreshold(-25), 25);
  assert.equal(getThreshold(-40), 50);
  assert.equal(getThreshold(-50), 50);
  assert.equal(getThreshold(-70), 75);
  assert.equal(getThreshold(-75), 75);
  assert.equal(getThreshold(-110), 120);
  assert.equal(getThreshold(-120), 120);
});

test('getEraLabel returns geological era descriptions', () => {
  assert.equal(getEraLabel(1350), null);
  assert.equal(getEraLabel(-2000), null);
  assert.match(getEraLabel(-15000) ?? '', /Zaman Es/i);
  assert.match(getEraLabel(-20000) ?? '', /Puncak Zaman Es/i);
  assert.match(getEraLabel(-10000) ?? '', /Pasca-glasial/i);
  assert.match(getEraLabel(-5000) ?? '', /Holosen/i);
});

test('paleoshorelinePath formats correct asset path', () => {
  assert.equal(paleoshorelinePath(120), '/data/paleoshoreline-120m.geojson');
  assert.equal(paleoshorelinePath(75), '/data/paleoshoreline-75m.geojson');
  assert.equal(paleoshorelinePath(50), '/data/paleoshoreline-50m.geojson');
  assert.equal(paleoshorelinePath(25), '/data/paleoshoreline-25m.geojson');
});
