import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TIMELINE_EVENTS, findClosestEvent } from './events';

test('TIMELINE_EVENTS is ordered chronologically', () => {
  assert(TIMELINE_EVENTS.length >= 40, `Expected at least 40 events, got ${TIMELINE_EVENTS.length}`);
  for (let i = 1; i < TIMELINE_EVENTS.length; i++) {
    assert(
      TIMELINE_EVENTS[i].year >= TIMELINE_EVENTS[i - 1].year,
      `Event ${TIMELINE_EVENTS[i].id} (${TIMELINE_EVENTS[i].year}) must be >= ${TIMELINE_EVENTS[i - 1].id} (${TIMELINE_EVENTS[i - 1].year})`
    );
  }
});

test('findClosestEvent matches nearest event', () => {
  assert.equal(findClosestEvent(-15000).id, 'mwp-1a');
  assert.equal(findClosestEvent(-20000).id, 'lgm-peak');
  assert.equal(findClosestEvent(1350).id, 'palapa-oath-hayam-wuruk');
  assert.equal(findClosestEvent(1293).id, 'majapahit-empire');
  assert.equal(findClosestEvent(-8000).id, 'sahul-drowning');
  assert.equal(findClosestEvent(1945).id, 'pancasila-birth-1945');
  assert.equal(findClosestEvent(2004).id, 'tsunami-aceh-2004');
  assert.equal(findClosestEvent(-74000).id, 'toba-supervolcano');
});

test('all events have non-empty metadata, tags, and valid IDs', () => {
  const ids = new Set<string>();
  for (const event of TIMELINE_EVENTS) {
    assert(event.id && event.id.length > 0, 'Event ID must not be empty');
    assert(!ids.has(event.id), `Duplicate event ID found: ${event.id}`);
    ids.add(event.id);

    assert(event.title && event.title.trim().length > 0, `Event ${event.id} missing title`);
    assert(event.summary && event.summary.trim().length > 10, `Event ${event.id} summary too short`);
    assert(event.impact && event.impact.trim().length > 10, `Event ${event.id} impact too short`);
    assert(Array.isArray(event.tags) && event.tags.length > 0, `Event ${event.id} missing tags`);
  }
});

test('all events have source links with valid HTTP/HTTPS URL format', () => {
  for (const event of TIMELINE_EVENTS) {
    assert(event.sources && event.sources.length > 0, `Event ${event.id} must have at least one source link`);
    for (const source of event.sources) {
      assert(source.title && source.title.length > 0, `Event ${event.id} source link missing title`);
      assert(
        source.url.startsWith('https://') || source.url.startsWith('http://'),
        `Event ${event.id} source url must start with http/https: ${source.url}`
      );
    }
  }
});

test('includes key historical milestones requested by user', () => {
  const eventIds = new Set(TIMELINE_EVENTS.map(e => e.id));

  // 1. Natural disasters
  assert(eventIds.has('toba-supervolcano'), 'Toba supervolcano event missing');
  assert(eventIds.has('samalas-eruption-lombok'), 'Samalas eruption event missing');
  assert(eventIds.has('tambora-eruption-1815'), 'Tambora eruption event missing');
  assert(eventIds.has('krakatau-eruption-1883'), 'Krakatau eruption event missing');
  assert(eventIds.has('tsunami-aceh-2004'), 'Aceh tsunami event missing');

  // 2. Wars and major battles
  assert(eventIds.has('ganter-singasari'), 'Pertempuran Ganter missing');
  assert(eventIds.has('majapahit-empire'), 'Majapahit & Mongol war missing');
  assert(eventIds.has('perang-bubat'), 'Perang Bubat missing');
  assert(eventIds.has('perang-paregreg'), 'Perang Paregreg missing');
  assert(eventIds.has('siege-of-batavia'), 'Pengepungan Batavia missing');
  assert(eventIds.has('banda-massacre-1621'), 'Pembantaian Banda missing');
  assert(eventIds.has('perang-padri'), 'Perang Padri missing');
  assert(eventIds.has('diponegoro-war'), 'Perang Diponegoro missing');
  assert(eventIds.has('puputan-jagaraga-1849'), 'Puputan Jagaraga missing');
  assert(eventIds.has('perang-banjar-1859'), 'Perang Banjar missing');
  assert(eventIds.has('aceh-war'), 'Perang Aceh missing');
  assert(eventIds.has('surabaya-battle-1945'), 'Pertempuran Surabaya missing');
  assert(eventIds.has('bandung-lautan-api-1946'), 'Bandung Lautan Api missing');
  assert(eventIds.has('serangan-umum-1-maret'), 'Serangan Umum 1 Maret missing');

  // 3. Founding of kingdoms
  assert(eventIds.has('salakanagara-founding'), 'Salakanagara founding missing');
  assert(eventIds.has('kutai-taruma'), 'Kutai & Tarumanagara missing');
  assert(eventIds.has('sriwijaya-peak'), 'Sriwijaya founding missing');
  assert(eventIds.has('canggal-mataram'), 'Medang founding missing');
  assert(eventIds.has('ternate-founding'), 'Ternate founding missing');
  assert(eventIds.has('samudera-pasai'), 'Samudera Pasai missing');
  assert(eventIds.has('demak-sultanate'), 'Demak sultanate missing');
  assert(eventIds.has('prabu-siliwangi-pajajaran'), 'Pajajaran missing');
  assert(eventIds.has('banten-sultanate'), 'Banten sultanate missing');
  assert(eventIds.has('mataram-islam-founding'), 'Mataram Islam founding missing');
  assert(eventIds.has('gowa-islam-adoption'), 'Gowa-Tallo missing');
  assert(eventIds.has('siak-founding'), 'Siak Sri Indrapura missing');

  // 4. VOC arrivals and colonial milestones
  assert(eventIds.has('cornelis-de-houtman-banten'), 'Cornelis de Houtman arrival missing');
  assert(eventIds.has('voc-establishment'), 'VOC establishment missing');
  assert(eventIds.has('voc-ambon-1605'), 'VOC Ambon missing');
  assert(eventIds.has('batavia-founding'), 'Batavia founding missing');
  assert(eventIds.has('geger-pacinan-1740'), 'Geger Pacinan missing');
  assert(eventIds.has('dutch-east-indies-formed'), 'Dutch East Indies / VOC dissolution missing');
  assert(eventIds.has('daendels-postweg'), 'Daendels Jalan Raya Pos missing');
  assert(eventIds.has('cultuurstelsel-1830'), 'Cultuurstelsel missing');
  assert(eventIds.has('politik-etis-1901'), 'Politik Etis missing');

  // 5. Historical figures & national awakening
  assert(eventIds.has('kalingga-queen-shima'), 'Ratu Shima missing');
  assert(eventIds.has('cheng-ho-expedition'), 'Cheng Ho missing');
  assert(eventIds.has('sultan-baabullah-ternate'), 'Sultan Baabullah missing');
  assert(eventIds.has('kartini-emancipation-1903'), 'Kartini missing');
  assert(eventIds.has('budi-utomo-1908'), 'Budi Utomo missing');
  assert(eventIds.has('sarekat-islam-1912'), 'Sarekat Islam missing');
  assert(eventIds.has('budi-utomo-youth-pledge'), 'Sumpah Pemuda missing');
  assert(eventIds.has('indonesia-menggugat-1930'), 'Indonesia Menggugat missing');

  // 6. Proclamation, independence & republic sovereignty
  assert(eventIds.has('pancasila-birth-1945'), 'Lahirnya Pancasila missing');
  assert(eventIds.has('rengasdengklok-incident'), 'Rengasdengklok missing');
  assert(eventIds.has('indonesia-proclamation'), 'Proklamasi Kemerdekaan missing');
  assert(eventIds.has('ppki-constitution-1945'), 'PPKI UUD 1945 missing');
  assert(eventIds.has('kmb-sovereignty'), 'KMB sovereignty missing');
  assert(eventIds.has('kembali-ke-nkri-1950'), 'Kembali ke NKRI missing');
  assert(eventIds.has('kaa-bandung-1955'), 'KAA Bandung missing');
  assert(eventIds.has('deklarasi-djuanda-1957'), 'Deklarasi Djuanda missing');
  assert(eventIds.has('irian-barat-integration'), 'Integrasi Irian Barat missing');
});
