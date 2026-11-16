import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TIMELINE_EVENTS } from './events';
import { RESEARCHED_EVENTS } from './events-researched';
import { matchesEventFilter, searchEvents, type EventFilter } from './event-filters';

test('recorded history excludes prehistoric reconstruction and disputed foundation claims', () => {
  const recorded = searchEvents(TIMELINE_EVENTS, 'recorded');
  assert(recorded.length > 0);
  assert(
    recorded.every(
      (event) =>
        event.year > 0 && event.evidence !== 'contested' && event.evidence !== 'reconstruction',
    ),
  );
  assert(!recorded.some((event) => event.id === 'salakanagara-founding'));
  assert(!recorded.some((event) => event.id === 'lgm-peak'));
  assert(
    searchEvents(TIMELINE_EVENTS, 'all').some((event) => event.id === 'salakanagara-founding'),
  );
});

test('disease filter includes recorded epidemics without unrelated war or geological events', () => {
  const diseases = searchEvents(TIMELINE_EVENTS, 'disease');
  assert(diseases.length >= 3);
  assert(diseases.every((event) => event.category === 'disease'));
  assert(searchEvents(diseases, 'disease', 'influenza').length > 0);
  assert(searchEvents(diseases, 'disease', 'COVID WHO').length > 0);
  assert.deepEqual(searchEvents(diseases, 'disease', 'tidak-ada-kejadian-ini'), []);
});

test('search handles source names, terms, case, and political aliases', () => {
  const g30s = searchEvents(TIMELINE_EVENTS, 'recorded', 'g30s pki');
  assert(g30s.some((event) => event.id === 'gerakan-30-september-1965'));
  assert(
    searchEvents(TIMELINE_EVENTS, 'recorded', '  g30s   PKI ').some(
      (event) => event.id === 'gerakan-30-september-1965',
    ),
  );
  assert(
    searchEvents(TIMELINE_EVENTS, 'colonial-war', 'Pattimura Cambridge').some(
      (event) => event.id === 'pattimura-resistance-1817',
    ),
  );
  assert(!searchEvents(TIMELINE_EVENTS, 'disease', 'g30s').length);
});

test('tab predicates and result counts share exactly the same membership', () => {
  const filters: EventFilter[] = [
    'all',
    'recorded',
    'geology',
    'disease',
    'kingdom',
    'colonial-war',
    'independence',
  ];
  for (const filter of filters) {
    assert.deepEqual(
      searchEvents(TIMELINE_EVENTS, filter),
      TIMELINE_EVENTS.filter((event) => matchesEventFilter(event, filter)),
    );
  }
  assert(
    searchEvents(TIMELINE_EVENTS, 'independence').some(
      (event) => event.id === 'soeharto-mundur-1998',
    ),
  );
});

test('new records carry detailed source links and calendar-consistent dates', () => {
  for (const event of RESEARCHED_EVENTS) {
    assert(event.sources?.length, `Missing sources: ${event.id}`);
    for (const source of event.sources!) {
      const url = new URL(source.url);
      assert.equal(url.protocol, 'https:');
      assert.notEqual(url.pathname, '/', `A homepage is not an event reference: ${event.id}`);
      assert(source.sourceName?.trim());
    }
    if (event.date) {
      assert.match(event.date, /^\d{4}-\d{2}-\d{2}$/);
      const date = new Date(`${event.date}T00:00:00Z`);
      assert.equal(
        date.toISOString().slice(0, 10),
        event.date,
        `Invalid calendar date: ${event.id}`,
      );
      assert.equal(date.getUTCFullYear(), event.year);
    }
    if (event.endYear !== undefined) assert(event.endYear >= event.year);
    if (event.evidence === 'approximate' || event.evidence === 'contested')
      assert(event.dateNote?.trim());
  }
});

test('G30S, subsequent violence, and disputed manuscript dates remain separate records', () => {
  const g30s = TIMELINE_EVENTS.find((event) => event.id === 'gerakan-30-september-1965')!;
  const aftermath = TIMELINE_EVENTS.find((event) => event.id === 'kekerasan-massal-1965-1966')!;
  assert.equal(g30s.date, '1965-09-30');
  assert.equal(aftermath.endYear, 1966);
  assert.notEqual(g30s.id, aftermath.id);
  const pralaya = TIMELINE_EVENTS.find((event) => event.id === 'pralaya-medang-merapi')!;
  assert.equal(pralaya.category, 'war');
  assert.equal(pralaya.evidence, 'approximate');
  assert.equal(pralaya.endYear, 1017);
  const palapa = TIMELINE_EVENTS.find((event) => event.id === 'gajah-mada-palapa-oath-1336')!;
  assert.equal(palapa.evidence, 'approximate');
  assert.match(palapa.dateNote!, /1334/);
});
