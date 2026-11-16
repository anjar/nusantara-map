import type { TradeRoute, HistoricFortification } from '../lib/routes';

export const HISTORIC_TRADE_ROUTES: TradeRoute[] = [
  {
    id: 'spice-route-banda-malacca',
    name: 'Jalur Rempah Nusantara (The Spice Route)',
    kind: 'maritime',
    startYear: 200,
    endYear: 1800,
    coordinates: [
      [127.38, 0.79], // Ternate
      [129.9, -4.52], // Banda Neira
      [119.41, -5.15], // Makassar
      [112.65, -7.16], // Gresik/Tuban
      [106.82, -6.17], // Sunda Kalapa / Banten
      [104.0, 1.3], // Selat Singapura
      [102.25, 2.19], // Malaka
      [95.32, 5.55], // Banda Aceh / Samudra Hindia
    ],
    commodity: 'Pala, Cengkih, Lada, Fuli',
    description:
      'Arteri pelayaran rempah utama yang menghubungkan kepulauan rempah Maluku ke pelabuhan transit Jawa dan Selat Malaka menuju pasar dunia.',
  },
  {
    id: 'maritime-silk-road',
    name: 'Jalur Sutra Maritim (Maritime Silk Road)',
    kind: 'maritime',
    startYear: -100,
    endYear: 1900,
    coordinates: [
      [109.0, 6.0],
      [105.0, 2.5],
      [104.45, 1.15],
      [106.82, -6.17],
      [101.5, -2.5],
      [95.32, 5.55],
      [90.0, 6.0],
    ],
    commodity: 'Sutra, Keramik, Manik-manik Kaca, Dupa',
    description:
      'Jalur perdagangan bahari global yang menghubungkan Tiongkok, Nusantara, India, dan Timur Tengah melalui Selat Malaka dan Selat Sunda.',
  },
  {
    id: 'camphor-gold-route',
    name: 'Jalur Kapur Barus & Emas Swarnadwipa',
    kind: 'maritime',
    startYear: 500,
    endYear: 1850,
    coordinates: [
      [98.39, 2.0], // Barus
      [100.36, -0.95], // Padang
      [102.26, -3.8], // Bengkulu
      [105.26, -5.45], // Teluk Lampung
      [106.15, -6.03], // Banten
    ],
    commodity: 'Kapur Barus, Menyan, Damar, Emas Minangkabau',
    description:
      'Jalur pelayaran pesisir barat Sumatera penghasil komoditas getah wangi dan emas yang diserap pasar Mediterania, Arab, dan Tiongkok.',
  },
  {
    id: 'sandalwood-route',
    name: 'Jalur Kayu Cendana Nusa Tenggara',
    kind: 'maritime',
    startYear: 800,
    endYear: 1800,
    coordinates: [
      [124.5, -9.5], // Timor
      [120.0, -9.5], // Sumba
      [118.72, -8.45], // Bima
      [115.21, -8.67], // Bali
      [112.5, -7.5], // Majapahit / Jawa
    ],
    commodity: 'Kayu Cendana Wangi (Santalum album)',
    description:
      'Jalur pasokan kayu cendana bernilai tinggi dari Timor dan Sumba menuju keraton-keraton Jawa dan pusat pembakaran dupa Asia.',
  },
  {
    id: 'groote-postweg',
    name: 'Jalan Raya Pos Anyer-Panarukan (Groote Postweg)',
    kind: 'terrestrial',
    startYear: 1808,
    endYear: 2026,
    coordinates: [
      [105.93, -6.05], // Anyer
      [106.15, -6.12], // Serang
      [106.82, -6.17], // Batavia
      [106.8, -6.6], // Bogor
      [107.0, -6.7], // Puncak
      [107.61, -6.91], // Bandung
      [108.2, -6.83], // Sumedang
      [108.56, -6.72], // Cirebon
      [109.13, -6.87], // Tegal
      [109.67, -6.89], // Pekalongan
      [110.42, -6.99], // Semarang
      [110.64, -6.89], // Demak
      [111.45, -6.71], // Rembang
      [112.06, -6.89], // Tuban
      [112.75, -7.25], // Surabaya
      [112.91, -7.64], // Pasuruan
      [113.22, -7.75], // Probolinggo
      [114.0, -7.7], // Panarukan
    ],
    commodity: 'Komunikasi Pos, Militer, Angkutan Komoditas Tanam Paksa',
    description:
      'Jalan raya darat sepanjang 1.000 km di pesisir utara Jawa yang dibangun Daendels tahun 1808, menjadi tulang punggung transportasi modern Pulau Jawa.',
  },
];

export const HISTORIC_FORTIFICATIONS: HistoricFortification[] = [
  {
    id: 'benteng-somba-opu',
    name: 'Benteng Somba Opu',
    builtYear: 1510,
    coordinates: [119.39, -5.19],
    builder: 'Daeng Matanre Karaeng Manguntungi (Kerajaan Gowa)',
    description:
      'Benteng pertahanan utama kembar Kerajaan Gowa-Tallo berdinding tanah liat tebal dan meriam raksasa Anak Makassar.',
  },
  {
    id: 'benteng-rotterdam',
    name: 'Fort Rotterdam (Benteng Ujung Pandang)',
    builtYear: 1545,
    coordinates: [119.4, -5.13],
    builder: 'I Manrigau Daeng Bonto Karaeng Lakiung / VOC Cornelis Speelman',
    description:
      'Bermula dari benteng Gowa berdesain penyu menghadap laut, dialihkan ke VOC pasca-Perjanjian Bungaya 1667 dan dinamai Rotterdam.',
  },
  {
    id: 'benteng-belgica',
    name: 'Benteng Belgica (Banda Neira)',
    builtYear: 1611,
    coordinates: [129.9, -4.52],
    builder: 'Pieter Both (VOC)',
    description:
      'Benteng pentagonal bintang lima di bukit Neira untuk memonopoli rempah pala; dicetak pada mata uang rupiah.',
  },
  {
    id: 'benteng-victoria',
    name: 'Fort Victoria (Kota Laha Ambon)',
    builtYear: 1576,
    coordinates: [128.18, -3.69],
    builder: 'Sancho de Vasconcelos (Portugis) / VOC',
    description:
      'Benteng tertua di Kota Ambon di tepi Teluk Ambon; pusat perebutan monopoli cengkih antara Portugis, VOC, dan Kesultanan Ternate.',
  },
  {
    id: 'benteng-keraton-buton',
    name: 'Benteng Keraton Wolio (Buton)',
    builtYear: 1332,
    coordinates: [122.61, -5.46],
    builder: 'Kesultanan Buton (Sultan Murhum / La Elangi)',
    description:
      'Benteng batu kapur terluas di dunia (keliling 2.740 meter) bertengger di bukit Wolio, dilengkapi 16 kubu baluarti dan 12 lawana (pintu gerbang).',
  },
  {
    id: 'benteng-marlborough',
    name: 'Fort Marlborough (Bengkulu)',
    builtYear: 1714,
    coordinates: [102.25, -3.79],
    builder: 'Joseph Collett (East India Company Inggris)',
    description:
      'Benteng militer terkuat kedua Inggris di benua Asia setelah Benteng St. George Madras, dibangun menghadap Samudra Hindia.',
  },
  {
    id: 'benteng-vredeburg',
    name: 'Benteng Vredeburg (Yogyakarta)',
    builtYear: 1767,
    coordinates: [110.36, -7.8],
    builder: 'Sri Sultan Hamengkubuwono I & Nicolaas Harting (VOC)',
    description:
      'Benteng benteng perdamaian (Rustenburg / Vredeburg) di ujung selatan Malioboro berhadapan langsung dengan Karaton Ngayogyakarta.',
  },
  {
    id: 'benteng-vastenburg',
    name: 'Benteng Vastenburg (Surakarta)',
    builtYear: 1745,
    coordinates: [110.83, -7.57],
    builder: 'Gubernur Jenderal Baron van Imhoff (VOC)',
    description:
      'Benteng militer VOC di Gladak Surakarta untuk mengawasi Karaton Kasunanan Surakarta Hadiningrat.',
  },
  {
    id: 'benteng-kastela',
    name: 'Benteng Kastela (Gamlamo Ternate)',
    builtYear: 1522,
    coordinates: [127.32, 0.76],
    builder: 'Antonio de Brito (Portugis)',
    description:
      'Benteng bangsa Eropa pertama di Kepulauan Rempah Maluku (Nostra Senhora del Rosario), lokasi terbunuhnya Sultan Khairun 1570.',
  },
];
