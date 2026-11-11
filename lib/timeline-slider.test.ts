import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getAnchors, yearToSliderPos, sliderPosToYear, SLIDER_MAX_STEPS } from './timeline-slider';

test('anchors round-trip identically through slider mapping', () => {
  const anchors = getAnchors(2026);
  for (let i = 0; i < anchors.length; i++) {
    const year = anchors[i];
    const pos = yearToSliderPos(year, anchors);
    const back = sliderPosToYear(pos, anchors);
    assert.equal(back, year, `Anchor ${year} failed round trip: got ${back}`);
  }
});

test('year 1945 is at exact expected position', () => {
  const anchors = getAnchors(2026);
  const pos = yearToSliderPos(1945, anchors);
  assert.equal(pos, 9267);
  assert.equal(sliderPosToYear(pos, anchors), 1945);
});

test('kingdom and republic years receive most of the track', () => {
  const anchors = getAnchors(2026);
  assert.equal(yearToSliderPos(400, anchors), 1200);
  assert.equal(yearToSliderPos(2026, anchors), SLIDER_MAX_STEPS);
});

test('intermediate years interpolate monotonically', () => {
  const anchors = getAnchors(2026);
  const years = [-18000, -10000, 500, 1350, 1602, 1755, 1945, 2026];
  let lastPos = -1;
  for (const y of years) {
    const pos = yearToSliderPos(y, anchors);
    assert(pos > lastPos, `Position for year ${y} (${pos}) must be > previous (${lastPos})`);
    lastPos = pos;
  }
});
