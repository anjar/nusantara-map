import { CITIES_DATA } from '../data/cities';
import type { EventLocation, TimelineEvent } from './events';

const LOCATION_OVERRIDES: Record<string, EventLocation> = {
  'toba-supervolcano': {
    name: 'Kaldera Toba, Sumatera Utara',
    coordinates: [98.89, 2.68],
    precision: 'place',
  },
  'lgm-peak': { name: 'Paparan Sunda', coordinates: [110.2, 1.1], precision: 'approximate' },
  'last-glacial': { name: 'Paparan Sunda', coordinates: [110.2, 1.1], precision: 'approximate' },
  'deglaciation-start': {
    name: 'Paparan Sunda',
    coordinates: [110.2, 1.1],
    precision: 'approximate',
  },
  'mwp-1a': { name: 'Paparan Sunda', coordinates: [110.2, 1.1], precision: 'approximate' },
  'rainforest-expansion': {
    name: 'Paparan Sunda',
    coordinates: [110.2, 1.1],
    precision: 'approximate',
  },
  'younger-dryas': { name: 'Paparan Sunda', coordinates: [110.2, 1.1], precision: 'approximate' },
  'samalas-eruption-lombok': {
    name: 'Gunung Samalas, Lombok',
    coordinates: [116.46, -8.42],
    precision: 'place',
  },
  'pralaya-medang-merapi': {
    name: 'Jawa (lokasi serangan tidak dipastikan)',
    coordinates: [110.7, -7.3],
    precision: 'approximate',
  },
  'tambora-eruption-1815': {
    name: 'Gunung Tambora, Sumbawa',
    coordinates: [118.0, -8.25],
    precision: 'place',
  },
  'kelud-eruption-1919': {
    name: 'Gunung Kelud, Jawa Timur',
    coordinates: [112.31, -7.93],
    precision: 'place',
  },
  'merapi-eruption-1930': {
    name: 'Gunung Merapi, Jawa',
    coordinates: [110.446, -7.54],
    precision: 'place',
  },
  'agung-eruption-1963': {
    name: 'Gunung Agung, Bali',
    coordinates: [115.51, -8.34],
    precision: 'place',
  },
  'kelud-eruption-1966': {
    name: 'Gunung Kelud, Jawa Timur',
    coordinates: [112.31, -7.93],
    precision: 'place',
  },
  'krakatau-eruption-1883': {
    name: 'Krakatau, Selat Sunda',
    coordinates: [105.42, -6.1],
    precision: 'place',
  },
  'kelud-eruption-2014': {
    name: 'Gunung Kelud, Jawa Timur',
    coordinates: [112.31, -7.93],
    precision: 'place',
  },
  'lombok-earthquake-2018': {
    name: 'Lombok, Nusa Tenggara Barat',
    coordinates: [116.25, -8.35],
    precision: 'place',
  },
  'palu-earthquake-tsunami-2018': {
    name: 'Palu, Sulawesi Tengah',
    coordinates: [119.87, -0.9],
    precision: 'place',
  },
  'sunda-strait-tsunami-2018': {
    name: 'Selat Sunda',
    coordinates: [105.75, -6.05],
    precision: 'place',
  },
  'tsunami-aceh-2004': {
    name: 'Banda Aceh, Sumatera',
    coordinates: [95.32, 5.55],
    precision: 'place',
  },
  'yogyakarta-earthquake-2006': {
    name: 'Yogyakarta',
    coordinates: [110.37, -7.8],
    precision: 'place',
  },
  'pangandaran-tsunami-2006': {
    name: 'Pangandaran, Jawa Barat',
    coordinates: [108.65, -7.7],
    precision: 'place',
  },
  'padang-earthquake-2009': {
    name: 'Padang, Sumatera Barat',
    coordinates: [100.36, -0.95],
    precision: 'place',
  },
  'flores-earthquake-tsunami-1992': {
    name: 'Maumere, Flores',
    coordinates: [122.21, -8.62],
    precision: 'place',
  },
  'biak-earthquake-tsunami-1996': {
    name: 'Biak, Papua',
    coordinates: [136.08, -1.18],
    precision: 'place',
  },
  'ruang-eruption-2024': {
    name: 'Gunung Ruang, Kepulauan Sangihe',
    coordinates: [125.37, 2.3],
    precision: 'place',
  },
  'voc-establishment': {
    name: 'Amsterdam, Belanda',
    coordinates: [4.9, 52.37],
    precision: 'place',
  },
  'kmb-sovereignty': { name: 'Den Haag, Belanda', coordinates: [4.3, 52.08], precision: 'place' },
  'indonesia-proclamation': {
    name: 'Pegangsaan Timur, Jakarta',
    coordinates: [106.846, -6.2],
    precision: 'place',
  },
  'ppki-constitution-1945': { name: 'Jakarta', coordinates: [106.82, -6.17], precision: 'place' },
  'indonesia-menggugat-1930': { name: 'Bandung', coordinates: [107.61, -6.91], precision: 'place' },
  'budi-utomo-youth-pledge': { name: 'Jakarta', coordinates: [106.82, -6.17], precision: 'place' },
  'japanese-invasion': {
    name: 'Kalijati, Subang',
    coordinates: [107.75, -6.46],
    precision: 'place',
  },
  independence: { name: 'Jakarta', coordinates: [106.82, -6.17], precision: 'place' },
  'rengasdengklok-incident': {
    name: 'Rengasdengklok, Karawang',
    coordinates: [107.3, -6.16],
    precision: 'place',
  },
  'surabaya-battle-1945': { name: 'Surabaya', coordinates: [112.75, -7.25], precision: 'place' },
  'bandung-lautan-api-1946': { name: 'Bandung', coordinates: [107.61, -6.91], precision: 'place' },
  'serangan-umum-1-maret': { name: 'Yogyakarta', coordinates: [110.37, -7.8], precision: 'place' },
  'pdri-agresi-2-1948': {
    name: 'Bukittinggi, Sumatera Barat',
    coordinates: [100.37, -0.31],
    precision: 'place',
  },
  'sunda-portuguese-treaty-1522': {
    name: 'Sunda Kalapa, Jakarta',
    coordinates: [106.82, -6.12],
    precision: 'place',
  },
  'portuguese-maluku-voyage-1512': {
    name: 'Kepulauan Maluku',
    coordinates: [127.7, -1.3],
    precision: 'approximate',
  },
  'cornelis-de-houtman-banten': {
    name: 'Pelabuhan Banten',
    coordinates: [106.15, -6.03],
    precision: 'place',
  },
  'voc-ambon-1605': {
    name: 'Benteng Victoria, Ambon',
    coordinates: [128.18, -3.7],
    precision: 'place',
  },
  'puputan-jagaraga-1849': {
    name: 'Jagaraga, Bali Utara',
    coordinates: [115.19, -8.2],
    precision: 'place',
  },
  'perang-banjar-1859': {
    name: 'Pengaron, Kalimantan Selatan',
    coordinates: [115.05, -3.4],
    precision: 'place',
  },
};

const REGION_LOCATIONS: Record<NonNullable<TimelineEvent['region']>, EventLocation> = {
  Sunda: { name: 'Paparan Sunda', coordinates: [110.2, 1.1], precision: 'region' },
  Sahul: { name: 'Paparan Sahul', coordinates: [135.0, -7.4], precision: 'region' },
  Jawa: { name: 'Pulau Jawa', coordinates: [110.7, -7.3], precision: 'region' },
  Sumatera: { name: 'Pulau Sumatera', coordinates: [101.5, -0.5], precision: 'region' },
  Kalimantan: { name: 'Pulau Kalimantan', coordinates: [114.5, 0.0], precision: 'region' },
  Sulawesi: { name: 'Pulau Sulawesi', coordinates: [121.0, -2.0], precision: 'region' },
  Bali: { name: 'Pulau Bali', coordinates: [115.2, -8.4], precision: 'region' },
  Maluku: { name: 'Kepulauan Maluku', coordinates: [127.7, -1.3], precision: 'region' },
  Papua: { name: 'Pulau Papua', coordinates: [137.0, -4.0], precision: 'region' },
  'Nusa Tenggara': {
    name: 'Kepulauan Nusa Tenggara',
    coordinates: [119.5, -8.5],
    precision: 'region',
  },
  Nasional: {
    name: 'Nusantara (titik perkiraan)',
    coordinates: [116.0, -2.0],
    precision: 'region',
  },
};

const GENERIC_ALIASES = new Set([
  'melayu',
  'indonesia',
  'nusantara',
  'jawa',
  'sumatera',
  'kalimantan',
  'sulawesi',
  'bali',
  'papua',
  'maluku',
]);

function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function hasPlace(text: string, place: string): boolean {
  const normalizedText = normalize(text);
  const normalizedPlace = normalize(place).trim();
  if (!normalizedPlace || normalizedPlace.length < 4) return false;
  const escaped = normalizedPlace.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
  return new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`).test(normalizedText);
}

const CITY_ALIASES = CITIES_DATA.flatMap((city) => {
  const variants = [
    city.name,
    ...city.name.split(/[(/]/),
    ...(city.historicalNames || []).map((entry) => entry.name),
  ];
  return [
    ...new Set(
      variants
        .map((name) => name.trim())
        .filter((name) => name.length >= 4 && !GENERIC_ALIASES.has(normalize(name))),
    ),
  ].map((name) => ({ name, city }));
}).sort((a, b) => b.name.length - a.name.length);

const SPECIAL_PLACES: Array<{ aliases: string[]; location: EventLocation }> = [
  {
    aliases: ['Kaldera Toba', 'Gunung Toba', 'Danau Toba'],
    location: LOCATION_OVERRIDES['toba-supervolcano'],
  },
  {
    aliases: ['Gunung Samalas', 'Samalas'],
    location: LOCATION_OVERRIDES['samalas-eruption-lombok'],
  },
  { aliases: ['Gunung Tambora', 'Tambora'], location: LOCATION_OVERRIDES['tambora-eruption-1815'] },
  { aliases: ['Gunung Kelud', 'Kelud'], location: LOCATION_OVERRIDES['kelud-eruption-2014'] },
  { aliases: ['Gunung Merapi', 'Merapi'], location: LOCATION_OVERRIDES['merapi-eruption-1930'] },
  { aliases: ['Gunung Agung', 'Agung'], location: LOCATION_OVERRIDES['agung-eruption-1963'] },
  { aliases: ['Krakatau', 'Krakatoa'], location: LOCATION_OVERRIDES['krakatau-eruption-1883'] },
  { aliases: ['Gunung Ruang', 'Ruang'], location: LOCATION_OVERRIDES['ruang-eruption-2024'] },
  { aliases: ['Selat Sunda'], location: LOCATION_OVERRIDES['sunda-strait-tsunami-2018'] },
  { aliases: ['Palu'], location: LOCATION_OVERRIDES['palu-earthquake-tsunami-2018'] },
  { aliases: ['Banda Aceh', 'Aceh'], location: LOCATION_OVERRIDES['tsunami-aceh-2004'] },
  { aliases: ['Den Haag', 'The Hague'], location: LOCATION_OVERRIDES['kmb-sovereignty'] },
  { aliases: ['Amsterdam'], location: LOCATION_OVERRIDES['voc-establishment'] },
  {
    aliases: ['Kota Kapur'],
    location: { name: 'Kota Kapur, Bangka', coordinates: [105.8, -2.12], precision: 'place' },
  },
  {
    aliases: ['Sunda Kalapa', 'Jayakarta', 'Batavia'],
    location: { name: 'Jakarta', coordinates: [106.82, -6.17], precision: 'place' },
  },
  { aliases: ['Kalijati'], location: LOCATION_OVERRIDES['japanese-invasion'] },
  { aliases: ['Pegangsaan Timur'], location: LOCATION_OVERRIDES['indonesia-proclamation'] },
];

/** Resolves a source-declared point first, then named places in the event, and finally its broad region. */
export function resolveEventLocation(event: TimelineEvent): EventLocation | undefined {
  if (event.location) return event.location;
  const override = LOCATION_OVERRIDES[event.id];
  if (override) return override;

  const primaryText = [event.title, event.subtitle, ...event.tags].filter(Boolean).join(' ');
  const fullText = [primaryText, event.summary, event.impact].filter(Boolean).join(' ');
  for (const place of SPECIAL_PLACES) {
    if (place.aliases.some((alias) => hasPlace(primaryText, alias))) return place.location;
  }
  for (const { name, city } of CITY_ALIASES) {
    if (hasPlace(primaryText, name)) {
      return { name: city.name, coordinates: city.coordinates, precision: 'place' };
    }
  }
  for (const place of SPECIAL_PLACES) {
    if (place.aliases.some((alias) => hasPlace(fullText, alias))) return place.location;
  }
  for (const { name, city } of CITY_ALIASES) {
    if (hasPlace(fullText, name)) {
      return { name: city.name, coordinates: city.coordinates, precision: 'place' };
    }
  }
  return REGION_LOCATIONS[event.region || 'Nasional'];
}
