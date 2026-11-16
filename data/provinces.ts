import type { ModernProvince, HistoricalAdminDivision } from '../lib/provinces';

export const MODERN_PROVINCES: ModernProvince[] = [
  // --- SUMATERA (10 PROVINSI) ---
  {
    id: 'aceh',
    name: 'Aceh',
    capital: 'Banda Aceh',
    islandGroup: 'Sumatera',
    coordinates: [96.75, 4.25],
    formedYear: 1956,
    historicalBackground:
      'Bekas wilayah Kesultanan Aceh Darussalam; Daerah Istimewa (1959) dan Otonomi Khusus Nanggroe Aceh Darussalam.',
  },
  {
    id: 'sumatera-utara',
    name: 'Sumatera Utara',
    capital: 'Medan',
    islandGroup: 'Sumatera',
    coordinates: [99.07, 2.12],
    formedYear: 1950,
    historicalBackground:
      'Wilayah Kesultanan Deli, Serdang, Asahan, Tanah Batak, dan Nias; pusat perkebunan tembakau dan karet Sumatera Timur.',
  },
  {
    id: 'sumatera-barat',
    name: 'Sumatera Barat',
    capital: 'Padang',
    islandGroup: 'Sumatera',
    coordinates: [100.55, -0.74],
    formedYear: 1958,
    historicalBackground:
      'Ranah Minangkabau berfalsafah Adat Basandi Syarak, Syarak Basandi Kitabullah; basis PDRI Bukittinggi (1948).',
  },
  {
    id: 'riau',
    name: 'Riau',
    capital: 'Pekanbaru',
    islandGroup: 'Sumatera',
    coordinates: [101.71, 0.51],
    formedYear: 1958,
    historicalBackground:
      'Wilayah Kesultanan Siak Sri Indrapura, Pelalawan, dan Indragiri di sepanjang aliran Sungai Siak dan Kampar.',
  },
  {
    id: 'kepulauan-riau',
    name: 'Kepulauan Riau',
    capital: 'Tanjungpinang',
    islandGroup: 'Sumatera',
    coordinates: [104.45, 1.15],
    formedYear: 2002,
    historicalBackground:
      'Jantung Kesultanan Riau-Lingga di Pulau Penyengat; pemekaran dari Provinsi Riau tahun 2002.',
  },
  {
    id: 'jambi',
    name: 'Jambi',
    capital: 'Jambi',
    islandGroup: 'Sumatera',
    coordinates: [102.72, -1.61],
    formedYear: 1958,
    historicalBackground:
      'Bekas pusat Kerajaan Melayu Kuno dan Kesultanan Jambi di sepanjang Sungai Batanghari.',
  },
  {
    id: 'sumatera-selatan',
    name: 'Sumatera Selatan',
    capital: 'Palembang',
    islandGroup: 'Sumatera',
    coordinates: [104.17, -3.32],
    formedYear: 1950,
    historicalBackground:
      'Episentrum Kemaharajaan Sriwijaya dan Kesultanan Palembang Darussalam di Lembah Sungai Musi.',
  },
  {
    id: 'kepulauan-bangka-belitung',
    name: 'Kepulauan Bangka Belitung',
    capital: 'Pangkalpinang',
    islandGroup: 'Sumatera',
    coordinates: [106.35, -2.5],
    formedYear: 2000,
    historicalBackground:
      'Kepulauan penghasil timah terbesar Nusantara; tempat pengasingan para pemimpin Republik (Soekarno-Hatta) tahun 1948.',
  },
  {
    id: 'bengkulu',
    name: 'Bengkulu',
    capital: 'Bengkulu',
    islandGroup: 'Sumatera',
    coordinates: [102.26, -3.8],
    formedYear: 1968,
    historicalBackground:
      'Pangkalan dagang lada Inggris Fort Marlborough (1685-1824) sebelum diserahkan ke Belanda melalui Traktat London 1824.',
  },
  {
    id: 'lampung',
    name: 'Lampung',
    capital: 'Bandar Lampung',
    islandGroup: 'Sumatera',
    coordinates: [105.15, -4.95],
    formedYear: 1964,
    historicalBackground:
      'Pintu gerbang selatan Sumatera; wilayah persekutuan adat Sai Batin dan Pepadun di pesisir Selat Sunda.',
  },

  // --- JAWA (6 PROVINSI) ---
  {
    id: 'banten',
    name: 'Banten',
    capital: 'Serang',
    islandGroup: 'Jawa',
    coordinates: [106.15, -6.4],
    formedYear: 2000,
    historicalBackground:
      'Bekas Kesultanan Banten maritim lada akbar; dimekarkan dari Jawa Barat pada era Reformasi tahun 2000.',
  },
  {
    id: 'dki-jakarta',
    name: 'DKI Jakarta',
    capital: 'Jakarta Pusat',
    islandGroup: 'Jawa',
    coordinates: [106.84, -6.21],
    formedYear: 1961,
    historicalBackground:
      'Sunda Kalapa -> Jayakarta -> Batavia -> Ibukota Negara Proklamasi 17 Agustus 1945.',
  },
  {
    id: 'jawa-barat',
    name: 'Jawa Barat',
    capital: 'Bandung',
    islandGroup: 'Jawa',
    coordinates: [107.6, -6.9],
    formedYear: 1945,
    historicalBackground:
      'Tanah Pasundan Kerajaan Tarumanagara, Sunda-Galuh, dan Karesidenan Priangan.',
  },
  {
    id: 'jawa-tengah',
    name: 'Jawa Tengah',
    capital: 'Semarang',
    islandGroup: 'Jawa',
    coordinates: [110.15, -7.15],
    formedYear: 1945,
    historicalBackground:
      'Pusat Dinasti Kalingga, Sanjaya-Syailendra Candi Borobudur, dan Kesultanan Demak.',
  },
  {
    id: 'di-yogyakarta',
    name: 'DI Yogyakarta',
    capital: 'Yogyakarta',
    islandGroup: 'Jawa',
    coordinates: [110.39, -7.88],
    formedYear: 1950,
    historicalBackground:
      'Kasultanan Ngayogyakarta Hadiningrat dan Kadipaten Pakualaman; ibukota perjuangan RI (1946-1949).',
  },
  {
    id: 'jawa-timur',
    name: 'Jawa Timur',
    capital: 'Surabaya',
    islandGroup: 'Jawa',
    coordinates: [112.5, -7.7],
    formedYear: 1945,
    historicalBackground:
      'Wilayah Medang Jawa Timur, Kahuripan Airlangga, Kediri, Singhasari, dan Majapahit Trowulan.',
  },

  // --- BALI & NUSA TENGGARA (3 PROVINSI) ---
  {
    id: 'bali',
    name: 'Bali',
    capital: 'Denpasar',
    islandGroup: 'Bali & Nusa Tenggara',
    coordinates: [115.18, -8.45],
    formedYear: 1958,
    historicalBackground:
      'Pulau Dewata berpusat pada kerajaan Dinasti Warmadewa, Gelgel, Klungkung, dan sembilan kerajaan swapraja.',
  },
  {
    id: 'nusa-tenggara-barat',
    name: 'Nusa Tenggara Barat',
    capital: 'Mataram',
    islandGroup: 'Bali & Nusa Tenggara',
    coordinates: [117.4, -8.65],
    formedYear: 1958,
    historicalBackground:
      'Meliputi Pulau Lombok (Sasak & Puri Cakranegara) dan Pulau Sumbawa (Kesultanan Bima, Dompu, Sumbawa).',
  },
  {
    id: 'nusa-tenggara-timur',
    name: 'Nusa Tenggara Timur',
    capital: 'Kupang',
    islandGroup: 'Bali & Nusa Tenggara',
    coordinates: [121.5, -9.0],
    formedYear: 1958,
    historicalBackground:
      'Kepulauan Flobamora (Flores, Sumba, Timor Barat, Alor); jalur kayu cendana dan benteng VOC Concordia Kupang.',
  },

  // --- KALIMANTAN (5 PROVINSI) ---
  {
    id: 'kalimantan-barat',
    name: 'Kalimantan Barat',
    capital: 'Pontianak',
    islandGroup: 'Kalimantan',
    coordinates: [110.5, -0.1],
    formedYear: 1956,
    historicalBackground:
      'Lembah Sungai Kapuas terpanjang di Indonesia; Kesultanan Pontianak, Sambas, Matan, dan Republik Lanfang.',
  },
  {
    id: 'kalimantan-tengah',
    name: 'Kalimantan Tengah',
    capital: 'Palangka Raya',
    islandGroup: 'Kalimantan',
    coordinates: [113.5, -1.8],
    formedYear: 1957,
    historicalBackground:
      'Tanah Dayak Kahayan dan Kapuas; dirintis Tjilik Riwut dan Presiden Soekarno mendirikan Palangka Raya.',
  },
  {
    id: 'kalimantan-selatan',
    name: 'Kalimantan Selatan',
    capital: 'Banjarbaru',
    islandGroup: 'Kalimantan',
    coordinates: [115.3, -2.8],
    formedYear: 1956,
    historicalBackground:
      'Episentrum Kesultanan Banjar di Lembah Sungai Barito dan Martapura; Perang Banjar Pangeran Antasari.',
  },
  {
    id: 'kalimantan-timur',
    name: 'Kalimantan Timur',
    capital: 'Samarinda',
    islandGroup: 'Kalimantan',
    coordinates: [116.5, 0.5],
    formedYear: 1956,
    historicalBackground:
      'Wilayah Kerajaan Kutai Martapura (Prasasti Yupa tertua), Kesultanan Kutai Kartanegara, dan lokasi Ibu Kota Nusantara (IKN).',
  },
  {
    id: 'kalimantan-utara',
    name: 'Kalimantan Utara',
    capital: 'Tanjung Selor',
    islandGroup: 'Kalimantan',
    coordinates: [116.8, 2.9],
    formedYear: 2012,
    historicalBackground:
      'Provinsi termuda di Kalimantan; bekas wilayah Kesultanan Bulungan dan pangkalan minyak strategis Tarakan.',
  },

  // --- SULAWESI (6 PROVINSI) ---
  {
    id: 'sulawesi-barat',
    name: 'Sulawesi Barat',
    capital: 'Mamuju',
    islandGroup: 'Sulawesi',
    coordinates: [119.25, -2.4],
    formedYear: 2004,
    historicalBackground:
      'Wilayah adat Mandar Pitu Ulunna Salu dan Pitu Baqbana Binanga; tradisi maritim perahu Sandeq.',
  },
  {
    id: 'sulawesi-selatan',
    name: 'Sulawesi Selatan',
    capital: 'Makassar',
    islandGroup: 'Sulawesi',
    coordinates: [120.0, -3.8],
    formedYear: 1960,
    historicalBackground:
      'Tanah Bugis, Makassar, Toraja, dan Luwu; kemaharajaan maritim Gowa-Tallo, Bone, dan epos I La Galigo.',
  },
  {
    id: 'sulawesi-tenggara',
    name: 'Sulawesi Tenggara',
    capital: 'Kendari',
    islandGroup: 'Sulawesi',
    coordinates: [122.0, -4.2],
    formedYear: 1964,
    historicalBackground:
      'Wilayah Kesultanan Buton (Benteng Keraton Wolio) dan suku Tolaki, Muna, Moronene.',
  },
  {
    id: 'sulawesi-tengah',
    name: 'Sulawesi Tengah',
    capital: 'Palu',
    islandGroup: 'Sulawesi',
    coordinates: [121.2, -1.2],
    formedYear: 1964,
    historicalBackground:
      'Lembah Palu dan Dataran Tinggi Lore megalitikum tertua; pesisir Teluk Tomini dan Teluk Tolo.',
  },
  {
    id: 'gorontalo',
    name: 'Gorontalo',
    capital: 'Gorontalo',
    islandGroup: 'Sulawesi',
    coordinates: [122.5, 0.7],
    formedYear: 2000,
    historicalBackground:
      'Bumi Serambi Madinah; perserikatan lima persaudaraan kerajaan Hulontalo di Teluk Tomini.',
  },
  {
    id: 'sulawesi-utara',
    name: 'Sulawesi Utara',
    capital: 'Manado',
    islandGroup: 'Sulawesi',
    coordinates: [124.5, 1.2],
    formedYear: 1960,
    historicalBackground:
      'Tanah Minahasa, Bolaang Mongondow, dan Kepulauan Sangihe-Talaud di perbatasan Samudra Pasifik.',
  },

  // --- MALUKU (2 PROVINSI) ---
  {
    id: 'maluku',
    name: 'Maluku',
    capital: 'Ambon',
    islandGroup: 'Maluku',
    coordinates: [129.5, -3.2],
    formedYear: 1958,
    historicalBackground:
      'Kepulauan Rempah Selatan (Kepulauan Banda pala-fuli, Ambon, Seram, Kepulauan Aru-Kei).',
  },
  {
    id: 'maluku-utara',
    name: 'Maluku Utara',
    capital: 'Sofifi',
    islandGroup: 'Maluku',
    coordinates: [127.8, 0.8],
    formedYear: 1999,
    historicalBackground:
      'Moloku Kie Raha (Empat Gunung Maluku): Kesultanan Ternate, Tidore, Jailolo, dan Bacan.',
  },

  // --- PAPUA (6 PROVINSI) ---
  {
    id: 'papua',
    name: 'Papua',
    capital: 'Jayapura',
    islandGroup: 'Papua',
    coordinates: [139.5, -2.8],
    formedYear: 1969,
    historicalBackground:
      'Provinsi induk di pesisir utara Tanah Papua (Teluk Youtefa, Sarmi, Mamberamo, Kepulauan Yapen, Biak).',
  },
  {
    id: 'papua-barat',
    name: 'Papua Barat',
    capital: 'Manokwari',
    islandGroup: 'Papua',
    coordinates: [133.5, -1.8],
    formedYear: 1999,
    historicalBackground:
      'Kota peradaban Manokwari (misi Mansinam 1855) dan Teluk Bintuni di Semenanjung Bomberai.',
  },
  {
    id: 'papua-barat-daya',
    name: 'Papua Barat Daya',
    capital: 'Sorong',
    islandGroup: 'Papua',
    coordinates: [131.5, -1.2],
    formedYear: 2022,
    historicalBackground:
      'Pintu gerbang Kepulauan Raja Ampat dan pusat eksplorasi migas Sorong; pemekaran Papua Barat 2022.',
  },
  {
    id: 'papua-tengah',
    name: 'Papua Tengah',
    capital: 'Nabire',
    islandGroup: 'Papua',
    coordinates: [136.0, -3.5],
    formedYear: 2022,
    historicalBackground:
      'Membentang dari Teluk Cenderawasih hingga Pegunungan Sudirman dan tambang Grasberg Mimika.',
  },
  {
    id: 'papua-pegunungan',
    name: 'Papua Pegunungan',
    capital: 'Wamena',
    islandGroup: 'Papua',
    coordinates: [139.0, -4.2],
    formedYear: 2022,
    historicalBackground:
      'Satu-satunya provinsi terkurung daratan (landlocked) di Indonesia; berpusat di Lembah Baliem suku Dani.',
  },
  {
    id: 'papua-selatan',
    name: 'Papua Selatan',
    capital: 'Merauke',
    islandGroup: 'Papua',
    coordinates: [139.5, -7.2],
    formedYear: 2022,
    historicalBackground:
      'Dataran rendah basah rawa dan sabana Asmat, Boven Digoel, Mappi, dan Merauke di perbatasan Papua Nugini.',
  },
];

export const HISTORICAL_ADMIN_DIVISIONS: HistoricalAdminDivision[] = [
  // --- ERA PRASEJARAH / SM (BCE) ---
  {
    id: 'sunda-shelf-zone',
    name: 'Paparan Sunda (Sundaland)',
    category: 'prehistoric-zone',
    startYear: -20000,
    endYear: 0,
    coordinates: [108.0, -1.0],
    capitalOrCenter: 'Lembah Sungai Sunda Purba',
    context:
      'Dataran benua luas yang menyatukan Asia, Sumatera, Jawa, dan Kalimantan pada Zaman Es.',
  },
  {
    id: 'wallacea-zone',
    name: 'Zona Transisi Wallacea',
    category: 'prehistoric-zone',
    startYear: -20000,
    endYear: 0,
    coordinates: [122.0, -2.5],
    capitalOrCenter: 'Kepulauan Laut Dalam',
    context:
      'Zona kepulauan terisolasi antara Garis Wallace dan Garis Weber dengan fauna endemik unik.',
  },
  {
    id: 'sahul-shelf-zone',
    name: 'Paparan Sahul (Sahulland)',
    category: 'prehistoric-zone',
    startYear: -20000,
    endYear: 0,
    coordinates: [136.0, -6.0],
    capitalOrCenter: 'Lembah Arafura Purba',
    context: 'Paparan benua timur yang menghubungkan Pulau Papua dengan Benua Australia.',
  },

  // --- ERA MAJAPAHIT (1300 - 1500 M) ---
  {
    id: 'majapahit-negaragung-bhumi-jawa',
    name: 'Bhumi Jawa (Negaragung)',
    category: 'mancanagara',
    startYear: 1300,
    endYear: 1527,
    coordinates: [111.5, -7.5],
    capitalOrCenter: 'Trowulan',
    context:
      'Inti wilayah Majapahit mencakup Daha, Janggala, Kahuripan, Pajang, Matahun, Wengker, Tumapel, Lasem, dan Wirabhumi.',
  },
  {
    id: 'majapahit-bhumi-malayu',
    name: 'Bhumi Malayu (Mancanagara)',
    category: 'mancanagara',
    startYear: 1300,
    endYear: 1500,
    coordinates: [102.5, -1.0],
    capitalOrCenter: 'Dharmasraya & Jambi',
    context:
      'Wilayah taklukan dan mitra di Pulau Sumatera menurut Kakawin Nagarakretagama Pupuh 13.',
  },
  {
    id: 'majapahit-tanjungpura',
    name: 'Tanjungpura / Bakulapura',
    category: 'mancanagara',
    startYear: 1300,
    endYear: 1500,
    coordinates: [112.0, -1.5],
    capitalOrCenter: 'Sukadana & Kotawaringin',
    context: 'Wilayah bawahan Majapahit di pesisir Pulau Kalimantan barat dan selatan.',
  },
  {
    id: 'majapahit-hujung-medini',
    name: 'Hujung Medini (Semenanjung)',
    category: 'mancanagara',
    startYear: 1300,
    endYear: 1500,
    coordinates: [102.5, 3.5],
    capitalOrCenter: 'Pahang & Tumasik',
    context: 'Wilayah taklukan di Semenanjung Tanah Melayu dan Tumasik (Singapura).',
  },
  {
    id: 'majapahit-maluku-dwipa',
    name: 'Maluku Dwipa & Kepulauan Rempah',
    category: 'mancanagara',
    startYear: 1300,
    endYear: 1500,
    coordinates: [128.0, -1.5],
    capitalOrCenter: 'Banda & Ternate',
    context: 'Jaringan pelayaran upeti dan perdagangan rempah cengkih-pala Majapahit di timur.',
  },
  {
    id: 'majapahit-wwanin-sran',
    name: 'Wwanin & Sran (Papua Barat)',
    category: 'mancanagara',
    startYear: 1300,
    endYear: 1500,
    coordinates: [132.5, -2.8],
    capitalOrCenter: 'Onin (Fakfak) & Kaimana',
    context: 'Wilayah timur terjauh yang tercatat dalam Kakawin Nagarakretagama (1365 M).',
  },

  // --- ERA HINDIA BELANDA (GOUVERNEMENTEN 1800 - 1942 M) ---
  {
    id: 'gouv-java-madoera',
    name: 'Gouvernement van Java en Madoera',
    category: 'gouvernement',
    startYear: 1800,
    endYear: 1942,
    coordinates: [110.0, -7.2],
    capitalOrCenter: 'Batavia',
    context:
      'Pusat administrasi Hindia Belanda mencakup Karesidenan Banten, Priangan, Cirebon, Semarang, Surabaya, dan Vorstenlanden.',
  },
  {
    id: 'gouv-sumatra',
    name: 'Gouvernement van Sumatra',
    category: 'gouvernement',
    startYear: 1800,
    endYear: 1942,
    coordinates: [101.5, 0.5],
    capitalOrCenter: 'Medan / Padang',
    context:
      'Pemerintahan Hindia Belanda atas Pulau Sumatera: Atjeh, Sumatra’s Westkust, Tapanoeli, Riouw, Djambi, Palembang, Lampoeng.',
  },
  {
    id: 'gouv-borneo',
    name: 'Gouvernement van Borneo',
    category: 'gouvernement',
    startYear: 1845,
    endYear: 1942,
    coordinates: [113.5, 0.0],
    capitalOrCenter: 'Banjarmasin',
    context:
      'Westerafdeeling van Borneo (Pontianak) dan Zuider- en Oosterafdeeling van Borneo (Banjarmasin).',
  },
  {
    id: 'gouv-groote-oost',
    name: 'Gouvernement van de Groote Oost',
    category: 'gouvernement',
    startYear: 1800,
    endYear: 1942,
    coordinates: [124.0, -3.5],
    capitalOrCenter: 'Makassar / Amboina',
    context:
      'Gouvernement Timur Raya mencakup Celebes, Molukken, Kleine Soenda-eilanden, dan Nieuw-Guinea.',
  },

  // --- ERA 1945 (8 PROVINSI PERTAMA RI) ---
  {
    id: 'prov-1945-sumatera',
    name: 'Provinsi Sumatera (1945)',
    category: 'provinsi-1945',
    startYear: 1945,
    endYear: 1948,
    coordinates: [101.0, 0.0],
    capitalOrCenter: 'Bukittinggi / Medan (Gubernur: Teuku M. Hasan)',
    context:
      'Satu dari 8 provinsi perdana hasil sidang Panitia Persiapan Kemerdekaan Indonesia (PPKI) 19 Agustus 1945.',
  },
  {
    id: 'prov-1945-jawa-barat',
    name: 'Provinsi Jawa Barat (1945)',
    category: 'provinsi-1945',
    startYear: 1945,
    endYear: 1950,
    coordinates: [107.2, -6.8],
    capitalOrCenter: 'Bandung (Gubernur: Sutardjo Kertohadikusumo)',
    context: 'Provinsi perdana PPKI 1945 meliputi Banten, Batavia/Jakarta, dan Priangan.',
  },
  {
    id: 'prov-1945-jawa-tengah',
    name: 'Provinsi Jawa Tengah (1945)',
    category: 'provinsi-1945',
    startYear: 1945,
    endYear: 1950,
    coordinates: [110.2, -7.2],
    capitalOrCenter: 'Semarang (Gubernur: R. Panji Soeroso)',
    context:
      'Provinsi perdana PPKI 1945 membawahi Karesidenan Semarang, Pati, Pekalongan, Banyumas, Kedu, dan Surakarta.',
  },
  {
    id: 'prov-1945-jawa-timur',
    name: 'Provinsi Jawa Timur (1945)',
    category: 'provinsi-1945',
    startYear: 1945,
    endYear: 1950,
    coordinates: [112.5, -7.8],
    capitalOrCenter: 'Surabaya (Gubernur: R.M.T. Soerjo)',
    context:
      'Provinsi perdana PPKI 1945 pimpinan Gubernur Soerjo (tokoh Pertempuran Surabaya 10 November 1945).',
  },
  {
    id: 'prov-1945-sunda-kecil',
    name: 'Provinsi Sunda Kecil (1945)',
    category: 'provinsi-1945',
    startYear: 1945,
    endYear: 1958,
    coordinates: [118.0, -8.6],
    capitalOrCenter: 'Singaraja (Gubernur: Mr. I Goesti Ketoet Poedja)',
    context:
      'Provinsi perdana PPKI 1945 meliputi Bali, Lombok, Sumbawa, Flores, Sumba, dan Timor Barat.',
  },
  {
    id: 'prov-1945-borneo',
    name: 'Provinsi Borneo (1945)',
    category: 'provinsi-1945',
    startYear: 1945,
    endYear: 1956,
    coordinates: [113.5, 0.0],
    capitalOrCenter: 'Banjarmasin (Gubernur: Ir. P.M. Noor)',
    context: 'Provinsi perdana PPKI 1945 yang mencakup seluruh wilayah Kalimantan.',
  },
  {
    id: 'prov-1945-sulawesi',
    name: 'Provinsi Sulawesi (1945)',
    category: 'provinsi-1945',
    startYear: 1945,
    endYear: 1960,
    coordinates: [120.5, -2.5],
    capitalOrCenter: 'Makassar (Gubernur: Dr. G.S.S.J. Ratulangie)',
    context: 'Provinsi perdana PPKI 1945 mencakup seluruh Semenanjung dan Kepulauan Sulawesi.',
  },
  {
    id: 'prov-1945-maluku',
    name: 'Provinsi Maluku (1945)',
    category: 'provinsi-1945',
    startYear: 1945,
    endYear: 1958,
    coordinates: [128.5, -3.0],
    capitalOrCenter: 'Ambon (Gubernur: Mr. J. Latuharhary)',
    context: 'Provinsi perdana PPKI 1945 membawahi Kepulauan Maluku dan Irian Barat (Papua).',
  },
];
