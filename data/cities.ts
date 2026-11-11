import type { City } from '../lib/cities';

export const CITIES_DATA: City[] = [
  // --- SEBELUM MASEHI (BCE / SM) & PROTO-SEJARAH ---
  {
    id: 'liang-bua',
    name: 'Liang Bua (Flores)',
    coordinates: [120.44, -8.53],
    startYear: -20000,
    endYear: 2026,
    province: 'Nusa Tenggara Timur',
    type: 'ancient-settlement',
    description: 'Situs hunian gua karst prasejarah di Flores, lokasi penemuan fosil Homo floresiensis dan artefak batu paleolitik.',
    source: 'Brown et al. (2004) Nature / Pusat Penelitian Arkeologi Nasional'
  },
  {
    id: 'kalumpang',
    name: 'Kalumpang (Lembah Karama)',
    coordinates: [119.50, -2.55],
    startYear: -1500,
    endYear: 100,
    province: 'Sulawesi Barat',
    type: 'ancient-settlement',
    description: 'Situs permukiman neolitik penutur Austronesia tertua di Lembah Sungai Karama dengan tembikar slip merah bermotif khas.',
    source: 'Simanjuntak et al. (2008) Arkeologi Prasejarah Karama'
  },
  {
    id: 'batujaya-buni',
    name: 'Batujaya / Budaya Buni',
    coordinates: [107.15, -6.05],
    startYear: -500,
    endYear: 600,
    province: 'Jawa Barat',
    type: 'ancient-settlement',
    description: 'Situs permukiman protosejarah dan metalurgi pantai utara Jawa Barat; berkembang menjadi kompleks percandian bata tertua di Nusantara.',
    source: 'Manguin & Indradjaya (2011) Batujaya: Buddhist Stupas in West Java'
  },
  {
    id: 'pasemah',
    name: 'Dataran Tinggi Pasemah',
    coordinates: [103.25, -4.02],
    startYear: -500,
    endYear: 200,
    province: 'Sumatera Selatan',
    type: 'ancient-settlement',
    description: 'Kompleks permukiman dan pusat budaya megalitikum Lembah Besemah dengan arca batu dinamis penunggang kerbau dan bilik batu bergambar.',
    source: 'Von Heine-Geldern (1935) / BPCB Jambi'
  },
  {
    id: 'plawangan',
    name: 'Plawangan (Rembang)',
    coordinates: [111.45, -6.71],
    startYear: -300,
    endYear: 300,
    province: 'Jawa Tengah',
    type: 'ancient-settlement',
    description: 'Situs permukiman pesisir neolitik-paleometalik tepi Laut Jawa; bukti awal komunitas pelaut dan perdagangan maritim awal.',
    source: 'Prasetyo (2004) Balai Arkeologi Yogyakarta'
  },
  {
    id: 'gilimanuk',
    name: 'Gilimanuk (Selat Bali)',
    coordinates: [114.44, -8.16],
    startYear: -300,
    endYear: 100,
    province: 'Bali',
    type: 'ancient-settlement',
    description: 'Situs permukiman dan nekropolis bahari pelaut purba di Selat Bali dengan tembikar tempayan dan perhiasan perunggu-kaca.',
    source: 'Soejono (1977) Sistem-sistem Penguburan Akhir Prasejarah di Bali'
  },

  // --- KLASIK AWAL HINDU-BUDDHA (ABAD 1 - 9 M) ---
  {
    id: 'salakanagara',
    name: 'Rajatapura / Salakanagara',
    coordinates: [105.70, -6.50],
    startYear: 130,
    endYear: 362,
    province: 'Banten',
    type: 'capital',
    description: 'Pusat Kerajaan Salakanagara (Kota Perak) di pesisir Selat Sunda menurut naskah tradisi Wangsakerta.',
    source: 'Naskah Wangsakerta / Ayatrohaedi (2005) Sundakala'
  },
  {
    id: 'muara-kaman',
    name: 'Muara Kaman (Kutai Martapura)',
    coordinates: [116.80, -0.16],
    startYear: 350,
    endYear: 1605,
    province: 'Kalimantan Timur',
    type: 'capital',
    description: 'Pusat Kerajaan Kutai Martapura di tepi Sungai Mahakam; lokasi ditemukannya 7 Prasasti Yupa Raja Mulawarman (bukti tulisan tertua di Indonesia).',
    source: 'Vogel, J. Ph. (1918) The Yupa Inscriptions of King Mulavarman'
  },
  {
    id: 'tarumanagara',
    name: 'Sundapura (Tarumanagara)',
    coordinates: [107.00, -6.23],
    startYear: 358,
    endYear: 669,
    province: 'Jawa Barat',
    type: 'capital',
    description: 'Ibukota Kerajaan Tarumanagara era Maharaja Purnawarman; penggalian kanal Sungai Gomati dan Candrabhaga (Prasasti Tugu).',
    source: 'Prasasti Tugu / Poesponegoro & Notosusanto (2008)'
  },
  {
    id: 'barus',
    name: 'Fansur / Barus',
    coordinates: [98.39, 2.00],
    startYear: 500,
    endYear: 2026,
    province: 'Sumatera Utara',
    type: 'trading-port',
    description: 'Bandar pelabuhan kamfer dan kapur barus tertua di pesisir barat Sumatera; disinggahi pedagang Timur Tengah, Tamil, dan Tiongkok sejak abad ke-6.',
    source: 'Guillot, C. (2003) Histoire de Barus: Le site de Lobu Tua'
  },
  {
    id: 'muaro-jambi',
    name: 'Melayu / Muaro Jambi',
    coordinates: [103.65, -1.48],
    startYear: 644,
    endYear: 1377,
    province: 'Jambi',
    type: 'capital',
    description: 'Pusat Kerajaan Melayu Kuno dan kompleks universitas Buddhis bata merah terbesar di Asia Tenggara di tepian Batanghari.',
    source: 'Boechari (1985) / UNESCO Tentative List Muaro Jambi'
  },
  {
    id: 'palembang',
    name: 'Palembang (Sriwijaya)',
    coordinates: [104.75, -2.99],
    startYear: 671,
    endYear: 2026,
    province: 'Sumatera Selatan',
    type: 'capital',
    description: 'Pusat Kemaharajaan Bahari Sriwijaya (Prasasti Kedukan Bukit 682 M) hingga Kesultanan Palembang Darussalam di tepian Sungai Musi.',
    source: 'Coedes, G. (1918) Le Royaume de Crivijaya / Prasasti Kedukan Bukit',
    historicalNames: [
      { startYear: 671, endYear: 1377, name: 'Sriwijaya', status: 'Ibukota Kemaharajaan Sriwijaya' },
      { startYear: 1377, endYear: 1659, name: 'Palembang Kuno', status: 'Bandar Dagang Musi' },
      { startYear: 1659, endYear: 1823, name: 'Kesultanan Palembang Darussalam', status: 'Ibukota Kesultanan' },
      { startYear: 1823, endYear: 2026, name: 'Palembang', status: 'Ibukota Sumatera Selatan' }
    ]
  },
  {
    id: 'kalingga',
    name: 'Kalingga / Heling',
    coordinates: [110.67, -6.58],
    startYear: 600,
    endYear: 750,
    province: 'Jawa Tengah',
    type: 'capital',
    description: 'Pusat Kerajaan Kalingga di pesisir utara Jawa, termasyhur di bawah kepemimpinan Ratu Shima dan catatan biksu Hwining (664 M).',
    source: 'Catatan Dinasti Tang Baru (Xin Tangshu)'
  },
  {
    id: 'medang-mataram',
    name: 'Mataram Kuno / Medang',
    coordinates: [110.49, -7.75],
    startYear: 732,
    endYear: 929,
    province: 'DI Yogyakarta',
    type: 'capital',
    description: 'Pusat Dinasti Sanjaya dan Syailendra di Dataran Kedu-Prambanan; pembangun mahakarya Candi Borobudur, Sewu, dan Prambanan.',
    source: 'Prasasti Canggal (732 M) / Prasasti Mantyasih (907 M)'
  },

  // --- KLASIK MADYA & AKHIR (ABAD 10 - 15 M) ---
  {
    id: 'kahuripan',
    name: 'Kahuripan / Watugaluh',
    coordinates: [112.55, -7.45],
    startYear: 1019,
    endYear: 1049,
    province: 'Jawa Timur',
    type: 'capital',
    description: 'Ibukota Prabu Airlangga pemersatu kembali tanah Jawa pasca-Mahapralaya Medang (Prasasti Pucangan).',
    source: 'Prasasti Pucangan (1041 M) / Krom, N.J. (1931)'
  },
  {
    id: 'daha',
    name: 'Daha / Panjalu (Kediri)',
    coordinates: [112.01, -7.82],
    startYear: 1042,
    endYear: 1222,
    province: 'Jawa Timur',
    type: 'capital',
    description: 'Ibukota Kerajaan Kadiri era Prabu Jayabaya di tepi Sungai Brantas; zaman keemasan sastra Jawa Kuno (Kakawin Bharatayuddha).',
    source: 'Zoetmulder, P.J. (1974) Kalangwan: A Survey of Old Javanese Literature'
  },
  {
    id: 'singhasari',
    name: 'Tumapel / Singhasari',
    coordinates: [112.66, -7.89],
    startYear: 1222,
    endYear: 1292,
    province: 'Jawa Timur',
    type: 'capital',
    description: 'Ibukota Ken Arok dan Kertanegara; pemrakarsa persatuan Nusantara melalui Ekspedisi Pamalayu (1275 M).',
    source: 'Pararaton / Nagarakretagama'
  },
  {
    id: 'trowulan',
    name: 'Trowulan (Majapahit)',
    coordinates: [112.38, -7.55],
    startYear: 1293,
    endYear: 1527,
    province: 'Jawa Timur',
    type: 'capital',
    description: 'Metropolis ibukota Kemaharajaan Majapahit; kawasan terencana seluas 100 km² dengan jaringan kanal dan arsitektur bata merah.',
    source: 'UNESCO Tentative List Trowulan / Pigeaud (1960) Java in the 14th Century'
  },
  {
    id: 'tuban',
    name: 'Kambang Putih / Tuban',
    coordinates: [112.06, -6.89],
    startYear: 1000,
    endYear: 2026,
    province: 'Jawa Timur',
    type: 'trading-port',
    description: 'Pelabuhan laut internasional utama Majapahit; pintu gerbang pedagang Tiongkok, Campa, India, dan Timur Tengah ke pedalaman Jawa.',
    source: 'Prasasti Kambang Putih / Ma Huan Yingya Shenglan (1433)'
  },
  {
    id: 'gresik',
    name: 'Leran / Giri Kedaton / Gresik',
    coordinates: [112.65, -7.16]  ,
    startYear: 1082,
    endYear: 2026,
    province: 'Jawa Timur',
    type: 'trading-port',
    description: 'Bandar niaga internasional kuno (Makam Leran Fatimah binti Maimun 1082 M) dan kedudukan Giri Kedaton pusat dakwah Nusantara.',
    source: 'Makam Leran / De Graaf & Pigeaud (1974)'
  },
  {
    id: 'surabaya',
    name: 'Churabhaya / Surabaya',
    coordinates: [112.75, -7.25],
    startYear: 1293,
    endYear: 2026,
    province: 'Jawa Timur',
    type: 'trading-port',
    description: 'Bermula dari pertempuran armada Raden Wijaya memukul mundur pasukan Tartar Mongol (1293 M); berkembang menjadi kota dagang dan Kota Pahlawan.',
    source: 'Prasasti Kelagen (1037 M) / Yuan Shi'
  },
  {
    id: 'jakarta',
    name: 'Jakarta (Sunda Kalapa / Batavia)',
    coordinates: [106.82, -6.17],
    startYear: 1200,
    endYear: 2026,
    province: 'DKI Jakarta',
    type: 'capital',
    description: 'Pelabuhan Kerajaan Sunda -> ditaklukkan Fatahillah menjadi Jayakarta (1527) -> markas besar VOC & Hindia Belanda Batavia (1619) -> Ibukota RI.',
    source: 'Heuken, A. (1982) Historical Sites of Jakarta',
    historicalNames: [
      { startYear: 1200, endYear: 1527, name: 'Sunda Kalapa', status: 'Pelabuhan Utama Kerajaan Sunda' },
      { startYear: 1527, endYear: 1619, name: 'Jayakarta', status: 'Bandar Kesultanan Banten' },
      { startYear: 1619, endYear: 1942, name: 'Batavia', status: 'Pusat Pemerintahan Hindia Belanda / VOC' },
      { startYear: 1942, endYear: 1945, name: 'Djakarta Tokubetsu Shi', status: 'Pemerintahan Militer Jepang' },
      { startYear: 1945, endYear: 2026, name: 'Jakarta', status: 'Ibukota Negara Republik Indonesia' }
    ]
  },
  {
    id: 'bogor',
    name: 'Pakuan Pajajaran / Bogor',
    coordinates: [106.80, -6.60],
    startYear: 1333,
    endYear: 2026,
    province: 'Jawa Barat',
    type: 'capital',
    description: 'Ibukota Kerajaan Sunda-Pajajaran masa keemasan Sri Baduga Maharaja Prabu Siliwangi (Prasasti Batutulis).',
    source: 'Prasasti Batutulis (1533 M) / Danasasmita, S. (1983)'
  },
  {
    id: 'samudera-pasai',
    name: 'Samudera Pasai',
    coordinates: [97.14, 5.18],
    startYear: 1267,
    endYear: 1521,
    province: 'Aceh',
    type: 'capital',
    description: 'Kesultanan maritim Islam berdaulat pertama di Nusantara; mencetak koin emas dirham dan dikunjungi Ibnu Battuta (1345 M).',
    source: 'Hikayat Raja-Raja Pasai / Ibn Battuta Rihlah'
  },
  {
    id: 'ware-luwu',
    name: 'Ware / Luwu',
    coordinates: [120.35, -2.68],
    startYear: 1250,
    endYear: 2026,
    province: 'Sulawesi Selatan',
    type: 'capital',
    description: 'Kedatuan tertua di Sulawesi Selatan; pusat peradaban besi Danau Matano dan tanah asal wiracarita agung I La Galigo.',
    source: 'Bulbeck & Caldwell (2000) Land of Iron: The Historical Archaeology of Luwu'
  },
  {
    id: 'ternate',
    name: 'Gapi / Ternate',
    coordinates: [127.38, 0.79],
    startYear: 1257,
    endYear: 2026,
    province: 'Maluku Utara',
    type: 'capital',
    description: 'Kesultanan rempah cengkih di Maluku Utara; masa puncak Sultan Baabullah membentang hingga 72 pulau berpenghuni.',
    source: 'Andaya, L.Y. (1993) The World of Maluku'
  },
  {
    id: 'tidore',
    name: 'Soasio / Tidore',
    coordinates: [127.43, 0.68],
    startYear: 1100,
    endYear: 2026,
    province: 'Maluku Utara',
    type: 'capital',
    description: 'Kesultanan bahari di bawah Gunung Kie Matubu; menguasai wilayah perdagangan rempah dan pesisir barat Papua (Sultan Nuku).',
    source: 'Katoppo, E. (1957) Nuku: Perjuangan Kemerdekaan di Maluku Utara'
  },
  {
    id: 'banda-neira',
    name: 'Banda Neira',
    coordinates: [129.90, -4.52],
    startYear: 1300,
    endYear: 2026,
    province: 'Maluku',
    type: 'trading-port',
    description: 'Pusat pohon pala dan fuli satu-satunya di dunia kuno; lokasi Benteng Belgica dan Nassau yang diperebutkan imperium maritim dunia.',
    source: 'Willard A. Hanna (1978) Indonesian Banda'
  },

  // --- ERA KESULTANAN & NIAGA MARITIM (ABAD 16 - 18 M) ---
  {
    id: 'demak',
    name: 'Bintoro / Demak',
    coordinates: [110.64, -6.89],
    startYear: 1475,
    endYear: 1554,
    province: 'Jawa Tengah',
    type: 'capital',
    description: 'Pusat Kesultanan Demak dipimpin Raden Patah; pelopor kerajaan Islam di tanah Jawa bersama Dewan Wali Songo.',
    source: 'Babad Tanah Jawi / De Graaf & Pigeaud (1974)'
  },
  {
    id: 'banten-lama',
    name: 'Surosowan / Banten Lama',
    coordinates: [106.15, -6.03],
    startYear: 1526,
    endYear: 1813,
    province: 'Banten',
    type: 'capital',
    description: 'Bandar lada kosmopolitan dunia era Sultan Ageng Tirtayasa dengan istana Keraton Surosowan dan Kaibon.',
    source: 'Guillot, C. (1990) The Sultanate of Banten'
  },
  {
    id: 'cirebon',
    name: 'Caruban / Cirebon',
    coordinates: [108.56, -6.72],
    startYear: 1445,
    endYear: 2026,
    province: 'Jawa Barat',
    type: 'capital',
    description: 'Pusat Kasultanan Cirebon dirintis Pangeran Walagsungsang dan Sunan Gunung Jati; perpaduan budaya Sunda, Jawa, Tionghoa, dan Arab.',
    source: 'Babad Cirebon / Keraton Kasepuhan'
  },
  {
    id: 'yogyakarta',
    name: 'Yogyakarta (Kotagede / Mataram)',
    coordinates: [110.37, -7.80],
    startYear: 1587,
    endYear: 2026,
    province: 'DI Yogyakarta',
    type: 'capital',
    description: 'Bermula dari Kotagede (1587) era Panembahan Senapati hingga Kasultanan Ngayogyakarta Hadiningrat (1755) Sri Sultan Hamengkubuwono I.',
    source: 'Ricklefs, M.C. (1974) Jogjakarta under Sultan Mangkubumi',
    historicalNames: [
      { startYear: 1587, endYear: 1613, name: 'Kotagede', status: 'Ibukota Mataram Islam' },
      { startYear: 1613, endYear: 1647, name: 'Karta', status: 'Ibukota Sultan Agung' },
      { startYear: 1647, endYear: 1677, name: 'Plered', status: 'Ibukota Amangkurat I' },
      { startYear: 1755, endYear: 2026, name: 'Ngayogyakarta Hadiningrat', status: 'Kasultanan & Daerah Istimewa Yogyakarta' }
    ]
  },
  {
    id: 'surakarta',
    name: 'Surakarta / Solo',
    coordinates: [110.83, -7.57],
    startYear: 1680,
    endYear: 2026,
    province: 'Jawa Tengah',
    type: 'capital',
    description: 'Pusat Karaton Kasunanan Surakarta Hadiningrat didirikan Pakubuwana II di Desa Sala tepi Bengawan Solo (1745).',
    source: 'Babad Giyanti / Ricklefs (1998) The Seen and Unseen Worlds of Java'
  },
  {
    id: 'makassar',
    name: 'Makassar (Somba Opu)',
    coordinates: [119.41, -5.15],
    startYear: 1510,
    endYear: 2026,
    province: 'Sulawesi Selatan',
    type: 'capital',
    description: 'Benteng kembar Somba Opu pusat Kerajaan Gowa-Tallo era Sultan Hasanuddin; bandar laut merdeka sebelum Perjanjian Bungaya (1667).',
    source: 'Reid, A. (2000) Charting the Shape of Early Modern Southeast Asia',
    historicalNames: [
      { startYear: 1510, endYear: 1669, name: 'Somba Opu / Mangasa', status: 'Kembar Kerajaan Gowa-Tallo' },
      { startYear: 1669, endYear: 1971, name: 'Fort Rotterdam / Makassar', status: 'Kota Pelabuhan Hindia Belanda' },
      { startYear: 1971, endYear: 1999, name: 'Ujung Pandang', status: 'Ibukota Sulawesi Selatan' },
      { startYear: 1999, endYear: 2026, name: 'Makassar', status: 'Ibukota Sulawesi Selatan' }
    ]
  },
  {
    id: 'banjarmasin',
    name: 'Bandarmasih / Banjarmasin',
    coordinates: [114.59, -3.32],
    startYear: 1526,
    endYear: 2026,
    province: 'Kalimantan Selatan',
    type: 'capital',
    description: 'Ibukota Kesultanan Banjar di Kampung Kuin muara Sungai Barito didirikan Sultan Suriansyah (Pangeran Samudera).',
    source: 'Hikayat Banjar / Ras, J.J. (1968)'
  },
  {
    id: 'pontianak',
    name: 'Pontianak',
    coordinates: [109.34, -0.02],
    startYear: 1771,
    endYear: 2026,
    province: 'Kalimantan Barat',
    type: 'capital',
    description: 'Didirikan Sultan Syarif Abdurrahman Alkadrie di persimpangan Sungai Kapuas dan Landak; ibukota Kesultanan Kadriyah.',
    source: 'Lombard, D. (1996) Nusa Jawa: Silang Budaya'
  },
  {
    id: 'tenggarong',
    name: 'Kutai Tenggarong',
    coordinates: [116.99, -0.42],
    startYear: 1782,
    endYear: 2026,
    province: 'Kalimantan Timur',
    type: 'capital',
    description: 'Ibukota Kesultanan Kutai Kartanegara ing Martadipura dipindahkan dari Pemarangan oleh Aji Imbut (Sultan Muhammad Muslihuddin).',
    source: 'Salasilah Kutai / Arsip Kesultanan Kutai'
  },
  {
    id: 'banda-aceh',
    name: 'Kutaraja / Banda Aceh',
    coordinates: [95.32, 5.55],
    startYear: 1205,
    endYear: 2026,
    province: 'Aceh',
    type: 'capital',
    description: 'Pusat Kesultanan Aceh Darussalam masa Sultan Iskandar Muda; benteng maritim dan Serambi Mekkah di gerbang Selat Malaka.',
    source: 'Bustanus Salatin / Lombard, D. (1967) Le Sultanat d Atjeh au temps d Iskandar Muda'
  },
  {
    id: 'padang',
    name: 'Padang',
    coordinates: [100.36, -0.95],
    startYear: 1600,
    endYear: 2026,
    province: 'Sumatera Barat',
    type: 'trading-port',
    description: 'Bandar pesisir barat Ranah Minang di muara Batang Arau; pangkalan dagang lada dan emas VOC sejak Perjanjian Painan 1663.',
    source: 'Dobbin, C. (1983) Islamic Revivalism in a Changing Peasant Economy: Central Sumatra'
  },
  {
    id: 'medan',
    name: 'Medan Putri / Deli',
    coordinates: [98.67, 3.59],
    startYear: 1590,
    endYear: 2026,
    province: 'Sumatera Utara',
    type: 'trading-port',
    description: 'Didirikan Guru Patimpus Sembiring Pelawi 1590; berkembang pesat menjadi kota metropolis perkebunan tembakau Kesultanan Deli.',
    source: 'Sinar, Luckman (1991) Sejarah Medan Tempo Doeloe'
  },
  {
    id: 'ambon',
    name: 'Kota Laha / Ambon',
    coordinates: [128.18, -3.70],
    startYear: 1576,
    endYear: 2026,
    province: 'Maluku',
    type: 'colonial-city',
    description: 'Benteng Kota Laha didirikan Portugis 1576, direbut Steven van der Hagen menjadi Fort Victoria VOC 1605; ibukota Kepulauan Maluku.',
    source: 'Knaap, G. (1996) Shallow Waters, Rising Tide: Shipping and Trade in Java and Maluku'
  },
  {
    id: 'kupang',
    name: 'Fort Concordia / Kupang',
    coordinates: [123.60, -10.17],
    startYear: 1653,
    endYear: 2026,
    province: 'Nusa Tenggara Timur',
    type: 'colonial-city',
    description: 'Pusat VOC di Timor Barat pasca-pendirian Benteng Concordia 1653; gerbang maritim Kepulauan Sunda Kecil.',
    source: 'Fox, J.J. (1977) Harvest of the Palm: Ecological Change in Eastern Indonesia'
  },
  {
    id: 'mataram-lombok',
    name: 'Cakranegara / Mataram',
    coordinates: [116.11, -8.58],
    startYear: 1700,
    endYear: 2026,
    province: 'Nusa Tenggara Barat',
    type: 'capital',
    description: 'Pusat pemerintahan Puri Cakranegara Karangasem-Lombok dan Kesultanan Selaparang.',
    source: 'Van der Kraan, A. (1980) Lombok: Conquest, Colonization and Underdevelopment'
  },
  {
    id: 'denpasar',
    name: 'Puri Denpasar / Badung',
    coordinates: [115.21, -8.67],
    startYear: 1788,
    endYear: 2026,
    province: 'Bali',
    type: 'capital',
    description: 'Pusat Kerajaan Badung didirikan I Gusti Ngurah Made Pemecutan; medan heroisme Puputan Badung 1906 dan ibukota Bali modern.',
    source: 'Vickers, A. (1989) Bali: A Paradise Created'
  },
  {
    id: 'semarang',
    name: 'Bergota / Semarang',
    coordinates: [110.42, -6.99],
    startYear: 1476,
    endYear: 2026,
    province: 'Jawa Tengah',
    type: 'trading-port',
    description: 'Didirikan Ki Ageng Pandan Arang 1476 di perbukitan Bergota; pelabuhan niaga utama dan lokasi rel kereta api pertama Hindia Belanda (1867).',
    source: 'Brommer, B. et al. (1995) Semarang: Beeld van een stad'
  },
  {
    id: 'manado',
    name: 'Wenang / Manado',
    coordinates: [124.84, 1.48],
    startYear: 1623,
    endYear: 2026,
    province: 'Sulawesi Utara',
    type: 'colonial-city',
    description: 'Permukiman Wenang suku Minahasa; pendirian Fort Nieuw Amsterdam VOC 1658 sebagai pangkalan niaga cengkih dan kopi.',
    source: 'Henley, D. (1996) Nationalism and Regionalism in a Colonial Context: Minahasa'
  },
  {
    id: 'gorontalo',
    name: 'Hulontalo / Gorontalo',
    coordinates: [123.06, 0.54],
    startYear: 1500,
    endYear: 2026,
    province: 'Gorontalo',
    type: 'capital',
    description: 'Pusat perserikatan lima kerajaan (U Duluwo Limo Lo Pohalaa) tertua di pesisir Teluk Tomini Sulawesi.',
    source: 'Nur, S.R. (1979) Beberapa Aspek Hukum Adat Gorontalo'
  },
  {
    id: 'bau-bau',
    name: 'Keraton Wolio / Buton',
    coordinates: [122.61, -5.46],
    startYear: 1332,
    endYear: 2026,
    province: 'Sulawesi Tenggara',
    type: 'capital',
    description: 'Pusat Kesultanan Buton dengan Benteng Keraton Wolio terluas di dunia (panjang keliling 2,7 km di atas bukit karang).',
    source: 'Zahari, A.M. (1977) Sejarah Informasi Wolio / MURI'
  },
  {
    id: 'bima',
    name: 'Dana Mbojo / Bima',
    coordinates: [118.72, -8.45],
    startYear: 1350,
    endYear: 2026,
    province: 'Nusa Tenggara Barat',
    type: 'capital',
    description: 'Pusat Kesultanan Bima dengan tradisi pelayaran phinisi dan hukum maritim di Kepulauan Nusa Tenggara.',
    source: 'Chambert-Loir, H. (2004) Kerajaan Bima dalam Sastra dan Sejarah'
  },
  {
    id: 'bengkulu',
    name: 'Fort Marlborough / Bengkulu',
    coordinates: [102.26, -3.80],
    startYear: 1685,
    endYear: 2026,
    province: 'Bengkulu',
    type: 'colonial-city',
    description: 'Pangkalan dagang lada East India Company (EIC) Inggris di pesisir barat Sumatera; Benteng Marlborough (1714) terbesar Inggris di Asia Tenggara.',
    source: 'Bastin, J. (1965) The British in West Sumatra (1685-1825)'
  },
  {
    id: 'tanjung-pinang',
    name: 'Penyengat / Tanjungpinang',
    coordinates: [104.45, 0.92],
    startYear: 1722,
    endYear: 2026,
    province: 'Kepulauan Riau',
    type: 'capital',
    description: 'Pusat Kesultanan Riau-Lingga di Pulau Penyengat; tanah kelahiran pembakuan Bahasa Melayu modern oleh Raja Ali Haji (Gurindam 12).',
    source: 'Tuhfat al-Nafis / Andaya, B.W. (1979)'
  },
  {
    id: 'singkawang',
    name: 'San Khew Jong / Singkawang',
    coordinates: [108.98, 0.90],
    startYear: 1777,
    endYear: 2026,
    province: 'Kalimantan Barat',
    type: 'trading-port',
    description: 'Pusat tambang emas dan perniagaan kongsi Republik Lanfang yang didirikan Luo Fangbo tahun 1777.',
    source: 'De Groot, J.J.M. (1885) Het Kongsiwezen van Borneo'
  },
  {
    id: 'bandar-lampung',
    name: 'Telukbetung / Bandar Lampung',
    coordinates: [105.26, -5.45],
    startYear: 1682,
    endYear: 2026,
    province: 'Lampung',
    type: 'trading-port',
    description: 'Kota pelabuhan Telukbetung pintu gerbang Sumatera; luluhlantak diterjang gelombang tsunami letusan Krakatau 1883 dan dibangun kembali.',
    source: 'Verbeek, R.D.M. (1885) Krakatau'
  },

  // --- ERA KOLONIAL AKHIR & MODERN (ABAD 19 S/D SEKARANG) ---
  {
    id: 'bandung',
    name: 'Bandung (Paris van Java)',
    coordinates: [107.61, -6.91],
    startYear: 1810,
    endYear: 2026,
    province: 'Jawa Barat',
    type: 'modern-city',
    description: 'Didirikan Gubernur Jenderal Daendels 1810 di tepi Sungai Cikapundung dan Groote Postweg; tuan rumah Konferensi Asia Afrika 1955.',
    source: 'Kunto, H. (1984) Semerbak Bunga di Bandung Raya'
  },
  {
    id: 'balikpapan',
    name: 'Balikpapan',
    coordinates: [116.83, -1.26],
    startYear: 1897,
    endYear: 2026,
    province: 'Kalimantan Timur',
    type: 'modern-city',
    description: 'Kota minyak pesisir Selat Makassar sejak pengeboran sumur perdana Mathilda 1897; pusat industri migas Kalimantan.',
    source: 'Arsip Bataafsche Petroleum Maatschappij (BPM)'
  },
  {
    id: 'tarakan',
    name: 'Tarakan',
    coordinates: [117.60, 3.32],
    startYear: 1896,
    endYear: 2026,
    province: 'Kalimantan Utara',
    type: 'modern-city',
    description: 'Pusat minyak bumi strategis di utara Kalimantan; sasaran pertama invasi Kekaisaran Jepang ke Hindia Belanda Januari 1942.',
    source: 'Arsip BPM / Dull, P.S. (1978) A Battle History of the Imperial Japanese Navy'
  },
  {
    id: 'merauke',
    name: 'Merauke',
    coordinates: [140.40, -8.49],
    startYear: 1902,
    endYear: 2026,
    province: 'Papua Selatan',
    type: 'modern-city',
    description: 'Didirikan 1902 sebagai pos militer perbatasan Zuid-Nieuw-Guinea di muara Sungai Maro; kota paling timur Republik Indonesia.',
    source: 'Kroesen, J.A. (1902) Verslag eener reis naar de zuidkust van Nieuw-Guinea'
  },
  {
    id: 'jayapura',
    name: 'Hollandia / Jayapura',
    coordinates: [140.71, -2.53],
    startYear: 1910,
    endYear: 2026,
    province: 'Papua',
    type: 'modern-city',
    description: 'Didirikan 1910 oleh Kapten Sachse sebagai Hollandia di Teluk Humboldt; pangkalan akbar Jenderal Douglas MacArthur 1944 dan ibukota Papua.',
    source: 'Chauvel, R. (2005) Constructing Papuan Nationalism'
  },
  {
    id: 'manokwari',
    name: 'Mansinam / Manokwari',
    coordinates: [134.06, -0.86],
    startYear: 1855,
    endYear: 2026,
    province: 'Papua Barat',
    type: 'modern-city',
    description: 'Kota peradaban tertua di Tanah Papua sejak kedatangan Ottow dan Geissler di Pulau Mansinam Teluk Doreri 5 Februari 1855.',
    source: 'Kamma, F.C. (1976) Dit Wonderlijke Werk'
  },
  {
    id: 'sorong',
    name: 'Sorong',
    coordinates: [131.25, -0.88],
    startYear: 1935,
    endYear: 2026,
    province: 'Papua Barat Daya',
    type: 'modern-city',
    description: 'Kota minyak eksplorasi NNGPM era 1935 di Semenanjung Kepala Burung; kini ibukota Papua Barat Daya dan gerbang Kepulauan Raja Ampat.',
    source: 'Pouwer, J. (1999) The Colonisation, Decolonisation and Recolonisation of West New Guinea'
  },
  {
    id: 'wamena',
    name: 'Wamena (Lembah Baliem)',
    coordinates: [138.94, -4.09],
    startYear: 1956,
    endYear: 2026,
    province: 'Papua Pegunungan',
    type: 'modern-city',
    description: 'Pusat peradaban agrikultur kuno suku Dani di Lembah Baliem pada ketinggian 1.650 mdpl; kini ibukota Provinsi Papua Pegunungan.',
    source: 'Heider, K.G. (1970) The Dugum Dani / BPS Papua Pegunungan'
  },
  {
    id: 'nabire',
    name: 'Nabire',
    coordinates: [135.49, -3.36],
    startYear: 1960,
    endYear: 2026,
    province: 'Papua Tengah',
    type: 'modern-city',
    description: 'Kota di pesisir Teluk Cenderawasih; ibukota Provinsi Papua Tengah.',
    source: 'BPS Provinsi Papua Tengah'
  },
  {
    id: 'palangka-raya',
    name: 'Palangka Raya',
    coordinates: [113.92, -2.21],
    startYear: 1957,
    endYear: 2026,
    province: 'Kalimantan Tengah',
    type: 'modern-city',
    description: 'Kota yang dirancang dari nol oleh Presiden Sukarno 1957 sebagai visi ibukota masa depan Indonesia di tengah belantara Kalimantan.',
    source: 'Yayasan Bung Karno / Arsip Nasional RI'
  },
  {
    id: 'nusantara-ikn',
    name: 'Ibu Kota Nusantara (IKN)',
    coordinates: [116.70, -0.97],
    startYear: 2022,
    endYear: 2026,
    province: 'Kalimantan Timur',
    type: 'capital',
    description: 'Ibu kota masa depan Negara Kesatuan Republik Indonesia yang dibangun di kawasan Sepaku, Penajam Paser Utara dan Kutai Kartanegara.',
    source: 'UU No. 3 Tahun 2022 / Otorita Ibu Kota Nusantara'
  }
];
