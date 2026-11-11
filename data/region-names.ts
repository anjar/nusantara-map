import type { DynamicRegionLabel } from '../lib/region-names';

export const DYNAMIC_REGION_LABELS: DynamicRegionLabel[] = [
  // 1. Sumatera
  {
    id: 'sumatra',
    longitude: 101.5,
    latitude: -1.0,
    kind: 'island',
    getName: (year: number) => {
      if (year <= -4000) return { primary: 'DARATAN SUNDA BARAT', historicalContext: 'Bagian Paparan Sunda' };
      if (year <= 400) return { primary: 'SUVARNABHUMI', historicalContext: 'Tanah Emas Purba' };
      if (year <= 1300) return { primary: 'SWARNADWIPA', historicalContext: 'Pulau Emas · Era Sriwijaya' };
      if (year <= 1500) return { primary: 'BHUMI MALAYU', historicalContext: 'Nagarakretagama (1365)' };
      if (year <= 1800) return { primary: 'PULAU PERCA / ANDALAS', historicalContext: 'Era Kesultanan' };
      if (year <= 1945) return { primary: 'SUMATRA', historicalContext: 'Gouvernement van Sumatra' };
      return { primary: 'SUMATERA', historicalContext: 'Republik Indonesia' };
    }
  },

  // 2. Jawa
  {
    id: 'java',
    longitude: 108.8,
    latitude: -7.35,
    kind: 'island',
    getName: (year: number) => {
      if (year <= -4000) return { primary: 'DATARAN JAWA PURBA', historicalContext: 'Lembah Pegunungan Selatan Sunda' };
      if (year <= 400) return { primary: 'YAWADWIPA', historicalContext: 'Pulau Jelai · Ramayana & Ptolemaeus' };
      if (year <= 1300) return { primary: 'JAWA DWIPA', historicalContext: 'Tarumanagara, Kalingga, Medang' };
      if (year <= 1500) return { primary: 'BHUMI JAWA', historicalContext: 'Kemaharajaan Majapahit' };
      if (year <= 1800) return { primary: 'TANAH JAWA', historicalContext: 'Kesultanan Demak & Mataram' };
      if (year <= 1945) return { primary: 'JAVA', historicalContext: 'Gouvernement van Java en Madoera' };
      return { primary: 'JAWA', historicalContext: 'Republik Indonesia' };
    }
  },

  // 3. Kalimantan
  {
    id: 'kalimantan',
    longitude: 114.0,
    latitude: 0.5,
    kind: 'island',
    getName: (year: number) => {
      if (year <= -4000) return { primary: 'JANTUNG PAPARAN SUNDA', historicalContext: 'Hulu Sungai Sunda Purba' };
      if (year <= 400) return { primary: 'WARUNADWIPA', historicalContext: 'Nusa Kencana Purba' };
      if (year <= 1300) return { primary: 'KUTAI MARTAPURA', historicalContext: 'Kerajaan Tertua Nusantara' };
      if (year <= 1500) return { primary: 'TANJUNGPURA', historicalContext: 'Bakulapura · Nagarakretagama' };
      if (year <= 1800) return { primary: 'BORNEO', historicalContext: 'Kesultanan Banjar & Sukadana' };
      if (year <= 1945) return { primary: 'BORNEO (NED.-INDIE)', historicalContext: 'Wester- en Zuiderafdeeling' };
      return { primary: 'KALIMANTAN', historicalContext: 'Republik Indonesia' };
    }
  },

  // 4. Semenanjung Malaysia (Semenanjung Melayu)
  {
    id: 'peninsular-malaysia',
    longitude: 102.0,
    latitude: 4.2,
    kind: 'region',
    getName: (year: number) => {
      if (year <= -4000) return { primary: 'KORIDOR SUNDA UTARA', historicalContext: 'Jembatan Benua Asia Tenggara' };
      if (year <= 400) return { primary: 'CHRYSE CHERSONESE', historicalContext: 'Semenanjung Emas (Ptolemaeus)' };
      if (year <= 1300) return { primary: 'KEDAH TUA & LANGKASUKA', historicalContext: 'Peradaban Bahari Awal' };
      if (year <= 1500) return { primary: 'HUJUNG MEDINI', historicalContext: 'Nagarakretagama / Kesultanan Malaka' };
      if (year <= 1800) return { primary: 'TANAH MELAYU', historicalContext: 'Negeri-Negeri Melayu' };
      if (year <= 1957) return { primary: 'BRITISH MALAYA', historicalContext: 'Malaya Britania' };
      return { primary: 'MALAYSIA (SEMENANJUNG)', historicalContext: 'Federasi Malaysia' };
    }
  },

  // 5. Sarawak & Sabah (Borneo Utara / Malaysia Timur)
  {
    id: 'malaysian-borneo',
    longitude: 114.5,
    latitude: 3.5,
    kind: 'region',
    getName: (year: number) => {
      if (year <= -4000) return { primary: 'PESISIR UTARA SUNDALAND', historicalContext: 'Batas Cekungan Laut Cina Selatan' };
      if (year <= 1500) return { primary: 'BARUNAY PESISIR', historicalContext: 'Taklukan Kerajaan Barune' };
      if (year <= 1841) return { primary: 'BRUNEI & SULU', historicalContext: 'Wilayah Kesultanan' };
      if (year <= 1963) return { primary: 'SARAWAK & NORTH BORNEO', historicalContext: 'Raj Sarawak & Protektorat Britania' };
      return { primary: 'MALAYSIA (SABAH & SARAWAK)', historicalContext: 'Malaysia Timur' };
    }
  },

  // 6. Brunei Darussalam
  {
    id: 'brunei',
    longitude: 114.9,
    latitude: 4.8,
    kind: 'region',
    getName: (year: number) => {
      if (year <= -4000) return { primary: 'TELUK SUNDA UTARA', historicalContext: 'Muara Laut Dalam' };
      if (year <= 1300) return { primary: 'PO-NI', historicalContext: 'Catatan Dinasti Song & Tang' };
      if (year <= 1500) return { primary: 'BARUNE', historicalContext: 'Nagarakretagama (1365)' };
      if (year <= 1888) return { primary: 'KESULTANAN BRUNEI', historicalContext: 'Imperium Thalasokrasi Brunei' };
      if (year <= 1984) return { primary: 'BRITISH BRUNEI', historicalContext: 'Negara Naungan Britania' };
      return { primary: 'BRUNEI DARUSSALAM', historicalContext: 'Negara Brunei Darussalam' };
    }
  },

  // 7. Sulawesi
  {
    id: 'sulawesi',
    longitude: 121.0,
    latitude: -2.0,
    kind: 'island',
    getName: (year: number) => {
      if (year <= -4000) return { primary: 'KEPULAUAN WALLACEA', historicalContext: 'Zona Endemik Terisolir' };
      if (year <= 1300) return { primary: 'CELEBES PURBA', historicalContext: 'Peradaban Megalitikum Pokekea' };
      if (year <= 1500) return { primary: 'BANTAYAN & LUWUK', historicalContext: 'Nagarakretagama (1365)' };
      if (year <= 1800) return { primary: 'TANAH MAKASSAR & BUGIS', historicalContext: 'Kemaharajaan Gowa-Tallo & Bone' };
      if (year <= 1945) return { primary: 'CELEBES', historicalContext: 'Gouvernement van Celebes' };
      return { primary: 'SULAWESI', historicalContext: 'Republik Indonesia' };
    }
  },

  // 8. Maluku
  {
    id: 'maluku',
    longitude: 128.0,
    latitude: -3.2,
    kind: 'island',
    getName: (year: number) => {
      if (year <= -4000) return { primary: 'WALLACEA TIMUR', historicalContext: 'Kepulauan Laut Dalam' };
      if (year <= 1300) return { primary: 'JAZIRAH AL-MULK', historicalContext: 'Jazirah Raja-raja Rempah' };
      if (year <= 1500) return { primary: 'MALUKU DWIPA', historicalContext: 'Ternate, Tidore, Jailolo, Bacan' };
      if (year <= 1800) return { primary: 'SPICE ISLANDS (KEP. REMPAH)', historicalContext: 'Pusat Cengkih & Pala Dunia' };
      if (year <= 1945) return { primary: 'DE MOLUKKEN', historicalContext: 'Gouvernement der Molukken' };
      return { primary: 'MALUKU', historicalContext: 'Republik Indonesia' };
    }
  },

  // 9. Papua
  {
    id: 'papua',
    longitude: 136.5,
    latitude: -4.0,
    kind: 'island',
    getName: (year: number) => {
      if (year <= -4000) return { primary: 'PAPARAN SAHUL UTARA', historicalContext: 'Menyatu dengan Australia' };
      if (year <= 1300) return { primary: 'JANGGI / SAMUDRANTA', historicalContext: 'Ujung Samudra Timur' };
      if (year <= 1500) return { primary: 'WWANIN & SRAN', historicalContext: 'Onin (Fakfak) & Kaimana' };
      if (year <= 1800) return { primary: 'TANAH PAPUA', historicalContext: 'Wilayah Kekuasaan Sultan Tidore' };
      if (year <= 1963) return { primary: 'NEDERLANDS-NIEUW-GUINEA', historicalContext: 'Nieuw-Guinea' };
      return { primary: 'PAPUA', historicalContext: 'Republik Indonesia' };
    }
  },

  // 10. Perairan Laut Jawa
  {
    id: 'sea-java',
    longitude: 110.3,
    latitude: -5.6,
    kind: 'water',
    getName: (year: number) => {
      if (year <= -8500) return { primary: 'LEMBAH SUNDA TIMUR', historicalContext: 'Daratan Sabana Kering (Bukan Laut)' };
      if (year <= 1500) return { primary: 'SEGARA JAWA', historicalContext: 'Jalur Pelayaran Kuno' };
      return { primary: 'LAUT JAWA', historicalContext: 'Perairan Kepulauan' };
    }
  },

  // 11. Samudra Hindia
  {
    id: 'ocean-indian',
    longitude: 108.8,
    latitude: -9.6,
    kind: 'water',
    getName: (year: number) => {
      if (year <= -4000) return { primary: 'SAMUDRA SELATAN PURBA' };
      if (year <= 1500) return { primary: 'SAMUDRA SAMBODHA / SEGARA KIDUL' };
      return { primary: 'SAMUDRA HINDIA' };
    }
  }
];
