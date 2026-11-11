import type { TimelineEvent } from '../../lib/events';

export const BASE_EVENTS: TimelineEvent[] = [
  // ==========================================
  // 1. ERA PRASEJARAH, ZAMAN ES & BENCANA PURBA
  // ==========================================
  {
    id: 'toba-supervolcano',
    year: -74000,
    period: 'glaciation',
    evidence: 'reconstruction',
    category: 'disaster',
    region: 'Sumatera',
    title: 'Letusan Supervulkan Toba Purba (Youngest Toba Tuff)',
    subtitle: 'Supererupsi VEI-8 & Musim Dingin Vulkanik Global',
    summary: 'Kaldera Danau Toba di Sumatera Utara meletus dahsyat mengeluarkan ~2.800 km³ material vulkanik dan menyelimuti atmosfer bumi dengan aerosol sulfat tebal, memicu musim dingin vulkanik (volcanic winter) selama bertahun-tahun serta penurunan suhu global 3–5°C.',
    impact: 'Memicu penyusutan drastis populasi manusia purba (Teori Kemacetan Genetika Toba), membentuk danau kaldera vulkanik terbesar di dunia, dan mengubah tatanan ekosistem kepulauan Nusantara.',
    tags: ['Supervulkan', 'Danau Toba', 'Bencana Alam', 'Musim Dingin Vulkanik', 'Pleistosen'],
    sources: [
      { title: 'Teori Bencana Toba', url: 'https://id.wikipedia.org/wiki/Teori_bencana_Toba', sourceName: 'Wikipedia' },
      { title: 'Jejak Letusan Supervolcano Toba', url: 'https://historia.id/sains/articles/jejak-letusan-supervolcano-toba-P93gR', sourceName: 'Historia.id' },
      { title: 'Toba Caldera Geopark', url: 'https://whc.unesco.org/en/tentativelists/6033/', sourceName: 'UNESCO' }
    ]
  },
  {
    id: 'lgm-peak',
    year: -20000,
    period: 'glaciation',
    evidence: 'reconstruction',
    category: 'sea-level',
    region: 'Sunda',
    title: 'Puncak Glasial Maksimum (LGM)',
    subtitle: 'Permukaan Laut: ~ -125 m',
    seaLevelMeters: -125,
    summary: 'Suhu bumi mencapai titik terdingin pada siklus glasial terakhir. Jutaan kilometer kubik air terkunci menjadi lapisan es tebal di kutub utara dan selatan.',
    impact: 'Paparan Sunda dan Sahul tersingkap penuh. Laut Jawa, Selat Malaka, dan Laut Arafura menjadi daratan sabana kering dan hutan terbuka yang menyatu dengan benua Asia dan Australia.',
    tags: ['Zaman Es', 'LGM', 'Paparan Sunda', 'Paparan Sahul'],
    sources: [
      { title: 'Glasial Maksimum Terakhir', url: 'https://id.wikipedia.org/wiki/Glasial_Maksimum_Terakhir', sourceName: 'Wikipedia' },
      { title: 'Last Glacial Maximum', url: 'https://en.wikipedia.org/wiki/Last_Glacial_Maximum', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'last-glacial',
    year: -18000,
    period: 'glaciation',
    evidence: 'reconstruction',
    category: 'geology',
    region: 'Sunda',
    title: 'Zaman Es Terakhir & Sistem Sungai Purba Molengraaff',
    subtitle: 'Permukaan Laut: ~ -120 m',
    seaLevelMeters: -120,
    summary: 'Paparan Sunda membentuk daratan raksasa seluas ~1,8 juta km². Sistem Sungai Sunda Purba (Molengraaff) mengalirkan air dari pedalaman Kalimantan dan Sumatera menuju palung Laut Cina Selatan.',
    impact: 'Manusia purba (Homo sapiens awal) dan fauna mamalia besar melintasi koridor darat antara daratan Asia, Sumatera, Jawa, dan Kalimantan tanpa hambatan laut.',
    tags: ['Sungai Sunda', 'Molengraaff', 'Migrasi Purba', 'Sundaland'],
    sources: [
      { title: 'Paparan Sunda', url: 'https://id.wikipedia.org/wiki/Paparan_Sunda', sourceName: 'Wikipedia' },
      { title: 'Riset Geologi Molengraaff', url: 'https://www.delpher.nl', sourceName: 'Delpher' }
    ]
  },
  {
    id: 'deglaciation-start',
    year: -16500,
    period: 'deglaciation',
    evidence: 'reconstruction',
    category: 'climate',
    region: 'Sunda',
    title: 'Awal Pencairan Lapisan Es Global',
    subtitle: 'Permukaan Laut: ~ -115 m',
    seaLevelMeters: -115,
    summary: 'Radiasi matahari meningkat akibat siklus orbit Milankovitch. Suhu atmosfer bumi mulai menghangat perlahan, memicu pencairan awal gletser raksasa.',
    impact: 'Permukaan laut global mulai merambat naik (~0,5 cm/tahun). Pesisir terluar Paparan Sunda dan Sahul mulai tertekan rembesan pasang air laut.',
    tags: ['Deglasiasi', 'Milankovitch', 'Pemanasan Global'],
    sources: [
      { title: 'Deglaciation & Sea Level Rise', url: 'https://en.wikipedia.org/wiki/Deglaciation', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'mwp-1a',
    year: -14600,
    period: 'deglaciation',
    evidence: 'reconstruction',
    category: 'sea-level',
    region: 'Sunda',
    title: 'Meltwater Pulse 1A (MWP-1A)',
    subtitle: 'Kenaikan Laut Katastrofik: ~16–20 m dalam 350 tahun',
    seaLevelMeters: -95,
    summary: 'Pelepasan air es lelehan tercepat dalam sejarah geologi kuarter. Permukaan laut global melonjak 4 hingga 5 sentimeter per tahun (1 meter setiap 20-25 tahun).',
    impact: 'Banjir besar menenggelamkan ribuan kilometer persegi dataran rendah pesisir Sundaland. Muara-muara sungai purba mundur ratusan kilometer ke daratan pedalaman.',
    tags: ['Meltwater Pulse', 'Banjir Glasial', 'Kenaikan Cepat'],
    sources: [
      { title: 'Meltwater Pulse 1A', url: 'https://en.wikipedia.org/wiki/Meltwater_pulse_1A', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'rainforest-expansion',
    year: -13500,
    period: 'deglaciation',
    evidence: 'reconstruction',
    category: 'climate',
    region: 'Sunda',
    title: 'Ekspansi Hutan Hujan Tropis Nusantara',
    subtitle: 'Permukaan Laut: ~ -85 m',
    seaLevelMeters: -85,
    summary: 'Peningkatan kelembapan dan intensitas monsun tropis mengubah koridor sabana kering menjadi hutan hujan tropis basah yang lebat.',
    impact: 'Fauna padang rumput digantikan oleh satwa hutan hujan tropis lebat. Manusia pemburu-peramu mengadaptasi perkakas batu untuk kehidupan rimba kanopi.',
    tags: ['Hutan Hujan', 'Monsun', 'Fauna Tropis', 'Sundaland'],
    sources: [
      { title: 'Biogeografi Sundaland', url: 'https://en.wikipedia.org/wiki/Sundaland', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'younger-dryas',
    year: -12900,
    period: 'deglaciation',
    evidence: 'reconstruction',
    category: 'climate',
    region: 'Sunda',
    title: 'Younger Dryas: Pendinginan Global Mendadak',
    subtitle: 'Permukaan Laut Tertahan: ~ -65 m',
    seaLevelMeters: -65,
    summary: 'Sirkulasi termohalin Atlantik melemah mendadak, menjerumuskan belahan bumi kembali ke iklim beku semi-glasial selama sekitar 1.200 tahun.',
    impact: 'Laju kenaikan permukaan laut tertahan di kedalaman sekitar 60–65 meter. Paparan Sunda mengalami periode stabilitas iklim dingin sesaat sebelum pemanasan berikutnya.',
    tags: ['Younger Dryas', 'Pendinginan Singkat', 'Stagnasi Laut'],
    sources: [
      { title: 'Younger Dryas', url: 'https://id.wikipedia.org/wiki/Younger_Dryas', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'holocene-dawn',
    year: -11700,
    period: 'post-glacial',
    evidence: 'reconstruction',
    category: 'climate',
    region: 'Sunda',
    title: 'Awal Holosen: Berakhirnya Zaman Es',
    subtitle: 'Permukaan Laut: ~ -55 m',
    seaLevelMeters: -55,
    summary: 'Bumi resmi memasuki zaman geologi baru: Holosen. Pemanasan global berlanjut dengan kecepatan tinggi, mengakhiri periode Pleistosen secara definitif.',
    impact: 'Pola cuaca modern dan musim hujan monsun terbentuk stabil di kawasan ekuator Nusantara.',
    tags: ['Holosen', 'Akhir Pleistosen', 'Iklim Modern'],
    sources: [
      { title: 'Kala Holosen', url: 'https://id.wikipedia.org/wiki/Holosen', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'mwp-1b',
    year: -11500,
    period: 'post-glacial',
    evidence: 'reconstruction',
    category: 'sea-level',
    region: 'Sunda',
    title: 'Meltwater Pulse 1B (MWP-1B)',
    subtitle: 'Permukaan Laut Melonjak ke: ~ -50 m',
    seaLevelMeters: -50,
    summary: 'Pencairan masif lapisan es Skandinavia dan Antartika memicu gelombang lonjakan permukaan laut kedua sebesar ~10–15 meter.',
    impact: 'Cekungan Laut Jawa mulai tergenang secara masif dari arah timur. Teluk laut purba menyusup jauh, memotong jalur darat antara Jawa dan Kalimantan.',
    tags: ['MWP-1B', 'Laut Jawa Tergenang', 'Intrusi Air Laut'],
    sources: [
      { title: 'Meltwater Pulse 1B', url: 'https://en.wikipedia.org/wiki/Meltwater_pulse_1B', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'java-isolation',
    year: -9500,
    period: 'post-glacial',
    evidence: 'reconstruction',
    category: 'geology',
    region: 'Jawa',
    title: 'Pemisahan Pulau Jawa dari Sundaland',
    subtitle: 'Permukaan Laut: ~ -35 m',
    seaLevelMeters: -35,
    summary: 'Air laut menenggelamkan jembatan daratan genting antara Jawa, Sumatera, dan Kalimantan. Lembah Laut Jawa kini sepenuhnya digenangi air laut.',
    impact: 'Jawa resmi terisolasi menjadi pulau tersendiri. Evolusi satwa Jawa (harimau jawa, badak jawa) mulai berkembang secara terpisah dari satwa Asia daratan.',
    tags: ['Pemisahan Jawa', 'Pulau Jawa', 'Isolasi Geografis'],
    sources: [
      { title: 'Paparan Sunda & Isolasi Jawa', url: 'https://id.wikipedia.org/wiki/Paparan_Sunda', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'karimata-drowning',
    year: -8500,
    period: 'post-glacial',
    evidence: 'reconstruction',
    category: 'geology',
    region: 'Sumatera',
    title: 'Tenggelamnya Jembatan Darat Selat Karimata',
    subtitle: 'Permukaan Laut: ~ -28 m',
    seaLevelMeters: -28,
    summary: 'Selat Karimata dan Selat Gelasa terendam tuntas. Hanya bukit-bukit granit tinggi seperti Pulau Belitung dan Bangka yang tersisa mencuat di atas laut.',
    impact: 'Sumatera dan Kalimantan terputus secara fisik. Tercipta koneksi perairan maritim terbuka antara Laut Cina Selatan dan Laut Jawa.',
    tags: ['Selat Karimata', 'Bangka Belitung', 'Pemisahan Sumatera'],
    sources: [
      { title: 'Selat Karimata', url: 'https://id.wikipedia.org/wiki/Selat_Karimata', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'sahul-drowning',
    year: -8000,
    period: 'post-glacial',
    evidence: 'reconstruction',
    category: 'geology',
    region: 'Papua',
    title: 'Tenggelamnya Paparan Sahul & Pemisahan Papua',
    subtitle: 'Permukaan Laut: ~ -25 m',
    seaLevelMeters: -25,
    summary: 'Laut Arafura dan Selat Torres tergenang tuntas. Paparan Sahul yang tadinya menyatukan daratan Papua (New Guinea) dan benua Australia kini terbenam di bawah laut.',
    impact: 'Papua terpisah permanen dari Australia. Tercipta pemisah biogeografis laut antara fauna berkantung utara dan selatan.',
    tags: ['Paparan Sahul', 'Selat Torres', 'Pemisahan Papua'],
    sources: [
      { title: 'Paparan Sahul', url: 'https://id.wikipedia.org/wiki/Paparan_Sahul', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'mwp-1c',
    year: -7600,
    period: 'post-glacial',
    evidence: 'reconstruction',
    category: 'sea-level',
    region: 'Sunda',
    title: 'Meltwater Pulse 1C (MWP-1C)',
    subtitle: 'Permukaan Laut Akhir: ~ -15 m',
    seaLevelMeters: -15,
    summary: 'Runtuhnya sisa danau es glacial Agassiz di Amerika Utara mengalirkan air tawar raksasa ke lautan dunia, memicu kenaikan laut tajam terakhir.',
    impact: 'Garis pantai kepulauan Nusantara menyusut kian sempit, mendekati siluet kontur pulau-pulau modern.',
    tags: ['MWP-1C', 'Danau Agassiz', 'Kenaikan Akhir'],
    sources: [
      { title: 'Holocene Sea Level Rise', url: 'https://en.wikipedia.org/wiki/Holocene', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'malacca-opening',
    year: -6500,
    period: 'holocene',
    evidence: 'reconstruction',
    category: 'geology',
    region: 'Sumatera',
    title: 'Pembukaan Penuh Selat Malaka',
    subtitle: 'Permukaan Laut: ~ -8 m',
    seaLevelMeters: -8,
    summary: 'Jembatan darat dangkal terakhir antara Semenanjung Malaya dan pesisir timur Sumatera akhirnya terendam air laut tuntas.',
    impact: 'Selat Malaka bertransformasi menjadi selat maritim terbuka yang menghubungkan Samudra Hindia dan Samudra Pasifik, fondasi jalur rempah bahari dunia.',
    tags: ['Selat Malaka', 'Jalur Maritim', 'Pemisahan Malaya'],
    sources: [
      { title: 'Selat Malaka', url: 'https://id.wikipedia.org/wiki/Selat_Malaka', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'mid-holocene-highstand',
    year: -5000,
    period: 'holocene',
    evidence: 'reconstruction',
    category: 'sea-level',
    region: 'Sunda',
    title: 'Puncak Transgresi Holosen (Highstand)',
    subtitle: 'Permukaan Laut Tertinggi (+1 s/d +3 m di atas modern)',
    seaLevelMeters: 2,
    summary: 'Suhu bumi mencapai puncak kehangatan Holosen (Holocene Climatic Optimum). Permukaan laut di Nusantara meluap hingga 1–3 meter di atas tingkat saat ini.',
    impact: 'Garis pantai mundur lebih jauh ke pedalaman dari posisi hari ini. Rawa-rawa dan estuari luas terbentuk di pesisir timur Sumatera dan utara Jawa.',
    tags: ['Mid-Holocene', 'Highstand', 'Transgresi'],
    sources: [
      { title: 'Holocene Climatic Optimum', url: 'https://en.wikipedia.org/wiki/Holocene_climatic_optimum', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'austronesian-stabilization',
    year: -4000,
    period: 'holocene',
    evidence: 'reconstruction',
    category: 'climate',
    region: 'Sunda',
    title: 'Stabilisasi Garis Pantai & Migrasi Austronesia',
    subtitle: 'Permukaan Laut: 0 m (Stabil)',
    seaLevelMeters: 0,
    summary: 'Permukaan laut surut perlahan dan stabil di level kontemporer (0 meter). Geografi kepulauan Nusantara mencapai wujud modern seperti saat ini.',
    impact: 'Munculnya masyarakat bahari neolitikum dan migrasi penutur bahasa Austronesia dengan teknologi perahu cadik melintasi kepulauan Nusantara.',
    tags: ['Austronesia', 'Neolitikum', 'Pelaut Purba', 'Perahu Cadik'],
    sources: [
      { title: 'Suku Bangsa Austronesia', url: 'https://id.wikipedia.org/wiki/Suku_bangsa_Austronesia', sourceName: 'Wikipedia' },
      { title: 'Asal Usul Leluhur Orang Indonesia', url: 'https://historia.id/kuno/articles/asal-usul-leluhur-orang-indonesia-P14lZ', sourceName: 'Historia.id' }
    ]
  },

  // ==========================================
  // 2. ERA KERAJAAN KLASIK HINDU-BUDDHA (130 M - 1500 M)
  // ==========================================
  {
    id: 'salakanagara-founding',
    year: 130,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Salakanagara dalam tradisi historiografi (diperdebatkan)',
    subtitle: 'Tanggal tradisional, bukan bukti pendirian sezaman',
    summary: 'Salakanagara dikenal melalui pembacaan naskah Wangsakerta dan tradisi kemudian. Penelitian mengenai bukti historisnya menilai dukungan sumber primer sezaman belum kuat; tahun 130 tidak dapat diperlakukan sebagai tanggal pendirian terverifikasi.',
    impact: 'Menjadi bahan kajian historiografi Sunda; tidak dipakai sebagai bukti pasti awal kerajaan di Jawa.',
    tags: ['Salakanagara', 'Wangsakerta', 'Historiografi', 'Diperdebatkan', 'Banten'],
    sources: [
      { title: 'Polemik Salakanagara: Meninjau Kebenaran Bukti Historis (Maulana, 2023)', url: 'https://garuda.kemdiktisaintek.go.id/documents/detail/3566006', sourceName: 'Diakronika / GARUDA' }
    ],
    dateNote: 'Tahun 130 mengikuti tradisi yang diperdebatkan, bukan rekaman peristiwa sezaman.',
    evidence: 'contested',
  },
  {
    id: 'kutai-taruma',
    year: 400,
    evidence: 'approximate',
    dateNote: 'Penanda sekitar abad IV–V M berdasarkan pembacaan prasasti; bukan tanggal pasti berdirinya kerajaan atau penerbitan semua Yupa.',
    period: 'kingdom',
    category: 'kingdom',
    region: 'Kalimantan',
    title: 'Prasasti Yupa Kutai Mulawarman: Fajar Sejarah Tertulis',
    subtitle: 'Tujuh Tiang Batu Peringatan di Muara Kaman, Mahakam',
    summary: 'Maharaja Mulawarman mendirikan 7 prasasti tiang batu (Yupa) beraksara Pallawa dan berbahasa Sanskerta di Muara Kaman, Kutai (Kalimantan Timur), memperingati persembahan 20.000 ekor sapi kepada kaum Brahmana dalam upacara suci Vaprakecvara.',
    impact: 'Tonggak permulaan resmi zaman sejarah tertulis di kepulauan Nusantara; membuktikan terjalinnya peradaban agraris-spiritual berbasis aksara di pedalaman Sungai Mahakam.',
    tags: ['Kutai', 'Mulawarman', 'Yupa', 'Muara Kaman', 'Aksara Pallawa'],
    sources: [
      { title: 'Prasasti Yupa', url: 'https://id.wikipedia.org/wiki/Prasasti_Yupa', sourceName: 'Wikipedia' },
      { title: 'Prasasti Batu: Pembacaan Ulang Yupa', url: 'https://repositori.kemenbud.go.id/id/eprint/6016/', sourceName: 'Museum Nasional / Kemdikbud' },
      { title: 'Prasasti Yupa D.176 Registrasi Cagar Budaya', url: 'https://budaya.data.kemdikbud.go.id/cagarbudaya/objek/KB001728', sourceName: 'Kemdikbud' }
    ]
  },
  {
    id: 'tarumanagara-purnawarman',
    year: 450,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Kejayaan Tarumanagara & Penggalian Sungai Gomati',
    subtitle: 'Mahakarya Hidrologi Raja Purnawarman (Prasasti Tugu)',
    summary: 'Raja Purnawarman memerintah Kerajaan Tarumanagara di Jawa Barat dan memprakarsai proyek hidrologi agraris raksasa: penggalian saluran Sungai Gomati sepanjang 6.122 busur (~11 km) dalam tempo 21 hari untuk mengendalikan banjir dan mengairi persawahan rakyat.',
    impact: 'Pencapaian teknologi irigasi kanal tertua di Jawa; dicatat dalam Prasasti Tugu, Ciaruteun (jejak kaki wisnu), Kebon Kopi, dan Cidanghiang.',
    tags: ['Tarumanagara', 'Purnawarman', 'Prasasti Tugu', 'Sungai Gomati', 'Jawa Barat'],
    sources: [
      { title: 'Tarumanagara', url: 'https://id.wikipedia.org/wiki/Tarumanagara', sourceName: 'Wikipedia' },
      { title: 'Prasasti Tugu', url: 'https://id.wikipedia.org/wiki/Prasasti_Tugu', sourceName: 'Wikipedia' },
      { title: 'Purnawarman Raja Tarumanagara', url: 'https://historia.id/kuno/articles/purnawarman-raja-besar-tarumanagara-Drw1M', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'kalingga-queen-shima',
    year: 674,
    period: 'kingdom',
    category: 'figure',
    region: 'Jawa',
    title: 'Ratu Shima & Keadilan Hukum Kerajaan Kalingga (Holing)',
    subtitle: 'Penegakan Hukum Adil Tanpa Pandang Bulu di Jawa Tengah',
    summary: 'Maharani Shima dinobatkan memimpin Kerajaan Kalingga di pesisir Jawa Tengah. Terkenal sangat adil, tegas, dan jujur, ia bahkan pernah menghukum potong jari putranya sendiri demi menjaga wibawa hukum.',
    impact: 'Kalingga tumbuh makmur, aman dari perampok, menjadi pusat studi agama Buddha Hinayana yang dikunjungi pendeta Tiongkok Huining, dan diabadikan dalam Kitab Dinasti Tang.',
    tags: ['Kalingga', 'Ratu Shima', 'Holing', 'Hukum Adil', 'Dinasti Tang'],
    sources: [
      { title: 'Kerajaan Kalingga', url: 'https://id.wikipedia.org/wiki/Kerajaan_Kalingga', sourceName: 'Wikipedia' },
      { title: 'Ratu Shima Penegak Hukum Kalingga', url: 'https://historia.id/kuno/articles/ratu-pembawa-kejayaan-kalingga-DrgN2', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'sriwijaya-peak',
    year: 683,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Sumatera',
    title: 'Dapunta Hyang Mendirikan Kedatuan Sriwijaya',
    subtitle: 'Prasasti Kedukan Bukit: Siddhayatra 20.000 Bala Tentara',
    summary: 'Dapunta Hyang Sri Jayanasa memimpin perjalanan suci (siddhayatra) membawa 20.000 bala tentara mendirikan Sriwijaya di Palembang pada bulan Waisak 605 Saka (683 M), dicatat dalam Prasasti Kedukan Bukit.',
    impact: 'Sriwijaya menguasai simpul maritim Selat Malaka dan Selat Sunda, berkembang menjadi thalasokrasi terkuat di Asia Tenggara dan pusat studi agama Buddha internasional (dicatat biksu I Tsing).',
    tags: ['Sriwijaya', 'Kedukan Bukit', 'Palembang', 'Thalasokrasi', 'I Tsing'],
    sources: [
      { title: 'Kedatuan Sriwijaya', url: 'https://id.wikipedia.org/wiki/Kedatuan_Sriwijaya', sourceName: 'Wikipedia' },
      { title: 'Prasasti Kedukan Bukit', url: 'https://id.wikipedia.org/wiki/Prasasti_Kedukan_Bukit', sourceName: 'Wikipedia' },
      { title: 'Kemaharajaan Bahari Sriwijaya', url: 'https://historia.id/kuno/articles/kemaharajaan-bahari-sriwijaya-DrjG7', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'canggal-mataram',
    year: 732,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Prasasti Canggal: Rakai Mataram Mendirikan Kerajaan Medang',
    subtitle: 'Pendirian Dinasti Sanjaya di Lereng Gunung Wukir',
    summary: 'Raja Sanjaya mendirikan lingga Siwa di Bukit Gunung Wukir (Magelang/Jawa Tengah), menandai berdirinya Dinasti Sanjaya Kerajaan Medang (Mataram Kuno).',
    impact: 'Lahirnya pusat peradaban agraris adiluhung di lembah sungai Progo dan Opak yang melahirkan mahakarya candi-candi megah.',
    tags: ['Medang', 'Mataram Kuno', 'Sanjaya', 'Prasasti Canggal'],
    sources: [
      { title: 'Kerajaan Medang', url: 'https://id.wikipedia.org/wiki/Kerajaan_Medang', sourceName: 'Wikipedia' },
      { title: 'Prasasti Canggal', url: 'https://id.wikipedia.org/wiki/Prasasti_Canggal', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'borobudur-construction',
    year: 825,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Pembangunan Mahakarya Candi Borobudur',
    subtitle: 'Mandala Stupa Buddha Terbesar di Dunia Karya Wangsa Syailendra',
    summary: 'Dinasti Syailendra (Raja Samaratungga dan Pramodhawardhani) merampungkan pembangunan monumen stupa mandala Buddha terbesar di dunia, Candi Borobudur, di Magelang, Jawa Tengah.',
    impact: 'Puncak pencapaian arsitektur stupa, seni pahat relief Lalitavistara, dan spiritualitas Buddhis di Asia; kini menjadi Situs Warisan Dunia UNESCO #592.',
    tags: ['Borobudur', 'Syailendra', 'Samaratungga', 'UNESCO', 'Candi'],
    sources: [
      { title: 'Kompleks Candi Borobudur', url: 'https://whc.unesco.org/en/list/592', sourceName: 'UNESCO' },
      { title: 'Borobudur', url: 'https://id.wikipedia.org/wiki/Borobudur', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'prambanan-consecration',
    year: 856,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Peresmian Kompleks Percandian Prambanan (Siwagrha)',
    subtitle: 'Mahakarya Candi Hindu Trimurti Terbesar di Indonesia',
    summary: 'Rakai Pikatan dan Dyah Lokapala meresmikan kompleks candi Siwa agung Prambanan (Siwagrha) di perbatasan Yogyakarta-Klaten, diperingati dalam Prasasti Siwagrha 856 M.',
    impact: 'Kompleks candi Hindu Trimurti terbesar dan termegah di Indonesia sebagai simbol kebangkitan Dinasti Sanjaya; Situs Warisan Dunia UNESCO #642.',
    tags: ['Prambanan', 'Rakai Pikatan', 'Siwagrha', 'Hindu', 'UNESCO'],
    sources: [
      { title: 'Kompleks Candi Prambanan', url: 'https://whc.unesco.org/en/list/642', sourceName: 'UNESCO' },
      { title: 'Candi Prambanan', url: 'https://id.wikipedia.org/wiki/Candi_Prambanan', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'east-java-shift',
    year: 929,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Perpindahan Kerajaan Medang ke Jawa Timur oleh Mpu Sindok',
    subtitle: 'Lahirnya Dinasti Isyana di Lembah Sungai Brantas',
    summary: 'Mpu Sindok memindahkan pusat ibu kota Medang dari lereng Gunung Merapi di Jawa Tengah ke lembah Sungai Brantas di Jawa Timur, mendirikan Dinasti Isyana.',
    impact: 'Transformasi peradaban Jawa dari pedalaman agraris pegunungan menjadi kerajaan berbasis aliran sungai Brantas dan pelabuhan maritim Hujung Galuh.',
    tags: ['Mpu Sindok', 'Dinasti Isyana', 'Jawa Timur', 'Sungai Brantas'],
    sources: [
      { title: 'Mpu Sindok', url: 'https://id.wikipedia.org/wiki/Mpu_Sindok', sourceName: 'Wikipedia' },
      { title: 'Wangsa Isyana', url: 'https://id.wikipedia.org/wiki/Wangsa_Isyana', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'pralaya-medang-merapi',
    year: 1016,
    period: 'kingdom',
    category: 'war',
    region: 'Jawa',
    title: 'Pralaya Medang dalam Prasasti Pucangan',
    subtitle: 'Serangan Wurawari; penanggalan sekitar 1016–1017',
    summary: 'Prasasti Pucangan menceritakan serangan Wurawari terhadap pemerintahan Dharmawangsa. Kajian sejarah dan geologi menempatkan peristiwa sekitar 1016–1017 serta menolak menyamakan serangan itu dengan letusan Merapi tahun 1006 yang belum terbukti.',
    impact: 'Krisis pemerintahan Medang menjadi latar sejarah kemunculan Airlangga.',
    tags: ['Pralaya Medang', 'Prasasti Pucangan', 'Dharmawangsa Teguh', 'Airlangga', 'Penanggalan'],
    sources: [
      { title: 'Menelusuri kebenaran letusan Gunung Merapi 1006 (Andreastuti, Newhall & Dwiyanto)', url: 'https://journal.esdm.go.id/ijog/article/view/13307', sourceName: 'Indonesian Journal on Geoscience / Badan Geologi' }
    ],
    endYear: 1017,
    dateNote: 'Penanggalan 1016 atau 1017 dibahas dalam kajian; hubungan dengan letusan Merapi 1006 tidak terbukti.',
    evidence: 'approximate',
  },
  {
    id: 'airlangga-kahuripan',
    year: 1019,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Prabu Airlangga Menyatukan Kembali Tanah Jawa (Kahuripan)',
    subtitle: 'Pembangunan Waduk Kamalagyan & Penulisan Arjunawiwaha',
    summary: 'Setelah lolos dari Pralaya Medang, Airlangga dinobatkan menjadi Maharaja Kahuripan. Ia menaklukkan raja-raja pembangkang, membangun tanggul pelindung banjir Sungai Brantas (Prasasti Kamalagyan 1037 M), dan memfasilitasi penggubahan Kakawin Arjunawiwaha oleh Mpu Kanwa.',
    impact: 'Zaman keemasan peradaban maritim sungai Brantas dan pondasi awal sastra adiluhung Jawa Kuno.',
    tags: ['Airlangga', 'Kahuripan', 'Kamalagyan', 'Arjunawiwaha', 'Sungai Brantas'],
    sources: [
      { title: 'Airlangga', url: 'https://id.wikipedia.org/wiki/Airlangga', sourceName: 'Wikipedia' },
      { title: 'Kerajaan Kahuripan', url: 'https://id.wikipedia.org/wiki/Kerajaan_Kahuripan', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'kediri-janggala-split',
    year: 1045,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Pembagian Kahuripan: Lahirnya Kerajaan Panjalu (Kadiri) & Janggala',
    subtitle: 'Diplomasi Mpu Bharada Membagi Kerajaan Demi Kedamaian',
    summary: 'Airlangga membagi kerajaannya melalui pertolongan sakti Mpu Bharada menjadi dua: Panjalu (Kadiri) dengan ibu kota Daha di barat, dan Janggala di timur, untuk menghindari perang saudara antar putranya.',
    impact: 'Kadiri berkembang menjadi imperium agraris dan sastra masyhur yang melahirkan Kakawin Bharatayuddha, Hariwangsa, dan Gatotkacasraya.',
    tags: ['Kadiri', 'Panjalu', 'Janggala', 'Mpu Bharada', 'Bharatayuddha'],
    sources: [
      { title: 'Kerajaan Kadiri', url: 'https://id.wikipedia.org/wiki/Kerajaan_Kadiri', sourceName: 'Wikipedia' },
      { title: 'Mpu Bharada Membelah Jawa', url: 'https://historia.id/kuno/articles/mpu-bharada-membelah-jawa-P93q0', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'ganter-singasari',
    year: 1222,
    period: 'kingdom',
    category: 'war',
    region: 'Jawa',
    title: 'Pertempuran Ganter: Ken Arok Mendirikan Kerajaan Singasari',
    subtitle: 'Runtuhnya Kediri & Berdirinya Dinasti Rajasa di Tumapel',
    summary: 'Ken Arok memimpin pasukan Tumapel didukung kaum Brahmana mengalahkan Raja Kertajaya dari Kadiri dalam Pertempuran Ganter, mendirikan Kerajaan Singasari dan dinasti Wangsa Rajasa.',
    impact: 'Mengakhiri dominasi Kadiri dan melahirkan wangsa perkasa yang kelak menurunkan maharaja-maharaja besar Singasari dan Majapahit.',
    tags: ['Singasari', 'Ken Arok', 'Pertempuran Ganter', 'Kertajaya', 'Tumapel'],
    sources: [
      { title: 'Pertempuran Ganter', url: 'https://id.wikipedia.org/wiki/Pertempuran_Ganter', sourceName: 'Wikipedia' },
      { title: 'Ken Arok Pendiri Singasari', url: 'https://historia.id/kuno/articles/ken-arok-pendiri-dinasti-singasari-v25a0', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'samalas-eruption-lombok',
    year: 1257,
    period: 'kingdom',
    category: 'disaster',
    region: 'Nusa Tenggara',
    title: 'Letusan Mahadahsyat Gunung Samalas (Lombok 1257)',
    subtitle: 'Erupsi VEI-7 Pengubah Iklim Dunia & Terekam dalam Babad Lombok',
    summary: 'Gunung Samalas di sebelah Rinjani meletus dahsyat dengan skala VEI 7, memuntahkan 40 km³ magma padat, menenggelamkan ibu kota Pamatan di Lombok (dicatat dalam naskah lontar Babad Lombok), membentuk kaldera Danau Segara Anak, dan menyemburkan abu sulfat ke stratosfer hingga memicu musim dingin vulkanik dan gagal panen massal di Eropa.',
    impact: 'Salah satu letusan gunung api terbesar di bumi dalam 7.000 tahun terakhir; terbukti ilmiah lewat sinkronisasi sampel es kutub dan dokumen sejarah lokal Nusantara Babad Lombok.',
    tags: ['Samalas', 'Lombok', 'Babad Lombok', 'Segara Anak', 'Bencana Alam', 'VEI 7'],
    sources: [
      { title: 'Letusan Samalas 1257', url: 'https://id.wikipedia.org/wiki/Letusan_Samalas_1257', sourceName: 'Wikipedia' },
      { title: 'Jejak Letusan Samalas dalam Babad Lombok', url: 'https://kemenpar.go.id', sourceName: 'Kemenpar / Badan Geologi' },
      { title: 'PNAS: Source of the 1257 AD Megavolcanic Eruption', url: 'https://doi.org/10.1073/pnas.1307520110', sourceName: 'PNAS' }
    ]
  },
  {
    id: 'ternate-founding',
    year: 1257,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Maluku',
    title: 'Berdirinya Kerajaan Ternate di Maluku Utara (Kolano Cico)',
    subtitle: 'Awal Mula Dinasti Kepulauan Rempah Tertua di Dunia',
    summary: 'Baab Mashur Malamo (Kolano Cico) dinobatkan menjadi pemimpin persatuan klan di Pulau Ternate, mengawali dinasti kerajaan tertua di Kepulauan Maluku penghasil pohon cengkih endemik dunia.',
    impact: 'Peletak fondasi thalasokrasi maritim Ternate yang kelak menguasai rute perdagangan rempah global dan membentang dari Mindanao hingga pesisir barat Papua.',
    tags: ['Ternate', 'Maluku', 'Kolano Cico', 'Kepulauan Rempah', 'Cengkih'],
    sources: [
      { title: 'Kesultanan Ternate', url: 'https://id.wikipedia.org/wiki/Kesultanan_Ternate', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'samudera-pasai',
    year: 1267,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Sumatera',
    title: 'Marah Silu Mendirikan Kesultanan Samudera Pasai',
    subtitle: 'Sultan Malikussaleh Membuka Era Peradaban Islam Maritim Pertama',
    summary: 'Marah Silu memeluk Islam dan bergelar Sultan Malikussaleh, menyatukan Samudera dan Pasai di pesisir utara Aceh. Dikunjungi oleh penjelajah Venesia Marco Polo (1292) dan musafir Maroko Ibnu Battuta (1345).',
    impact: 'Kesultanan Islam berdaulat tertua di Nusantara yang mencetak koin emas sendiri (Deureuham), menjadi episentrum dakwah Islam di Asia Tenggara, dan bandar transit rempah internasional.',
    tags: ['Samudera Pasai', 'Malikussaleh', 'Kesultanan Islam', 'Aceh', 'Ibnu Battuta'],
    sources: [
      { title: 'Kesultanan Samudera Pasai', url: 'https://id.wikipedia.org/wiki/Kesultanan_Samudera_Pasai', sourceName: 'Wikipedia' },
      { title: 'Sultan Malikussaleh dan Samudera Pasai', url: 'https://kebudayaan.kemdikbud.go.id', sourceName: 'Kemdikbud' }
    ]
  },
  {
    id: 'pamalayu-expedition',
    year: 1275,
    period: 'kingdom',
    category: 'diplomacy',
    region: 'Sumatera',
    title: 'Ekspedisi Pamalayu oleh Prabu Kertanegara',
    subtitle: 'Poros Pertahanan Nusantara Membendung Dinasti Yuan Kubilai Khan',
    summary: 'Raja Kertanegara dari Singasari mengirim ekspedisi persahabatan militer ke Kerajaan Melayu Dharmasraya di Sumatera dan menghadiahkan Arca Padang Roco (Amoghapasa).',
    impact: 'Membangun poros aliansi pertahanan maritim kepulauan Nusantara guna membendung ekspansi bala tentara Mongol pimpinan Kaisar Kubilai Khan dari Dinasti Yuan Tiongkok.',
    tags: ['Pamalayu', 'Kertanegara', 'Dharmasraya', 'Amoghapasa', 'Singasari'],
    sources: [
      { title: 'Ekspedisi Pamalayu', url: 'https://id.wikipedia.org/wiki/Ekspedisi_Pamalayu', sourceName: 'Wikipedia' },
      { title: 'Ekspedisi Pamalayu dan Poros Nusantara', url: 'https://historia.id/kuno/articles/ekspedisi-pamalayu-dan-poros-nusantara-Pr4z3', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'majapahit-empire',
    year: 1293,
    period: 'kingdom',
    category: 'war',
    region: 'Jawa',
    title: 'Pengusiran Pasukan Mongol Yuan & Berdirinya Majapahit',
    subtitle: 'Siasat Raden Wijaya di Hutan Tarik & Pertempuran Melawan Kubilai Khan',
    summary: 'Raden Wijaya memanfaatkan kedatangan armada raksasa Mongol pimpinan Ike Mese untuk menumpas Jayakatwang dari Kadiri, lalu berbalik memukul telak dan mengusir tentara Mongol keluar dari tanah Jawa, kemudian menobatkan diri menjadi Raja Majapahit (Kertarajasa Jayawardhana).',
    impact: 'Lahirnya kemaharajaan agung pemersatu Nusantara dengan pusat pemerintahan di Trowulan, sistem hukum kenegaraan Kutara Manawa, dan angkatan laut perkasa Senopati Sarwajala pimpinan Mpu Nala.',
    tags: ['Majapahit', 'Raden Wijaya', 'Trowulan', 'Invasi Mongol', 'Kubilai Khan'],
    sources: [
      { title: 'Kemaharajaan Majapahit', url: 'https://id.wikipedia.org/wiki/Kemaharajaan_Majapahit', sourceName: 'Wikipedia' },
      { title: 'Invasi Mongol ke Jawa', url: 'https://id.wikipedia.org/wiki/Invasi_Mongol_ke_Jawa', sourceName: 'Wikipedia' },
      { title: 'Taktik Raden Wijaya Mengusir Pasukan Tartar', url: 'https://historia.id/kuno/articles/taktik-raden-wijaya-mengusir-tentara-tartar-Pr789', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'kutai-kartanegara-founding',
    year: 1300,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Kalimantan',
    title: 'Pendirian Kerajaan Kutai Kartanegara di Tepian Batu',
    subtitle: 'Aji Batara Agung Dewa Sakti di Hulu Sungai Mahakam',
    summary: 'Aji Batara Agung Dewa Sakti mendirikan Kerajaan Kutai Kartanegara di Tepian Batu (Jembayan), berkembang berdampingan dengan kerajaan sepupunya, Kutai Martapura di pedalaman Mahakam.',
    impact: 'Kutai Kartanegara berkembang pesat sebagai kerajaan maritim sungai dan kelak menjadi Kesultanan Kutai Kartanegara ing Martadipura.',
    tags: ['Kutai Kartanegara', 'Aji Batara Agung', 'Mahakam', 'Kalimantan Timur'],
    sources: [
      { title: 'Kesultanan Kutai Kartanegara', url: 'https://id.wikipedia.org/wiki/Kesultanan_Kutai_Kartanegara_ing_Martadipura', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'palapa-oath-hayam-wuruk',
    year: 1350,
    period: 'kingdom',
    category: 'figure',
    region: 'Jawa',
    title: 'Hayam Wuruk naik takhta Majapahit',
    subtitle: 'Rajasanagara memerintah mulai sekitar 1350',
    summary: 'Hayam Wuruk, bergelar Rajasanagara, mulai memerintah Majapahit sekitar 1350. Gajah Mada menjadi tokoh penting dalam pemerintahannya; Sumpah Palapa merupakan peristiwa berbeda yang ditempatkan lebih awal dalam tradisi Pararaton.',
    impact: 'Masa pemerintahan Hayam Wuruk menjadi konteks penting penulisan Nagarakretagama pada 1365; klaim wilayah dalam teks tidak otomatis menunjukkan kendali langsung.',
    tags: ['Hayam Wuruk', 'Rajasanagara', 'Majapahit', 'Gajah Mada'],
    sources: [
      { title: 'Hayam Wuruk Raja Majapahit', url: 'https://id.wikipedia.org/wiki/Hayam_Wuruk', sourceName: 'Wikipedia' },
    ]
  },
  {
    id: 'perang-bubat',
    year: 1357,
    period: 'kingdom',
    category: 'war',
    region: 'Jawa',
    title: 'Tragedi Perang Bubat di Trowulan',
    subtitle: 'Gugurnya Rombongan Prabu Maharaja Linggabuana & Dyah Pitaloka',
    summary: 'Rencana pernikahan kenegaraan antara Prabu Hayam Wuruk dan Dyah Pitaloka Citraresmi dari Kerajaan Sunda berujung pertumpahan darah di Lapangan Bubat akibat manuver politik Gajah Mada yang menuntut Sunda menyerah sebagai taklukan. Seluruh rombongan keraton Sunda gugur mempertahankan kehormatan.',
    impact: 'Hubungan diplomatik Jawa dan Sunda renggang berabad-abad; Gajah Mada dinonaktifkan sementara dari urusan istana; terekam dalam naskah Kidung Sunda dan Carita Parahyangan.',
    tags: ['Perang Bubat', 'Dyah Pitaloka', 'Hayam Wuruk', 'Gajah Mada', 'Sunda', 'Kidung Sunda'],
    sources: [
      { title: 'Perang Bubat', url: 'https://id.wikipedia.org/wiki/Perang_Bubat', sourceName: 'Wikipedia' },
      { title: 'Tragedi di Lapangan Bubat', url: 'https://historia.id/kuno/articles/tragedi-di-lapangan-bubat-vJ7Y4', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'nagarakretagama-manuscript',
    year: 1365,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Penyusunan Kitab Kakawin Nagarakretagama (Desawarnana)',
    subtitle: 'Mpu Prapanca Mendokumentasikan Tata Negara dan Wilayah Majapahit',
    summary: 'Mpu Prapanca menggubah kakawin pujasastra Desawarnana (Nagarakretagama), merinci tata negara, perayaan kenegaraan, dan daftar lengkap wilayah persahabatan serta taklukan Majapahit.',
    impact: 'Dokumen tertulis terlengkap mengenai wawasan teritorial kepulauan Nusantara yang diakui UNESCO Memory of the World dan menjadi rujukan geopolitik Indonesia modern.',
    tags: ['Nagarakretagama', 'Mpu Prapanca', 'Wilayah Nusantara', 'UNESCO'],
    sources: [
      { title: 'Kakawin Nagarakretagama', url: 'https://id.wikipedia.org/wiki/Kakawin_Nagarakretagama', sourceName: 'Wikipedia' },
      { title: 'Nagarakretagama UNESCO Memory of the World', url: 'https://en.unesco.org/programme/mow', sourceName: 'UNESCO' }
    ]
  },
  {
    id: 'perang-paregreg',
    year: 1404,
    period: 'kingdom',
    category: 'war',
    region: 'Jawa',
    title: 'Perang Paregreg: Perang Saudara Takhta Majapahit (1404–1406)',
    subtitle: 'Konflik Keraton Barat dan Timur yang Mengawali Kemunduran Imperium',
    summary: 'Perebutan takhta antara keraton barat Majapahit di Trowulan (Wikramawardhana) dan keraton timur Pamotan (Bhre Wirabhumi) meletus menjadi perang saudara berdarah selama dua tahun hingga Bhre Wirabhumi gugur.',
    impact: 'Menguras kas negara, merusak jaringan pertahanan laut, dan memicu pelepasan wilayah-wilayah bawahan di luar Jawa, menjadi titik awal runtuhnya kemaharajaan Majapahit.',
    tags: ['Perang Paregreg', 'Majapahit', 'Wikramawardhana', 'Bhre Wirabhumi', 'Perang Saudara'],
    sources: [
      { title: 'Perang Paregreg', url: 'https://id.wikipedia.org/wiki/Perang_Paregreg', sourceName: 'Wikipedia' },
      { title: 'Perang Saudara Meruntuhkan Majapahit', url: 'https://historia.id/kuno/articles/perang-saudara-meruntuhkan-majapahit-vQm13', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'cheng-ho-expedition',
    year: 1405,
    period: 'kingdom',
    category: 'figure',
    region: 'Jawa',
    title: 'Pelayaran Muhibah Laksamana Cheng Ho ke Nusantara (1405–1433)',
    subtitle: 'Armada Harta Dinasti Ming Merajut Jalur Sutra Maritim',
    summary: 'Laksamana Zheng He memimpin armada puluhan kapal harta raksasa Dinasti Ming dalam tujuh ekspedisi samudra, singgah dan bertukar upeti di Samudera Pasai, Palembang, Banten, Cirebon, Semarang, Tuban, dan Gresik.',
    impact: 'Memperkuat poros perdagangan maritim, memfasilitasi pembentukan komunitas muslim Tionghoa di pesisir utara Jawa, serta meninggalkan jejak akulturasi bersejarah seperti Kelenteng Sam Poo Kong di Semarang.',
    tags: ['Cheng Ho', 'Dinasti Ming', 'Jalur Sutra Maritim', 'Sam Poo Kong', 'Palembang'],
    sources: [
      { title: 'Cheng Ho', url: 'https://id.wikipedia.org/wiki/Cheng_Ho', sourceName: 'Wikipedia' },
      { title: 'Pelayaran Muhibah Laksamana Cheng Ho', url: 'https://historia.id/kuno/articles/pelayaran-muhibah-laksamana-cheng-ho-DW4L8', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'demak-sultanate',
    year: 1475,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Raden Patah Mendirikan Kesultanan Demak Bintoro',
    subtitle: 'Kesultanan Islam Berdaulat Pertama di Tanah Jawa & Era Wali Sanga',
    summary: 'Raden Patah, didukung oleh Wali Sanga, memproklamasikan berdirinya Kesultanan Demak sebagai kesultanan Islam berdaulat pertama di tanah Jawa.',
    impact: 'Transisi peradaban dari era Hindu-Buddha ke era peradaban Islam maritim di pesisir utara Jawa, pembangunan Masjid Agung Demak dengan saka tatal.',
    tags: ['Demak', 'Raden Patah', 'Wali Sanga', 'Islam Jawa', 'Masjid Demak'],
    sources: [
      { title: 'Kesultanan Demak', url: 'https://id.wikipedia.org/wiki/Kesultanan_Demak', sourceName: 'Wikipedia' },
      { title: 'Raden Patah Pendiri Demak', url: 'https://historia.id/kuno/articles/raden-patah-pendiri-kesultanan-demak-v28q1', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'prabu-siliwangi-pajajaran',
    year: 1482,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Sri Baduga Maharaja (Prabu Siliwangi) Bertahta di Pakuan Pajajaran',
    subtitle: 'Penyatuan Kerajaan Sunda dan Galuh (Prasasti Batutulis)',
    summary: 'Sri Baduga Maharaja dinobatkan memimpin persatuan Kerajaan Sunda dan Galuh, membangun parit pertahanan dan istana megah di Pakuan Pajajaran (Bogor) serta mendirikan telaga dan jalan perintis.',
    impact: 'Puncak kemakmuran dan kedamaian peradaban Sunda klasik; sosok Prabu Siliwangi menjadi figur teladan abadi kearifan masyarakat Pasundan.',
    tags: ['Prabu Siliwangi', 'Sri Baduga Maharaja', 'Pakuan Pajajaran', 'Prasasti Batutulis', 'Sunda'],
    sources: [
      { title: 'Sri Baduga Maharaja', url: 'https://id.wikipedia.org/wiki/Sri_Baduga_Maharaja', sourceName: 'Wikipedia' },
      { title: 'Jejak Prabu Siliwangi di Pakuan Pajajaran', url: 'https://historia.id/kuno/articles/jejak-prabu-siliwangi-di-pakuan-pajajaran-P173N', sourceName: 'Historia.id' }
    ]
  },

  // ==========================================
  // 3. ERA KEDATANGAN EROPA, VOC & PERLAWANAN KESULTANAN (1511 M - 1799 M)
  // ==========================================
  {
    id: 'fall-malacca',
    year: 1511,
    period: 'colonial',
    category: 'war',
    region: 'Sumatera',
    title: 'Jatuhnya Malaka & Era Perlawanan Terhadap Kolonialisme',
    subtitle: 'Armada Afonso de Albuquerque Merebut Bandar Malaka',
    summary: 'Armada Portugis pimpinan Afonso de Albuquerque merebut Kesultanan Malaka, memicu dispersi perdagangan dan bangkitnya Kesultanan Aceh Darussalam, Banten, Demak, Mataram, Ternate, dan Tidore.',
    impact: 'Transformasi geopolitik Nusantara ke era perlawanan terhadap kolonialisme maritim bangsa Eropa.',
    tags: ['Malaka', 'Kesultanan Islam', 'Kolonialisme Awal', 'Portugis'],
    sources: [
      { title: 'Penaklukan Malaka 1511', url: 'https://id.wikipedia.org/wiki/Penaklukan_Malaka_(1511)', sourceName: 'Wikipedia' },
      { title: 'Petaka di Selat Malaka 1511', url: 'https://historia.id/kuno/articles/petaka-di-selat-malaka-1511-Dr9Kp', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'banten-sultanate',
    year: 1526,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Berdirinya Kesultanan Banten oleh Sultan Maulana Hasanuddin',
    subtitle: 'Sunan Gunung Jati & Maulana Hasanuddin Membangun Poros Maritim Lada',
    summary: 'Diprakarsai oleh Sunan Gunung Jati dan dipimpin putranya Maulana Hasanuddin, Banten melepaskan diri dari pengaruh Kerajaan Pajajaran dan bertransformasi menjadi kesultanan Islam maritim berdaulat penuh di gerbang Selat Sunda.',
    impact: 'Banten tumbuh menjadi emporium perdagangan lada dunia paling kosmopolit di Nusantara, menjalin hubungan langsung dengan Inggris, Prancis, Turki Utsmani, hingga Vatikan.',
    tags: ['Kesultanan Banten', 'Maulana Hasanuddin', 'Sunan Gunung Jati', 'Selat Sunda', 'Lada'],
    sources: [
      { title: 'Kesultanan Banten', url: 'https://id.wikipedia.org/wiki/Kesultanan_Banten', sourceName: 'Wikipedia' },
      { title: 'Sultan Maulana Hasanuddin', url: 'https://id.wikipedia.org/wiki/Maulana_Hasanuddin_dari_Banten', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'fatahillah-jayakarta',
    year: 1527,
    period: 'kingdom',
    category: 'war',
    region: 'Jawa',
    title: 'Fatahillah Merebut Sunda Kelapa (Lahirnya Jayakarta)',
    subtitle: 'Kemenangan Pasukan Demak-Cirebon Mengusir Armada Portugis',
    summary: 'Panglima Fatahillah memimpin pasukan gabungan Demak dan Cirebon mengusir armada Portugis dari Sunda Kelapa pada 22 Juni 1527 dan mengganti namanya menjadi Jayakarta (Kemenangan Sempurna).',
    impact: 'Pencegahan benteng Portugis di Jawa; penetapan tanggal kelahiran resmi kota Jakarta.',
    tags: ['Fatahillah', 'Jayakarta', 'Sunda Kelapa', 'HUT Jakarta'],
    sources: [
      { title: 'Fatahillah', url: 'https://id.wikipedia.org/wiki/Fatahillah', sourceName: 'Wikipedia' },
      { title: 'Sunda Kelapa', url: 'https://id.wikipedia.org/wiki/Pelabuhan_Sunda_Kelapa', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'sultan-baabullah-ternate',
    year: 1575,
    period: 'kingdom',
    category: 'figure',
    region: 'Maluku',
    title: 'Sultan Baabullah Mengusir Portugis dari Maluku ("Penguasa 72 Pulau")',
    subtitle: 'Kemenangan Mutlak Setelah Pengepungan Lima Tahun Benteng Kastela',
    summary: 'Menuntut balas atas pembunuhan licik terhadap ayahnya Sultan Khairun, Sultan Baabullah memimpin rakyat Maluku mengepung Benteng São João Baptista (Kastela) hingga pasukan Portugis menyerah dan diusir dari tanah Ternate pada 1575.',
    impact: 'Puncak kejayaan maritim Kesultanan Ternate sebagai imperium Islam kepulauan rempah yang berdaulat atas 72 pulau berpenghuni, mengalahkan salah satu adidaya maritim Eropa abad ke-16.',
    tags: ['Sultan Baabullah', 'Ternate', 'Benteng Kastela', 'Maluku', 'Pengusiran Portugis'],
    sources: [
      { title: 'Babullah dari Ternate', url: 'https://id.wikipedia.org/wiki/Babullah_dari_Ternate', sourceName: 'Wikipedia' },
      { title: 'Baabullah Penguasa 72 Pulau', url: 'https://historia.id/kuno/articles/baabullah-penguasa-72-pulau-v2L7a', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'mataram-islam-founding',
    year: 1586,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Jawa',
    title: 'Panembahan Senopati Mendirikan Kesultanan Mataram Islam',
    subtitle: 'Danang Sutawijaya Membangun Keraton di Kotagede Yogyakarta',
    summary: 'Danang Sutawijaya (Panembahan Senopati) memindahkan pusat kekuasaan dari Pajang ke Alas Mentaok (Kotagede), mendirikan dinasti Kesultanan Mataram Islam dan meletakkan dasar tradisi Jawa-Islam.',
    impact: 'Mataram berkembang pesat menaklukkan pesisir utara dan pedalaman Jawa, menjadi monarki agraris-militer terbesar yang mempersatukan Jawa di era pra-kolonial.',
    tags: ['Mataram Islam', 'Panembahan Senopati', 'Kotagede', 'Yogyakarta', 'Alas Mentaok'],
    sources: [
      { title: 'Kesultanan Mataram', url: 'https://id.wikipedia.org/wiki/Kesultanan_Mataram', sourceName: 'Wikipedia' },
      { title: 'Panembahan Senopati', url: 'https://id.wikipedia.org/wiki/Panembahan_Senapati', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'cornelis-de-houtman-banten',
    year: 1596,
    period: 'colonial',
    category: 'colonial',
    region: 'Jawa',
    title: 'Pendaratan Perdana Armada Belanda di Banten (Cornelis de Houtman)',
    subtitle: 'Kontak Pertama 23 Juni 1596 Membuka Jalan Kolonialisme Belanda di Asia',
    summary: 'Empat kapal dagang Belanda (Compagnie van Verre: Mauritius, Hollandia, Amsterdam, Duyfken) di bawah pimpinan Cornelis de Houtman tiba dan berlabuh di Pelabuhan Banten pada 23 Juni 1596 setelah mengarungi rute Tanjung Harapan.',
    impact: 'Menembus monopoli navigasi rahasia Portugis ke Kepulauan Rempah; memicu gelombang ekspedisi maritim Belanda yang berujung pada pembentukan kongsi dagang VOC pada 1602.',
    tags: ['Cornelis de Houtman', 'Banten', 'Armada Belanda', '1596', 'Compagnie van Verre'],
    sources: [
      { title: 'Ekspedisi Pertama Belanda ke Hindia Timur', url: 'https://id.wikipedia.org/wiki/Ekspedisi_pertama_Belanda_ke_Hindia_Timur', sourceName: 'Wikipedia' },
      { title: 'Pendaratan Pertama Belanda di Banten', url: 'https://historia.id/kuno/articles/pendaratan-pertama-belanda-di-banten-vYp4g', sourceName: 'Historia.id' },
      { title: 'Overzicht van VOC Archieven 1594-1814', url: 'https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/overzicht-van-voc-archieven-1594-1814', sourceName: 'Nationaal Archief' }
    ]
  },
  {
    id: 'voc-establishment',
    year: 1602,
    period: 'colonial',
    category: 'colonial',
    region: 'Nasional',
    title: 'Pembentukan VOC & Hak Monopoli Dagang Octrooi',
    subtitle: 'Kongsi Dagang Bersatu Belanda Diberi Wewenang Setara Negara',
    summary: 'Pemerintah Republik Belanda (Staten-Generaal) memberikan hak istimewa (octrooi) kepada Vereenigde Oostindische Compagnie (VOC) untuk memonopoli perdagangan rempah di Asia, mencetak uang, membangun benteng, memelihara angkatan bersenjata, dan menyatakan perang.',
    impact: 'Awal ekspansi pos dagang bersenjata Eropa di kepulauan Nusantara, memicu persaingan tajam dan penjajahan korporasi atas kesultanan-kesultanan pribumi.',
    tags: ['VOC', 'Monopoli Rempah', 'Octrooi', 'Staten-Generaal'],
    sources: [
      { title: 'Vereenigde Oostindische Compagnie', url: 'https://id.wikipedia.org/wiki/Vereenigde_Oostindische_Compagnie', sourceName: 'Wikipedia' },
      { title: 'Zoekhulp VOC 1602-1800', url: 'https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/voc-1602-1800', sourceName: 'Nationaal Archief' }
    ]
  },
  {
    id: 'voc-ambon-1605',
    year: 1605,
    period: 'colonial',
    category: 'war',
    region: 'Maluku',
    title: 'Penaklukan Benteng Portugis di Ambon oleh Steven van der Hagen',
    subtitle: 'Benteng Kasteel Victoria Menjadi Pangkalan Teritorial Pertama VOC',
    summary: 'Laksamana VOC Steven van der Hagen merebut benteng pertahanan Portugis di Pulau Ambon (Nossa Senhora da Annunciada) tanpa pertumpahan darah, menggantinya menjadi Kasteel Victoria.',
    impact: 'Ambon resmi menjadi markas teritorial dan pusat pemerintahan perdana VOC di Nusantara sebelum pembangunan Batavia pada 1619.',
    tags: ['Ambon', 'Kasteel Victoria', 'Steven van der Hagen', 'Maluku', 'VOC'],
    sources: [
      { title: 'Steven van der Hagen', url: 'https://id.wikipedia.org/wiki/Steven_van_der_Hagen', sourceName: 'Wikipedia' },
      { title: 'Arsip VOC di Maluku', url: 'https://www.nationaalarchief.nl/onderzoeken/archief/1.04.02', sourceName: 'Nationaal Archief' }
    ]
  },
  {
    id: 'gowa-islam-adoption',
    year: 1605,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Sulawesi',
    title: 'Kesultanan Kembar Gowa-Tallo Resmi Memeluk Islam',
    subtitle: 'Sultan Alauddin & Karaeng Matoaya Mengukuhkan Poros Maritim Timur',
    summary: 'Raja Gowa ke-14 Karaeng Matoaya dan I Manga\'rangi Daeng Manrabbia (Sultan Alauddin) secara resmi memeluk Islam melalui bimbingan ulama Minangkabau Datuk ri Bandang, disusul seluruh rakyat Makassar.',
    impact: 'Gowa-Tallo bertransformasi menjadi pusat imperium maritim Islam di Indonesia Timur dengan pelabuhan Somba Opu yang menerapkan keterbukaan dagang internasional bebas monopoli.',
    tags: ['Gowa-Tallo', 'Sultan Alauddin', 'Makassar', 'Somba Opu', 'Datuk ri Bandang'],
    sources: [
      { title: 'Kesultanan Gowa', url: 'https://id.wikipedia.org/wiki/Kesultanan_Gowa', sourceName: 'Wikipedia' },
      { title: 'Sultan Alauddin dari Gowa', url: 'https://id.wikipedia.org/wiki/Alauddin_dari_Gowa', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'batavia-founding',
    year: 1619,
    period: 'colonial',
    category: 'colonial',
    region: 'Jawa',
    title: 'Pendirian Batavia oleh Jan Pieterszoon Coen',
    subtitle: 'Jayakarta Dibumihanguskan & Diubah Menjadi Markas Utama VOC',
    summary: 'Gubernur Jenderal VOC J.P. Coen menaklukkan Jayakarta dan mendirikan benteng kota Batavia di muara Ciliwung sebagai markas utama VOC di Asia.',
    impact: 'Batavia bertransformasi menjadi pusat jaringan logistik, perdagangan, dan kekuatan militer kolonial Belanda selama tiga abad.',
    tags: ['Batavia', 'JP Coen', 'Jayakarta', 'Markas VOC'],
    sources: [
      { title: 'Jan Pieterszoon Coen', url: 'https://id.wikipedia.org/wiki/Jan_Pieterszoon_Coen', sourceName: 'Wikipedia' },
      { title: 'Sejarah Batavia', url: 'https://id.wikipedia.org/wiki/Batavia', sourceName: 'Wikipedia' },
      { title: 'Coen Menghancurkan Jayakarta', url: 'https://historia.id/kota/articles/coen-menghancurkan-jayakarta-vY4bA', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'banda-massacre-1621',
    year: 1621,
    period: 'colonial',
    category: 'war',
    region: 'Maluku',
    title: 'Invasi & Pembantaian Massal Kepulauan Banda oleh J.P. Coen',
    subtitle: 'Genosida Penduduk Banda Demi Memonopoli Rempah Buah Pala Dunia',
    summary: 'Demi memaksakan monopoli mutlak buah pala, Gubernur Jenderal J.P. Coen mengerahkan armada kapal tempur bersama tentara bayaran samurai Jepang menyerbu Kepulauan Banda, membantai lebih dari 90% populasi pribumi Banda, dan mengeksekusi 44 tetua adat (Orang Kaya).',
    impact: 'Depopulasi total penduduk asli Banda yang digantikan sistem perbudakan perkebunan kolonial (perkeniers); diakui secara resmi oleh sejarawan dan Nationaal Archief Belanda sebagai genosida kolonial pertama di Nusantara.',
    tags: ['Pembantaian Banda', 'Genosida Banda', 'JP Coen', 'Monopoli Pala', 'Orang Kaya', 'Maluku'],
    sources: [
      { title: 'Genocide op Banda (Nationaal Archief)', url: 'https://www.nationaalarchief.nl/beleven/onderwijs/bronnenbox/genocide-op-banda', sourceName: 'Nationaal Archief' },
      { title: 'Pembantaian Banda', url: 'https://id.wikipedia.org/wiki/Pembantaian_Banda', sourceName: 'Wikipedia' },
      { title: 'Pembantaian di Pulau Pala', url: 'https://historia.id/kolonial/articles/pembantaian-di-pulau-pala-DrbYq', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'siege-of-batavia',
    year: 1628,
    period: 'kingdom',
    category: 'war',
    region: 'Jawa',
    title: 'Pengepungan Akbar Batavia oleh Sultan Agung Mataram (1628–1629)',
    subtitle: 'Serangan Puluhan Ribu Prajurit Mataram Mengguncang Markas VOC',
    summary: 'Sultan Agung memimpin mobilisasi militer terbesar di Jawa mengerahkan puluhan ribu prajurit Mataram di bawah Tumenggung Bahureksa dan Sura Agul-Agul mengepung Batavia selama dua tahun berturut-turut, membendung Sungai Ciliwung hingga menewaskan J.P. Coen akibat wabah kolera.',
    impact: 'Pertempuran terhebat antara monarki pribumi melawan benteng VOC di abad ke-17; membuktikan daya jangkau logistik militer Mataram ke barat Jawa.',
    tags: ['Sultan Agung', 'Pengepungan Batavia', 'Mataram', 'Bahureksa', 'JP Coen'],
    sources: [
      { title: 'Pengepungan Batavia (1628)', url: 'https://id.wikipedia.org/wiki/Pengepungan_Batavia_(1628)', sourceName: 'Wikipedia' },
      { title: 'Sultan Agung Menggempur Batavia', url: 'https://historia.id/kuno/articles/sultan-agung-menggempur-batavia-DWz1x', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'kutai-unification',
    year: 1635,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Kalimantan',
    title: 'Penyatuan Kutai Martapura & Kutai Kartanegara',
    subtitle: 'Pangeran Sinum Panji Mendapa Menyatukan Lembah Mahakam',
    summary: 'Raja Kutai Kartanegara ke-8, Pangeran Sinum Panji Mendapa, menaklukkan Kerajaan Kutai Martapura di Muara Kaman, menyatukan kedua kerajaan menjadi Kesultanan Kutai Kartanegara ing Martadipura.',
    impact: 'Penyatuan lembah Sungai Mahakam di bawah panji Kesultanan Kutai Kartanegara yang berpusat di Jembayan/Tenggarong.',
    tags: ['Kutai Kartanegara', 'Sinum Panji Mendapa', 'Kutai Martapura', 'Mahakam'],
    sources: [
      { title: 'Kesultanan Kutai Kartanegara', url: 'https://id.wikipedia.org/wiki/Kesultanan_Kutai_Kartanegara_ing_Martadipura', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'bongaya-treaty',
    year: 1667,
    period: 'colonial',
    category: 'diplomacy',
    region: 'Sulawesi',
    title: 'Perjanjian Bongaya: Takluknya Makassar & Monopoli VOC di Timur',
    subtitle: 'Sultan Hasanuddin Menghadapi Aliansi Speelman dan Arung Palakka',
    summary: 'Sultan Hasanuddin dari Kesultanan Gowa terpaksa menandatangani Perjanjian Bongaya setelah perang sengit melawan aliansi VOC pimpinan Cornelis Speelman dan Arung Palakka dari Bone.',
    impact: 'Perniagaan rempah Indonesia Timur jatuh sepenuhnya ke bawah kendali monopoli VOC; rute maritim Makassar ditutup untuk pedagang bebas.',
    tags: ['Perjanjian Bongaya', 'Sultan Hasanuddin', 'Gowa', 'Bone', 'Speelman'],
    sources: [
      { title: 'Perjanjian Bongaya', url: 'https://id.wikipedia.org/wiki/Perjanjian_Bongaya', sourceName: 'Wikipedia' },
      { title: 'Sultan Hasanuddin', url: 'https://id.wikipedia.org/wiki/Sultan_Hasanuddin', sourceName: 'Wikipedia' }
    ]
  },
  {
    id: 'siak-founding',
    year: 1723,
    period: 'kingdom',
    category: 'kingdom',
    region: 'Sumatera',
    title: 'Raja Kecik Mendirikan Kesultanan Siak Sri Indrapura di Riau',
    subtitle: 'Pusat Kebudayaan Melayu Islam di Tepian Sungai Siak',
    summary: 'Raja Kecik (Sultan Abdul Jalil Rahmad Syah) mendirikan Kesultanan Siak di Buantan setelah sengketa suksesi takhta Johor-Riau. Siak berkembang menjadi kesultanan maritim tangguh yang menguasai muara-muara strategis di Selat Malaka.',
    impact: 'Pusat peradaban Melayu Islam di Riau; kelak pada 1945 Sultan Syarif Kasim II menyerahkan seluruh mahkota, istana, dan kas kesultanan 13 juta gulden demi mendukung Republik Indonesia.',
    tags: ['Siak Sri Indrapura', 'Raja Kecik', 'Riau', 'Sungai Siak', 'Sultan Syarif Kasim II'],
    sources: [
      { title: 'Kesultanan Siak Sri Indrapura', url: 'https://id.wikipedia.org/wiki/Kesultanan_Siak_Sri_Indrapura', sourceName: 'Wikipedia' },
      { title: 'Istana Asserayah Hasyimiah Siak', url: 'https://kebudayaan.kemdikbud.go.id', sourceName: 'Kemdikbud' }
    ]
  },
  {
    id: 'geger-pacinan-1740',
    year: 1740,
    period: 'colonial',
    category: 'politics',
    region: 'Jawa',
    title: 'Tragedi Kemanusiaan Geger Pacinan di Batavia (1740)',
    subtitle: 'Pembantaian 10.000 Etnis Tionghoa & Meletusnya Perang Jawa-Tionghoa',
    summary: 'Dipicu krisis harga gula dan histeria kolonial VOC di bawah Gubernur Jenderal Adriaan Valckenier, serdadu VOC bersama milisi membantai lebih dari 10.000 warga Tionghoa di dalam tembok Batavia (Kali Besar memerah darah), memicu pemberontakan gabungan Jawa-Tionghoa (Perang Sepanjang).',
    impact: 'Memicu perang berkepanjangan di Jawa yang meruntuhkan Keraton Kartasura dan melahirkan pemukiman segregasi Pecinan Glodok di luar tembok kota.',
    tags: ['Geger Pacinan', 'Batavia', 'Adriaan Valckenier', 'Kali Besar', 'Perang Sepanjang'],
    sources: [
      { title: 'Geger Pacinan', url: 'https://id.wikipedia.org/wiki/Geger_Pacinan', sourceName: 'Wikipedia' },
      { title: 'Tragedi Berdarah di Kali Besar', url: 'https://historia.id/kota/articles/tragedi-berdarah-di-kali-besar-DwjX4', sourceName: 'Historia.id' },
      { title: 'Arsip VOC Batavia 1740', url: 'https://www.nationaalarchief.nl/onderzoeken/archief/1.04.02', sourceName: 'Nationaal Archief' }
    ]
  },
  {
    id: 'giyanti-treaty',
    year: 1755,
    period: 'kingdom',
    category: 'diplomacy',
    region: 'Jawa',
    title: 'Perjanjian Giyanti: Mataram Terbelah Menjadi Dua Keraton',
    subtitle: 'Palihan Nagari: Lahirnya Kasunanan Surakarta & Kesultanan Yogyakarta',
    summary: 'VOC memfasilitasi pembagian wilayah Kesultanan Mataram menjadi dua entitas: Kasunanan Surakarta (Pakubuwana III) dan Kesultanan Yogyakarta (Pangeran Mangkubumi / Hamengkubuwana I).',
    impact: 'Kekuatan monarki terbesar di Jawa terpecah permanen, mempermudah intervensi politik dan hegemoni kolonial VOC di jantung pulau Jawa.',
    tags: ['Perjanjian Giyanti', 'Mataram', 'Yogyakarta', 'Surakarta', 'Hamengkubuwana I'],
    sources: [
      { title: 'Perjanjian Giyanti', url: 'https://id.wikipedia.org/wiki/Perjanjian_Giyanti', sourceName: 'Wikipedia' },
      { title: 'Perjanjian Giyanti dan Terbelahnya Tanah Jawa', url: 'https://historia.id/kuno/articles/perjanjian-giyanti-dan-terbelahnya-tanah-jawa-P93m4', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'dutch-east-indies-formed',
    year: 1799,
    period: 'colonial',
    category: 'colonial',
    region: 'Nasional',
    title: 'Pembubaran Resmi VOC & Lahirnya Hindia Belanda',
    subtitle: '31 Desember 1799: Peralihan dari Kongsi Dagang ke Koloni Kerajaan Belanda',
    summary: 'Menyusul kebangkrutan masif akibat korupsi (Vergaan Onder Corruptie) dan hutang 134 juta gulden, piagam charter VOC resmi diakhiri pada 31 Desember 1799. Seluruh wilayah, aset loji, dan hutang perusahaan dinasionalisasi oleh Kerajaan Belanda menjadi koloni Hindia Belanda (Nederlands-Indië) mulai 1 Januari 1800.',
    impact: 'Beralihnya sistem eksploitasi dagang kongsi dagang menjadi kolonialisme langsung oleh aparatur negara Kerajaan Belanda.',
    tags: ['Hindia Belanda', 'Pembubaran VOC', 'Nederlands-Indie', '1799'],
    sources: [
      { title: 'Hindia Belanda', url: 'https://id.wikipedia.org/wiki/Hindia_Belanda', sourceName: 'Wikipedia' },
      { title: 'Pembubaran VOC 1799 (Nationaal Archief)', url: 'https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/voc-1602-1800', sourceName: 'Nationaal Archief' }
    ]
  },

  // ==========================================
  // 4. ERA HINDIA BELANDA, PERANG BESAR & BENCANA GLOBAL (1800 M - 1941 M)
  // ==========================================
  {
    id: 'perang-padri',
    year: 1803,
    period: 'colonial',
    category: 'war',
    region: 'Sumatera',
    title: 'Meletusnya Perang Padri & Perjuangan Tuanku Imam Bonjol (1803–1837)',
    subtitle: 'Penyatuan Kaum Adat dan Kaum Padri Melawan Penjajahan Belanda',
    summary: 'Dimulai dari gerakan pemurnian syariat Islam di dataran tinggi Minangkabau, perang bertransformasi menjadi perlawanan rakyat semesta melawan kolonial Belanda setelah Kaum Adat dan Ulama Padri bersatu di bawah Tuanku Imam Bonjol di Benteng Bukit Tajadi.',
    impact: 'Melahirkan konsensus kultural abadi Minangkabau "Adat basandi syarak, syarak basandi Kitabullah" dan menyerap kekuatan militer Belanda di Sumatera selama 34 tahun.',
    tags: ['Perang Padri', 'Tuanku Imam Bonjol', 'Benteng Bonjol', 'Minangkabau', 'Sumatera Barat'],
    sources: [
      { title: 'Perang Padri', url: 'https://id.wikipedia.org/wiki/Perang_Padri', sourceName: 'Wikipedia' },
      { title: 'Benteng Terakhir Kaum Padri', url: 'https://historia.id/militer/articles/benteng-terakhir-kaum-padri-v2m1G', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'daendels-postweg',
    year: 1808,
    period: 'colonial',
    category: 'colonial',
    region: 'Jawa',
    title: 'Pembangunan Jalan Raya Pos Anyer–Panarukan oleh Daendels',
    subtitle: 'Proyek Infrastruktur Militer Sepanjang 1.000 Km Melintasi Jawa',
    summary: 'Gubernur Jenderal Herman Willem Daendels memerintahkan pembangunan jalan raya pos militer (De Grote Postweg) dari Anyer hingga Panarukan dengan kerja rodi paksa demi memperkuat pertahanan Jawa dari invasi armada Inggris.',
    impact: 'Memotong waktu tempuh perjalanan Jawa dari sebulan menjadi beberapa hari, namun menelan korban jiwa puluhan ribu pekerja paksa pribumi.',
    tags: ['Daendels', 'Jalan Raya Pos', 'De Grote Postweg', 'Kerja Rodi', 'Anyer-Panarukan'],
    sources: [
      { title: 'Jalan Raya Pos', url: 'https://id.wikipedia.org/wiki/Jalan_Raya_Pos', sourceName: 'Wikipedia' },
      { title: 'Daendels dan Jalan Raya Pos', url: 'https://historia.id/kolonial/articles/daendels-dan-jalan-raya-pos-DL410', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'british-interregnum-raffles',
    year: 1811,
    period: 'colonial',
    category: 'colonial',
    region: 'Jawa',
    title: 'Pemerintahan Inggris di Nusantara (Thomas Stamford Raffles)',
    subtitle: 'Masa Interregnum 1811–1816: Sewa Tanah, Pemugaran Borobudur & Sains',
    summary: 'Pasukan Imperium Britania merebut Jawa semasa Perang Napoleon melalui Kapitulasi Tuntang. Letnan Gubernur Thomas Stamford Raffles memerintah Hindia (1811–1816).',
    impact: 'Pengenalan sistem sewa tanah (land rent), pemugaran Candi Borobudur, penemuan bunga raksasa Rafflesia arnoldii, dan penulisan adikarya The History of Java.',
    tags: ['Inggris', 'Raffles', 'History of Java', 'Borobudur', 'Kapitulasi Tuntang'],
    sources: [
      { title: 'Thomas Stamford Raffles', url: 'https://id.wikipedia.org/wiki/Thomas_Stamford_Raffles', sourceName: 'Wikipedia' },
      { title: 'British Library: Raffles Administration', url: 'https://searcharchives.bl.uk/catalog/040-002360253', sourceName: 'British Library' }
    ]
  },
  {
    id: 'tambora-eruption-1815',
    year: 1815,
    period: 'colonial',
    category: 'disaster',
    region: 'Nusa Tenggara',
    title: 'Letusan Mahadahsyat Gunung Tambora: Skala VEI-7',
    subtitle: 'Letusan Terbesar dalam Sejarah Tertulis Manusia & Fenomena Iklim Global 1816',
    summary: 'Pada 10–15 April 1815, Gunung Tambora di Pulau Sumbawa meletus dahsyat dengan skala VEI 7, memuntahkan lebih dari 100 km³ material vulkanik, melenyapkan Kerajaan Tambora dan Pekat, menewaskan lebih dari 71.000 orang di kepulauan Nusa Tenggara, dan menyebarkan aerosol sulfat yang memicu fenomena Tahun Tanpa Musim Panas (Year Without a Summer) di Eropa dan Amerika Utara pada 1816.',
    impact: 'Letusan gunung api terdahsyat dalam sejarah modern manusia; melumpuhkan peradaban Sumbawa dan memicu kegagalan panen serta krisis pangan di seluruh dunia.',
    tags: ['Tambora', 'Sumbawa', 'Letusan Terbesar', 'VEI 7', 'Bencana Alam', 'Year Without a Summer'],
    sources: [
      { title: 'Letusan Tambora 1815', url: 'https://id.wikipedia.org/wiki/Letusan_Tambora_1815', sourceName: 'Wikipedia' },
      { title: 'Letusan Tambora Musnahkan Dua Kerajaan', url: 'https://historia.id/sains/articles/letusan-gunung-tambora-musnahkan-dua-kerajaan-DL3rV', sourceName: 'Historia.id' },
      { title: 'Koran & Laporan Tambora 1815', url: 'https://www.delpher.nl', sourceName: 'Delpher' }
    ]
  },
  {
    id: 'diponegoro-war',
    year: 1825,
    period: 'colonial',
    category: 'war',
    region: 'Jawa',
    title: 'Perang Diponegoro (Perang Jawa 1825–1830)',
    subtitle: 'Perang Suci Semesta Terbesar Menentang Penjajahan Belanda di Jawa',
    summary: 'Pangeran Diponegoro mengobarkan perang suci melawan penindasan Hindia Belanda dan penetrasi kolonial di keraton Jawa (1825–1830), memimpin gerilya bersama Kyai Mojo dan Sentot Alibasya Prawirodirdjo.',
    impact: 'Perang terbesar di Jawa yang menguras kas Belanda, merenggut 200.000 korban jiwa rakyat Jawa, dan memicu diterapkannya sistem Tanam Paksa (Cultuurstelsel); manuskrip otobiografi Babad Diponegoro diakui UNESCO Memory of the World.',
    tags: ['Perang Diponegoro', 'Perang Jawa', 'Bentengstelsel', 'Sentot Alibasya', 'UNESCO'],
    sources: [
      { title: 'Perang Diponegoro', url: 'https://id.wikipedia.org/wiki/Perang_Diponegoro', sourceName: 'Wikipedia' },
      { title: 'Babad Diponegoro (UNESCO Memory of the World)', url: 'https://en.unesco.org/programme/mow', sourceName: 'UNESCO' },
      { title: 'Mengapa Diponegoro Kalah', url: 'https://historia.id/militer/articles/mengapa-diponegoro-kalah-P181V', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'cultuurstelsel-1830',
    year: 1830,
    period: 'colonial',
    category: 'colonial',
    region: 'Nasional',
    title: 'Penerapan Sistem Tanam Paksa (Cultuurstelsel) oleh Van den Bosch',
    subtitle: 'Eksploitasi Agraria Kolonial demi Menutup Defisit Kas Negeri Belanda',
    summary: 'Gubernur Jenderal Johannes van den Bosch memberlakukan Cultuurstelsel yang mewajibkan para petani menyerahkan seperlima tanahnya untuk komoditas ekspor (nila, kopi, tebu, teh) bagi pemerintah kolonial.',
    impact: 'Menghasilkan laba ratusan juta gulden (batig slot) bagi industrialisasi Belanda, namun menyebabkan bencana kelaparan dan penderitaan dahsyat di Jawa yang menginspirasi Multatuli menulis Max Havelaar.',
    tags: ['Cultuurstelsel', 'Tanam Paksa', 'Van den Bosch', 'Max Havelaar', 'Agraria'],
    sources: [
      { title: 'Tanam Paksa', url: 'https://id.wikipedia.org/wiki/Tanam_Paksa', sourceName: 'Wikipedia' },
      { title: 'Cultuurstelsel di Hindia Belanda', url: 'https://www.nationaalarchief.nl', sourceName: 'Nationaal Archief' }
    ]
  },
  {
    id: 'puputan-jagaraga-1849',
    year: 1849,
    period: 'colonial',
    category: 'war',
    region: 'Bali',
    title: 'Perang Puputan Jagaraga di Bali (I Gusti Ketut Jelantik)',
    subtitle: 'Perlawanan Heroik Mempertahankan Hak Tawan Karang Kerajaan Bali',
    summary: 'Patih Kerajaan Buleleng I Gusti Ketut Jelantik bersama Jro Jagaraga memimpin benteng pertahanan Supit Urang menolak penghapusan hukum adat laut Tawan Karang oleh serdadu ekspedisi KNIL Belanda dengan semboyan legendaris: "Selama keris masih ada di tangan, perang pantang surut!".',
    impact: 'Puncak perlawanan habis-habisan (puputan) rakyat Bali utara yang menggetarkan armada tempur kolonial Belanda di perairan Bali.',
    tags: ['Puputan Jagaraga', 'I Gusti Ketut Jelantik', 'Buleleng', 'Bali', 'Tawan Karang'],
    sources: [
      { title: 'Perang Bali II (Perang Jagaraga)', url: 'https://id.wikipedia.org/wiki/Perang_Bali_II', sourceName: 'Wikipedia' },
      { title: 'Puputan Jagaraga Perang Habis-Habisan di Bali', url: 'https://historia.id/militer/articles/puputan-jagaraga-perang-habis-habisan-di-bali-P9Aev', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'perang-banjar-1859',
    year: 1859,
    period: 'colonial',
    category: 'war',
    region: 'Kalimantan',
    title: 'Meletusnya Perang Banjar: "Haram Manyarah Waja Sampai Kaputing"',
    subtitle: 'Pangeran Antasari Memimpin Perang Semesta Melawan Kolonial Belanda',
    summary: 'Dipicu intervensi Belanda terhadap takhta Kesultanan Banjar dan monopoli tambang batu bara Oranje Nassau di Pengaron, Pangeran Antasari dan Pangeran Hidayatullah mengobarkan perang rakyat semesta di pedalaman Kalimantan Selatan dan Tengah (1859–1905).',
    impact: 'Belanda membubarkan paksa Kesultanan Banjar pada 1860, namun perang gerilya rakyat terus menyala selama lebih dari empat dekade di pedalaman Barito.',
    tags: ['Perang Banjar', 'Pangeran Antasari', 'Hidayatullah', 'Barito', 'Kalimantan Selatan'],
    sources: [
      { title: 'Perang Banjar', url: 'https://id.wikipedia.org/wiki/Perang_Banjar', sourceName: 'Wikipedia' },
      { title: 'Perang Banjar Melawan Belanda', url: 'https://historia.id/militer/articles/perang-banjar-melawan-belanda-vJYQz', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'aceh-war',
    year: 1873,
    period: 'colonial',
    category: 'war',
    region: 'Sumatera',
    title: 'Perang Aceh & Deklarasi Perang Hindia Belanda (1873–1904)',
    subtitle: 'Perang Gerilya Terpanjang Dipimpin Teuku Umar dan Cut Nyak Dien',
    summary: 'Hindia Belanda menyerang Kesultanan Aceh, memicu perang gerilya terpanjang dan paling melelahkan yang dipimpin oleh Teuku Umar, Panglima Polem, Cut Nyak Dien, dan para pejuang ulama Aceh.',
    impact: 'Setelah perang puluhan tahun dan menelan puluhan ribu korban serdadu Belanda, pemerintah kolonial mengkonsolidasikan seluruh Nusantara dalam kesatuan teritorial Pax Neerlandica.',
    tags: ['Perang Aceh', 'Pax Neerlandica', 'Cut Nyak Dien', 'Teuku Umar', 'Baiturrahman'],
    sources: [
      { title: 'Perang Aceh', url: 'https://id.wikipedia.org/wiki/Perang_Aceh', sourceName: 'Wikipedia' },
      { title: 'Perang Aceh Paling Berdarah Bagi Belanda', url: 'https://historia.id/militer/articles/perang-aceh-paling-berdarah-bagi-belanda-vY2aL', sourceName: 'Historia.id' },
      { title: 'Arsip Kolonial Perang Aceh', url: 'https://www.nationaalarchief.nl', sourceName: 'Nationaal Archief' }
    ]
  },
  {
    id: 'krakatau-eruption-1883',
    year: 1883,
    period: 'colonial',
    category: 'disaster',
    region: 'Jawa',
    title: 'Letusan Kataklismik Gunung Krakatau & Tsunami Selat Sunda',
    subtitle: 'Dentuman Terdengar 4.800 Km & Bencana Global Pertama yang Disiarkan Telegraf',
    summary: 'Pada 26–27 Agustus 1883, Gunung Krakatau di Selat Sunda meletus dengan kekuatan setara 200 megaton TNT, memicu gelombang tsunami raksasa setinggi 30–40 meter yang menyapu pesisir Banten dan Lampung, menewaskan lebih dari 36.000 jiwa.',
    impact: 'Melenyapkan dua pertiga badan pulau Krakatau dan melahirkan Anak Krakatau (1927); diselidiki secara ilmiah oleh geolog R.D.M. Verbeek dan tercatat dalam arsip Delpher serta Nationaal Archief.',
    tags: ['Krakatau', 'Selat Sunda', 'Tsunami', 'Letusan 1883', 'Bencana Alam', 'Verbeek'],
    sources: [
      { title: 'Letusan Krakatau 1883', url: 'https://id.wikipedia.org/wiki/Letusan_Krakatau_1883', sourceName: 'Wikipedia' },
      { title: 'Dentuman Krakatau Mengguncang Dunia', url: 'https://historia.id/sains/articles/dentuman-krakatau-mengguncang-dunia-DL4kP', sourceName: 'Historia.id' },
      { title: 'Krakatau 1883 Delpher Archive', url: 'https://www.delpher.nl', sourceName: 'Delpher' }
    ]
  },
  {
    id: 'politik-etis-1901',
    year: 1901,
    period: 'colonial',
    category: 'colonial',
    region: 'Nasional',
    title: 'Pencanangan Politik Etis oleh Ratu Wilhelmina (Ethische Politiek)',
    subtitle: 'Trias Van Deventer: Irigasi, Emigrasi, dan Edukasi Kaum Bumiputra',
    summary: 'Ratu Wilhelmina dalam pidato takhta mengumumkan kebijakan Politik Etis sebagai bentuk hutang budi (Een Eereschuld) Belanda kepada rakyat Nusantara, mengalokasikan anggaran untuk pendidikan modern kaum bumiputra.',
    impact: 'Melahirkan generasi intelektual muda pribumi berpendidikan modern yang mendirikan organisasi-organisasi pergerakan kebangsaan Indonesia.',
    tags: ['Politik Etis', 'Van Deventer', 'Wilhelmina', 'Edukasi Bumiputra', 'STOVIA'],
    sources: [
      { title: 'Politik Etis', url: 'https://id.wikipedia.org/wiki/Politik_Etis', sourceName: 'Wikipedia' },
      { title: 'Nationaal Archief: Ethische Politiek', url: 'https://www.nationaalarchief.nl', sourceName: 'Nationaal Archief' }
    ]
  },
  {
    id: 'kartini-emancipation-1903',
    year: 1903,
    period: 'colonial',
    category: 'figure',
    region: 'Jawa',
    title: 'R.A. Kartini Mempelopori Emansipasi & Pendidikan Perempuan',
    subtitle: 'Habis Gelap Terbitlah Terang: Cahaya Pemikiran Modern di Jepara',
    summary: 'Raden Ajeng Kartini mendirikan sekolah pertama bagi putri-putri bumiputra di Jepara dan mengirimkan korespondensi pemikiran progresif menuntut kesetaraan hak, kebebasan, dan pendidikan modern bagi kaum perempuan.',
    impact: 'Kumpulan suratnya dibukukan menjadi Door Duisternis tot Licht (Habis Gelap Terbitlah Terang), memicu kebangkitan gerakan emansipasi wanita di Indonesia.',
    tags: ['Kartini', 'Emansipasi Wanita', 'Pendidikan Perempuan', 'Habis Gelap Terbitlah Terang'],
    sources: [
      { title: 'Kartini', url: 'https://id.wikipedia.org/wiki/Kartini', sourceName: 'Wikipedia' },
      { title: 'Kartini dan Api Pemikiran Emansipasi', url: 'https://historia.id/kultur/articles/kartini-dan-api-pemikiran-emansipasi-DrZ10', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'budi-utomo-1908',
    year: 1908,
    period: 'colonial',
    category: 'figure',
    region: 'Jawa',
    title: 'Berdirinya Budi Utomo: Fajar Hari Kebangkitan Nasional (20 Mei 1908)',
    subtitle: 'Organisasi Modern Pertama Siswa STOVIA di Batavia',
    summary: 'Dr. Soetomo bersama para pelajar STOVIA di Batavia mendirikan Budi Utomo atas gagasan dr. Wahidin Soedirohoesodo untuk memajukan pendidikan dan kebudayaan bumiputra.',
    impact: 'Peralihan strategi perjuangan dari perlawanan fisik bersenjata menjadi organisasi modern terorganisir; diperingati sebagai Hari Kebangkitan Nasional.',
    tags: ['Budi Utomo', 'Kebangkitan Nasional', 'STOVIA', 'Dr Soetomo', '20 Mei 1908'],
    sources: [
      { title: 'Budi Utomo', url: 'https://id.wikipedia.org/wiki/Budi_Utomo', sourceName: 'Wikipedia' },
      { title: 'Sejarah Hari Kebangkitan Nasional (ANRI)', url: 'https://anri.go.id', sourceName: 'ANRI' }
    ]
  },
  {
    id: 'sarekat-islam-1912',
    year: 1912,
    period: 'colonial',
    category: 'figure',
    region: 'Jawa',
    title: 'Berkembangnya Sarekat Islam oleh H.O.S. Tjokroaminoto',
    subtitle: 'Organisasi Massa Politik Bumiputra Terbesar di Surabaya',
    summary: 'Ditransformasikan dari Sarekat Dagang Islam pimpinan H. Samanhudi, H.O.S. Tjokroaminoto memimpin Sarekat Islam menjadi kekuatan massa rakyat terbesar dengan jutaan anggota.',
    impact: 'Melahirkan kesadaran politik kerakyatan dan mendidik kader-kader pendiri bangsa dari berbagai spektrum ideologi (Soekarno, Semaoen, Musso, Kartosoewirjo).',
    tags: ['Sarekat Islam', 'Tjokroaminoto', 'Haji Samanhudi', 'Pergerakan Nasional'],
    sources: [
      { title: 'Sarekat Islam', url: 'https://id.wikipedia.org/wiki/Sarekat_Islam', sourceName: 'Wikipedia' },
      { title: 'Raja Jawa Tanpa Mahkota: Tjokroaminoto', url: 'https://historia.id/politik/articles/raja-jawa-tanpa-mahkota-tjokroaminoto-vYZpA', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'budi-utomo-youth-pledge',
    year: 1928,
    period: 'colonial',
    category: 'independence',
    region: 'Nasional',
    title: 'Kongres Pemuda II: Ikrar Monumental Sumpah Pemuda (28 Oktober 1928)',
    subtitle: 'Satu Nusa, Satu Bangsa, dan Satu Bahasa Indonesia',
    summary: 'Kongres Pemuda II di Batavia melahirkan ikrar monumental: Satu Nusa, Satu Bangsa, dan Satu Bahasa Persatuan, Bahasa Indonesia, serta mengumandangkan lagu kebangsaan Indonesia Raya karya W.R. Soepratman.',
    impact: 'Lahirnya identitas nasional modern yang melebur sekat-sekat etnis dan kerajaan tradisional, menjadi pilar utama berdirinya Republik Indonesia.',
    tags: ['Sumpah Pemuda', 'Indonesia', 'Kebangkitan Nasional', '1928', 'Indonesia Raya'],
    sources: [
      { title: 'Sumpah Pemuda', url: 'https://id.wikipedia.org/wiki/Sumpah_Pemuda', sourceName: 'Wikipedia' },
      { title: 'Arsip Sumpah Pemuda (ANRI)', url: 'https://anri.go.id', sourceName: 'ANRI' },
      { title: 'Museum Sumpah Pemuda', url: 'https://kebudayaan.kemdikbud.go.id', sourceName: 'Kemdikbud' }
    ]
  },
  {
    id: 'indonesia-menggugat-1930',
    year: 1930,
    period: 'colonial',
    category: 'figure',
    region: 'Jawa',
    title: 'Pledoi Monumental Soekarno: "Indonesia Menggugat!" di Bandung',
    subtitle: 'Pidato Pembelaan Bersejarah di Hadapan Hakim Pengadilan Kolonial',
    summary: 'Diseret ke pengadilan Landraad Bandung oleh pemerintah kolonial, Ir. Soekarno membacakan nota pembelaan setebal puluhan halaman yang menelanjangi imperialisme dan kolonialisme Belanda serta mempertegas tuntutan Indonesia Merdeka.',
    impact: 'Manifesto politik pergerakan yang membangkitkan kesadaran anti-kolonialisme di seluruh pelosok tanah air.',
    tags: ['Indonesia Menggugat', 'Soekarno', 'Landraad Bandung', 'PNI', 'Pledoi'],
    sources: [
      { title: 'Indonesia Menggugat', url: 'https://id.wikipedia.org/wiki/Indonesia_Menggugat', sourceName: 'Wikipedia' },
      { title: 'Kala Bung Karno Menggugat di Bandung', url: 'https://historia.id/politik/articles/kala-bung-karno-menggugat-di-bandung-vX31d', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'japanese-invasion',
    year: 1942,
    period: 'colonial',
    category: 'war',
    region: 'Nasional',
    title: 'Invasi Jepang & Kapitulasi Tanpa Syarat Kalijati (8 Maret 1942)',
    subtitle: 'Runtuhnya Hindia Belanda Menyerah kepada Letjen Hitoshi Imamura',
    summary: 'Tentara Kekaisaran Jepang (Dai Nippon) menaklukkan Hindia Belanda. Pada 8 Maret 1942 di Lapangan Kalijati Subang, Letnan Jenderal Ter Poorten menyerah tanpa syarat kepada tentara Jepang.',
    impact: 'Tumbangnya kekuasaan kolonial Belanda selama 3 abad; dimulainya masa pendudukan militer Jepang, kerja paksa romusha, namun membuka jalan pembentukan laskar kemerdekaan (PETA).',
    tags: ['Pendudukan Jepang', 'Kalijati', 'PETA', 'Perang Dunia II', 'Romusha'],
    sources: [
      { title: 'Kapitulasi Kalijati', url: 'https://id.wikipedia.org/wiki/Kapitulasi_Kalijati', sourceName: 'Wikipedia' },
      { title: 'Arsip Pendudukan Jepang di Indonesia', url: 'https://anri.go.id/profil/sejarah', sourceName: 'ANRI' }
    ]
  },

  // ==========================================
  // 5. ERA PROKLAMASI, REVOLUSI & KEDAULATAN REPUBLIK (1945 M - KINI)
  // ==========================================
  {
    id: 'pancasila-birth-1945',
    year: 1945,
    period: 'independence',
    category: 'figure',
    region: 'Jawa',
    title: 'Sidang BPUPKI & Pidato Lahirnya Pancasila (1 Juni 1945)',
    subtitle: 'Soekarno Merumuskan Lima Dasar Falsafah Bangsa di Gedung Chuo Sangi-In',
    summary: 'Dalam sidang BPUPKI di Jakarta, Ir. Soekarno menyampaikan pidato monumental tanpa teks merumuskan falsafah dasar negara merdeka yang diberi nama Pancasila.',
    impact: 'Fondasi ideologi kenegaraan dan pandangan hidup abadi bangsa Indonesia; diperingati sebagai Hari Lahir Pancasila.',
    tags: ['Pancasila', 'BPUPKI', 'Soekarno', '1 Juni 1945', 'Dasar Negara'],
    sources: [
      { title: 'Hari Lahir Pancasila', url: 'https://id.wikipedia.org/wiki/Hari_Lahir_Pancasila', sourceName: 'Wikipedia' },
      { title: 'Arsip Risalah Sidang BPUPKI', url: 'https://anri.go.id', sourceName: 'ANRI' }
    ]
  },
  {
    id: 'rengasdengklok-incident',
    year: 1945,
    period: 'independence',
    category: 'independence',
    region: 'Jawa',
    title: 'Peristiwa Rengasdengklok: Tekad Pemuda Mempercepat Proklamasi',
    subtitle: '16 Agustus 1945: Menjauhkan Pemimpin Bangsa dari Intervensi Jepang',
    summary: 'Para pemuda (Chaerul Saleh, Sukarni, Wikana) membawa Soekarno dan Hatta ke Rengasdengklok, Karawang, mendesak kemerdekaan diproklamasikan dengan kekuatan sendiri tanpa menunggu janji Jepang.',
    impact: 'Tercapainya konsensus bulat untuk memproklamasikan kemerdekaan keesokan harinya di Jakarta.',
    tags: ['Rengasdengklok', 'Kaum Pemuda', 'Sukarni', 'Chaerul Saleh', 'Soekarno-Hatta'],
    sources: [
      { title: 'Peristiwa Rengasdengklok', url: 'https://id.wikipedia.org/wiki/Peristiwa_Rengasdengklok', sourceName: 'Wikipedia' },
      { title: 'Drama Penculikan di Rengasdengklok', url: 'https://historia.id/politik/articles/drama-penculikan-di-rengasdengklok-v2mda', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'indonesia-proclamation',
    year: 1945,
    period: 'independence',
    category: 'independence',
    region: 'Nasional',
    title: 'Proklamasi Kemerdekaan Republik Indonesia',
    subtitle: '17 Agustus 1945 · Lahirnya Negara Kesatuan Republik Indonesia',
    summary: 'Ir. Soekarno didampingi Drs. Mohammad Hatta membacakan naskah Proklamasi Kemerdekaan di Jalan Pegangsaan Timur 56, Jakarta, diiringi pengibaran Sang Saka Merah Putih jahitan Ibu Fatmawati.',
    impact: 'Lahirnya Negara Kesatuan Republik Indonesia (NKRI) sebagai satu bangsa berdaulat penuh. Seluruh kepulauan Nusantara bersatu di bawah Sang Saka Merah Putih; naskah asli tulisan tangan Bung Karno disimpan di Depot Khusus ANRI.',
    tags: ['Proklamasi 1945', 'Kemerdekaan', 'Soekarno-Hatta', 'NKRI', 'Fatmawati', 'Pegangsaan Timur'],
    sources: [
      { title: 'Proklamasi Kemerdekaan Indonesia', url: 'https://id.wikipedia.org/wiki/Proklamasi_Kemerdekaan_Indonesia', sourceName: 'Wikipedia' },
      { title: 'Naskah Asli Teks Proklamasi di ANRI', url: 'https://anri.go.id', sourceName: 'Arsip Nasional RI' },
      { title: 'Sekretariat Kabinet: Preservasi Naskah Proklamasi', url: 'https://setkab.go.id', sourceName: 'Setkab RI' }
    ]
  },
  {
    id: 'ppki-constitution-1945',
    year: 1945,
    period: 'independence',
    category: 'independence',
    region: 'Nasional',
    title: 'Sidang PPKI: Penetapan UUD 1945 & Pengangkatan Presiden-Wapres',
    subtitle: '18 Agustus 1945: Pembentukan Struktur Konstitusional Pertama NKRI',
    summary: 'PPKI mengesahkan Undang-Undang Dasar 1945 serta memilih secara aklamasi Ir. Soekarno sebagai Presiden dan Drs. Mohammad Hatta sebagai Wakil Presiden RI pertama.',
    impact: 'Berdirinya tatanan hukum tata negara dan pemerintahan resmi Republik Indonesia.',
    tags: ['PPKI', 'UUD 1945', 'Presiden Pertama', 'Tata Negara', '18 Agustus 1945'],
    sources: [
      { title: 'Panitia Persiapan Kemerdekaan Indonesia', url: 'https://id.wikipedia.org/wiki/Panitia_Persiapan_Kemerdekaan_Indonesia', sourceName: 'Wikipedia' },
      { title: 'JDIH Mahkamah Konstitusi: Naskah UUD 1945', url: 'https://mkri.go.id', sourceName: 'Mahkamah Konstitusi' }
    ]
  },
  {
    id: 'surabaya-battle-1945',
    year: 1945,
    period: 'independence',
    category: 'war',
    region: 'Jawa',
    title: 'Pertempuran Surabaya: Puncak Heroisme Rakyat (Hari Pahlawan)',
    subtitle: '10 November 1945: Gelora Arek-Arek Suroboyo dan Pidato Radio Bung Tomo',
    summary: 'Menolak ultimatum Sekutu setelah tewasnya Brigjen Mallaby, arek-arek Surabaya dan laskar TKR bertempur habis-habisan melawan gempuran darat, laut, dan udara tentara Inggris.',
    impact: 'Pertempuran terdahsyat Revolusi Indonesia yang menyadarkan dunia internasional akan tekad bulat kemerdekaan rakyat Indonesia; diperingati sebagai Hari Pahlawan.',
    tags: ['Pertempuran Surabaya', 'Hari Pahlawan', 'Bung Tomo', 'Mallaby', '10 November 1945'],
    sources: [
      { title: 'Pertempuran Surabaya', url: 'https://id.wikipedia.org/wiki/Pertempuran_Surabaya', sourceName: 'Wikipedia' },
      { title: 'Mengapa Surabaya Membara', url: 'https://historia.id/militer/articles/mengapa-surabaya-membara-vJQw0', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'bandung-lautan-api-1946',
    year: 1946,
    period: 'independence',
    category: 'war',
    region: 'Jawa',
    title: 'Peristiwa Bandung Lautan Api (24 Maret 1946)',
    subtitle: 'Pembumihangusan Kota oleh Pejuang dan Gugurnya Mohammad Toha',
    summary: 'Menolak menyerahkan kota kepada Sekutu dan NICA, 200.000 warga membakar rumah dan gedung di Bandung Selatan sebelum mundur. Mohammad Toha meledakkan gudang mesiu musuh di Dayeuhkolot.',
    impact: 'Strategi bumi hangus legendaris yang mengilhami lagu perjuangan nasional Halo-Halo Bandung ciptaan Ismail Marzuki.',
    tags: ['Bandung Lautan Api', 'Mohammad Toha', 'Halo-Halo Bandung', 'Revolusi Kemerdekaan'],
    sources: [
      { title: 'Bandung Lautan Api', url: 'https://id.wikipedia.org/wiki/Bandung_Lautan_Api', sourceName: 'Wikipedia' },
      { title: 'Mengapa Bandung Dibakar', url: 'https://historia.id/militer/articles/mengapa-bandung-dibakar-v2b5K', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'agresi-militer-1-1947',
    year: 1947,
    period: 'independence',
    category: 'war',
    region: 'Nasional',
    title: 'Agresi Militer Belanda I (Operatie Product)',
    subtitle: 'Serangan Kilat Kolonial Membawa Indonesia ke Meja Sidang PBB',
    summary: 'Belanda melanggar Perjanjian Linggarjati dengan mengerahkan operasi militer menyerbu kota-kota dan perkebunan vital di Jawa dan Sumatera pada 21 Juli 1947.',
    impact: 'Mendorong Dewan Keamanan PBB mengeluarkan resolusi gencatan senjata dan membentuk Komisi Tiga Negara (KTN).',
    tags: ['Agresi Militer Belanda I', 'Operatie Product', 'Linggarjati', 'Dewan Keamanan PBB'],
    sources: [
      { title: 'Agresi Militer Belanda I', url: 'https://id.wikipedia.org/wiki/Agresi_Militer_Belanda_I', sourceName: 'Wikipedia' },
      { title: 'Arsip Militer Belanda Operatie Product', url: 'https://www.nationaalarchief.nl', sourceName: 'Nationaal Archief' }
    ]
  },
  {
    id: 'pdri-agresi-2-1948',
    year: 1948,
    period: 'independence',
    category: 'war',
    region: 'Sumatera',
    title: 'Agresi Militer Belanda II & Berdirinya PDRI Bukittinggi (19 Desember 1948)',
    subtitle: 'Sjafruddin Prawiranegara Menjaga Nyala Republik dari Rimba Sumatera',
    summary: 'Belanda menduduki ibu kota Yogyakarta dan menawan Soekarno-Hatta. Sebelum ditawan, mandat kawat diserahkan kepada Sjafruddin Prawiranegara di Bukittinggi untuk mendirikan Pemerintah Darurat Republik Indonesia (PDRI).',
    impact: 'Menyelamatkan eksistensi kedaulatan Republik Indonesia dari klaim Belanda di mata dunia internasional.',
    tags: ['Agresi Militer Belanda II', 'PDRI', 'Sjafruddin Prawiranegara', 'Bukittinggi', 'Operatie Kraai'],
    sources: [
      { title: 'Pemerintah Darurat Republik Indonesia', url: 'https://id.wikipedia.org/wiki/Pemerintah_Darurat_Republik_Indonesia', sourceName: 'Wikipedia' },
      { title: 'Penyelamat Republik dari Pedalaman Sumatra', url: 'https://historia.id/politik/articles/penyelamat-republik-dari-pedalaman-sumatra-Dr29q', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'serangan-umum-1-maret',
    year: 1949,
    period: 'independence',
    category: 'war',
    region: 'Jawa',
    title: 'Serangan Umum 1 Maret 1949 di Yogyakarta',
    subtitle: 'Enam Jam TNI Menguasai Ibu Kota Mengguncang Diplomasi PBB',
    summary: 'TNI pimpinan Letkol Soeharto di bawah prakarsa Sultan Hamengkubuwana IX dan Jenderal Soedirman menyerbu dan menduduki kota Yogyakarta selama enam jam di siang bolong.',
    impact: 'Mematahkan kebohongan propaganda Belanda di PBB bahwa Republik sudah musnah, membuka jalan bagi perundingan Roem-Roijen dan KMB.',
    tags: ['Serangan Umum 1 Maret', 'Yogyakarta', 'Sultan Hamengkubuwana IX', 'Jenderal Soedirman'],
    sources: [
      { title: 'Serangan Umum 1 Maret 1949', url: 'https://id.wikipedia.org/wiki/Serangan_Umum_1_Maret_1949', sourceName: 'Wikipedia' },
      { title: 'Arsip Serangan Umum 1 Maret (ANRI)', url: 'https://anri.go.id', sourceName: 'ANRI' }
    ]
  },
  {
    id: 'kmb-sovereignty',
    year: 1949,
    period: 'independence',
    category: 'diplomacy',
    region: 'Nasional',
    title: 'Konferensi Meja Bundar: Pengakuan Kedaulatan',
    subtitle: '27 Desember 1949 di Den Haag: Kerajaan Belanda Mengakui Kedaulatan Indonesia',
    summary: 'Setelah 4 tahun perjuangan bersenjata dan diplomasi (Agresi Militer Belanda I & II), Kerajaan Belanda secara resmi menandatangani piagam penyerahan dan pengakuan kedaulatan penuh Republik Indonesia di Den Haag.',
    impact: 'Pengakuan de jure internasional; pada tahun 1950 negara federal RIS dibubarkan dan kembali utuh menjadi Negara Kesatuan Republik Indonesia (NKRI).',
    tags: ['KMB', 'Pengakuan Kedaulatan', 'NKRI 1950', 'Revolusi', 'Den Haag'],
    sources: [
      { title: 'Konferensi Meja Bundar', url: 'https://id.wikipedia.org/wiki/Konferensi_Meja_Bundar', sourceName: 'Wikipedia' },
      { title: 'Arsip Resmi KMB Den Haag 1949', url: 'https://www.nationaalarchief.nl/onderzoeken/archief/2.10.36.04', sourceName: 'Nationaal Archief' },
      { title: 'Arsip KMB di ANRI', url: 'https://anri.go.id', sourceName: 'ANRI' }
    ]
  },
  {
    id: 'kembali-ke-nkri-1950',
    year: 1950,
    period: 'independence',
    category: 'independence',
    region: 'Nasional',
    title: 'Pembubaran RIS & Proklamasi Kembali ke NKRI (17 Agustus 1950)',
    subtitle: 'Mosi Integral Mohammad Natsir Mengembalikan Negara Kesatuan',
    summary: 'Melalui Mosi Integral yang dipelopori Mohammad Natsir di parlemen dan dukungan rakyat, sistem federal Republik Indonesia Serikat resmi dibubarkan dan kembali menjadi Negara Kesatuan Republik Indonesia (NKRI) berlandaskan UUDS 1950.',
    impact: 'Menggagalkan upaya kolonial memecah-belah bangsa melalui negara-negara bagian boneka; memperkuat integritas persatuan nasional dari Sabang sampai perbatasan timur.',
    tags: ['Kembali ke NKRI', 'Mosi Integral Natsir', 'Pembubaran RIS', 'UUDS 1950', '17 Agustus 1950'],
    sources: [
      { title: 'Republik Indonesia Serikat', url: 'https://id.wikipedia.org/wiki/Republik_Indonesia_Serikat', sourceName: 'Wikipedia' },
      { title: 'Naskah Resmi UUDS 1950 (JDIH Kemenkeu)', url: 'https://www.jdih.kemenkeu.go.id/api/download/fullText/1950/UUDSTAHUN~1950UUDS.HTM', sourceName: 'JDIH Kemenkeu' }
    ]
  },
  {
    id: 'kaa-bandung-1955',
    year: 1955,
    period: 'independence',
    category: 'diplomacy',
    region: 'Jawa',
    title: 'Konferensi Asia–Afrika (KAA) di Bandung: Lahirnya Dasasila Bandung',
    subtitle: 'Prakarsa Bersejarah 29 Negara Asia-Afrika di Gedung Merdeka',
    summary: 'Indonesia menjadi tuan rumah Konferensi Tingkat Tinggi Asia–Afrika di Bandung yang dihadiri para pemimpin 29 negara (Soekarno, Zhou Enlai, Jawaharlal Nehru, Gamal Abdel Nasser).',
    impact: 'Melahirkan Dasasila Bandung yang menginspirasi gelombang dekolonisasi kemerdekaan bangsa-bangsa di benua Afrika dan membentuk Gerakan Non-Blok; arsip KAA diakui UNESCO Memory of the World.',
    tags: ['Konferensi Asia-Afrika', 'KAA Bandung', 'Dasasila Bandung', 'Gerakan Non-Blok', 'UNESCO'],
    sources: [
      { title: 'Konferensi Tingkat Tinggi Asia-Afrika 1955', url: 'https://id.wikipedia.org/wiki/Konferensi_Tingkat_Tinggi_Asia%E2%80%93Afrika_1955', sourceName: 'Wikipedia' },
      { title: 'Arsip KAA UNESCO Memory of the World', url: 'https://en.unesco.org/programme/mow', sourceName: 'UNESCO' },
      { title: 'Museum Konferensi Asia Afrika', url: 'https://kebudayaan.kemdikbud.go.id', sourceName: 'Kemdikbud' }
    ]
  },
  {
    id: 'deklarasi-djuanda-1957',
    year: 1957,
    period: 'independence',
    category: 'diplomacy',
    region: 'Nasional',
    title: 'Deklarasi Djuanda: Konsepsi Geopolitik Negara Kepulauan (Wawasan Nusantara)',
    subtitle: '13 Desember 1957: Laut Bukan Pemisah Melainkan Pemersatu Nusa',
    summary: 'Perdana Menteri Djuanda Kartawidjaja mendeklarasikan bahwa batas laut teritorial Indonesia ditarik lurus dari titik-titik terluar kepulauan, menghapus celah laut internasional di antara pulau-pulau Nusantara warisan ordonansi Belanda 1939.',
    impact: 'Melipatgandakan wilayah kedaulatan laut Republik Indonesia tanpa letusan senjata dan berhasil diperjuangkan hingga diakui hukum laut internasional PBB (UNCLOS 1982); diperingati sebagai Hari Nusantara.',
    tags: ['Deklarasi Djuanda', 'Wawasan Nusantara', 'Negara Kepulauan', 'UNCLOS', 'Hari Nusantara'],
    sources: [
      { title: 'Deklarasi Djuanda', url: 'https://id.wikipedia.org/wiki/Deklarasi_Djuanda', sourceName: 'Wikipedia' },
      { title: 'Deklarasi Djuanda Menyatukan Laut Indonesia', url: 'https://historia.id/politik/articles/deklarasi-djuanda-menyatukan-laut-indonesia-P14zY', sourceName: 'Historia.id' }
    ]
  },
  {
    id: 'irian-barat-integration',
    year: 1963,
    period: 'independence',
    category: 'diplomacy',
    region: 'Papua',
    title: 'Integrasi Irian Barat ke Pangkuan Ibu Pertiwi',
    subtitle: 'Komando Trikora & Penyerahan Administrasi dari UNTEA ke Republik Indonesia',
    summary: 'Melalui Operasi Tri Komando Rakyat (Trikora), Perjanjian New York 1962, dan masa transisi pemerintahan sementara PBB (UNTEA), wilayah Papua / Irian Barat resmi kembali berintegrasi penuh ke dalam kedaulatan NKRI pada 1 Mei 1963.',
    impact: 'Tuntasnya penyatuan kedaulatan wilayah Indonesia dari Sabang di ujung barat sampai Merauke di ujung timur kepulauan Nusantara.',
    tags: ['Irian Barat', 'Papua', 'Trikora', 'UNTEA', 'Perjanjian New York', 'Sabang Sampai Merauke'],
    sources: [
      { title: 'Operasi Trikora', url: 'https://id.wikipedia.org/wiki/Operasi_Trikora', sourceName: 'Wikipedia' },
      { title: 'UNSF / UNTEA West New Guinea Records', url: 'https://police.un.org/sites/default/files/past/unsfbackgr.html', sourceName: 'United Nations' },
      { title: 'Arsip Integrasi Irian Barat (ANRI)', url: 'https://anri.go.id', sourceName: 'ANRI' }
    ]
  },
  {
    id: 'tsunami-aceh-2004',
    year: 2004,
    period: 'independence',
    category: 'disaster',
    region: 'Sumatera',
    title: 'Gempa Megathrust & Tsunami Dahsyat Samudra Hindia (Aceh 2004)',
    subtitle: '26 Desember 2004: Bencana Gempa M9.1–9.3 & Tsunami Terbesar Abad ke-21',
    summary: 'Gempa megathrust bawah laut dahsyat berkekuatan magnitudo 9.1–9.3 di lepas pantai barat Aceh membangkitkan tsunami raksasa hingga setinggi 30 meter yang meluluhlantakkan Banda Aceh, Meulaboh, serta pesisir 14 negara, merenggut lebih dari 227.000 korban jiwa.',
    impact: 'Bencana gempa dan tsunami paling mematikan dalam sejarah modern; memicu solidaritas kemanusiaan global terbesar, mempercepat perjanjian damai GAM-RI di Helsinki 2005, serta melahirkan Badan Nasional Penanggulangan Bencana (BNPB) dan sistem peringatan dini InaTEWS.',
    tags: ['Tsunami Aceh', 'Gempa Megathrust', '26 Desember 2004', 'Banda Aceh', 'BNPB', 'Bencana Alam Modern'],
    sources: [
      { title: 'Gempa Bumi dan Tsunami Samudra Hindia 2004', url: 'https://id.wikipedia.org/wiki/Gempa_bumi_dan_tsunami_Samudra_Hindia_2004', sourceName: 'Wikipedia' },
      { title: 'Badan Nasional Penanggulangan Bencana (BNPB)', url: 'https://bnpb.go.id', sourceName: 'BNPB' },
      { title: 'Mengenang Tsunami Aceh 2004', url: 'https://historia.id/bencana/articles/mengenang-tsunami-aceh-2004-vJ9p1', sourceName: 'Historia.id' }
    ]
  }
];
