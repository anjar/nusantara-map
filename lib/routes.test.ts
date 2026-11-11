import { test } from 'node:test';
import assert from 'node:assert/strict';
import { HISTORIC_TRADE_ROUTES, HISTORIC_FORTIFICATIONS, getActiveRoutes, getActiveFortifications } from './routes';

test('defines historic trade routes with coordinates and valid commodity', () => {
  assert.ok(HISTORIC_TRADE_ROUTES.length >= 4);
  for (const r of HISTORIC_TRADE_ROUTES) {
    assert.ok(r.coordinates.length >= 2, `${r.id} must have at least 2 points`);
    assert.ok(r.commodity.length > 0);
    assert.ok(r.description.length > 0);
  }
});

test('defines historic fortifications with coordinates and builder info', () => {
  assert.ok(HISTORIC_FORTIFICATIONS.length >= 6);
  for (const f of HISTORIC_FORTIFICATIONS) {
    const [lng, lat] = f.coordinates;
    assert.ok(lng >= 95 && lng <= 141);
    assert.ok(lat >= -11 && lat <= 6);
    assert.ok(f.builtYear >= 1000 && f.builtYear <= 1900);
    assert.ok(f.builder.length > 0);
  }
});

test('getActiveRoutes and getActiveFortifications filter by year', () => {
  // In 1000 M: Spice route and Silk Road active, Postweg not built
  const routes1000 = getActiveRoutes(1000);
  const routeIds1000 = routes1000.map(r => r.id);
  assert.ok(routeIds1000.includes('spice-route-banda-malacca'));
  assert.ok(!routeIds1000.includes('groote-postweg'));

  // In 1850 M: Groote Postweg active
  const routes1850 = getActiveRoutes(1850);
  assert.ok(routes1850.some(r => r.id === 'groote-postweg'));

  // Forts in 1400: Benteng Buton (1332) exists, Belgica (1611) does not
  const forts1400 = getActiveFortifications(1400);
  const fortIds1400 = forts1400.map(f => f.id);
  assert.ok(fortIds1400.includes('benteng-keraton-buton'));
  assert.ok(!fortIds1400.includes('benteng-belgica'));

  // Forts in 1700: Belgica and Rotterdam exist
  const forts1700 = getActiveFortifications(1700);
  const fortIds1700 = forts1700.map(f => f.id);
  assert.ok(fortIds1700.includes('benteng-belgica'));
  assert.ok(fortIds1700.includes('benteng-rotterdam'));
});
