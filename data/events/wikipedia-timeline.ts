import type { TimelineEvent } from '../../lib/events';

/** Curated, paraphrased additions based on the Indonesian Wikipedia chronology export. */
const SEED_EVENTS: TimelineEvent[] = [
  {
    id: 'batavia-post-office-1746',
    year: 1746,
    title: 'Kantor pos pertama di Batavia mulai beroperasi',
    summary:
      'Kantor pos di Batavia didirikan pada masa Gubernur Jenderal Gustaaf Willem van Imhoff. Peristiwa ini menjadi bagian dari perkembangan layanan pos pada masa kolonial.',
    impact: 'Membentuk salah satu infrastruktur komunikasi resmi di pusat pemerintahan VOC.',
    category: 'colonial',
    region: 'Jawa',
    sources: [
      {
        title: 'Sejarah PT Pos Indonesia: Dari Zaman VOC Hingga Jadi BUMN',
        url: 'https://tirto.id/sejarah-pt-pos-indonesia-dari-zaman-voc-hingga-jadi-bumn-dfSA',
        sourceName: 'Tirto.id',
      },
    ],
    period: 'colonial',
    date: '1746-08-26',
    dateNote:
      'Tanggal pendirian kantor pos sebagaimana dicatat dalam kronologi; periksa sumber untuk membedakan tanggal keputusan dan mulai beroperasi.',
    tags: ['Infrastruktur', 'Kolonialisme', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'first-railway-service-1867',
    year: 1867,
    title: 'Layanan kereta api pertama di Hindia Belanda diresmikan',
    summary:
      'Nederlandsche Indische Spoorweg Maatschappij meresmikan layanan kereta api di lintas Semarang–Tanggung. Pembangunannya merupakan bagian dari perkembangan jaringan transportasi kolonial di Jawa.',
    impact:
      'Membuka layanan kereta api untuk penumpang dan barang di Jawa serta mengawali pembangunan jaringan rel yang lebih luas.',
    category: 'colonial',
    region: 'Jawa',
    sources: [
      {
        title: 'Jejak Stasiun Pertama di Indonesia',
        url: 'https://tirto.id/jejak-stasiun-pertama-di-indonesia-ctRE',
        sourceName: 'Tirto.id',
      },
    ],
    period: 'colonial',
    date: '1867-08-10',
    tags: ['Transportasi', 'Infrastruktur', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'sin-po-first-issue-1910',
    year: 1910,
    title: 'Surat kabar Sin Po terbit untuk pertama kali',
    summary:
      'Surat kabar berbahasa Melayu Sin Po mulai terbit di Batavia. Dalam perkembangan berikutnya, surat kabar ini ikut memopulerkan penggunaan nama Indonesia dalam wacana kebangsaan.',
    impact:
      'Menjadi salah satu media yang merekam perkembangan pers dan nasionalisme pada awal abad ke-20.',
    category: 'culture',
    region: 'Jawa',
    sources: [
      {
        title: 'Sejarah Sin Po, Koran Tionghoa yang Menyuarakan Indonesia Merdeka',
        url: 'https://tirto.id/sejarah-sin-po-koran-tionghoa-yang-menyuarakan-indonesia-merdeka-c8Vq',
        sourceName: 'Tirto.id',
      },
    ],
    period: 'colonial',
    date: '1910-10-01',
    tags: ['Pers', 'Nasionalisme', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'railway-workers-strike-1923',
    year: 1923,
    title: 'Mogok massal buruh kereta api di Jawa',
    summary:
      'Buruh kereta api di sejumlah wilayah Jawa melakukan aksi mogok pada Mei 1923. Aksi tersebut berhadapan dengan pemerintah kolonial dan perusahaan perkeretaapian.',
    impact:
      'Menunjukkan berkembangnya pengorganisasian buruh dan gerakan mogok pada masa kolonial.',
    category: 'politics',
    region: 'Jawa',
    sources: [
      {
        title: 'Mei 1923: Aksi Mogok Buruh Kereta Api yang Bikin Sewot Pemerintah',
        url: 'https://tirto.id/mei-1923-aksi-mogok-buruh-kereta-api-yang-bikin-sewot-pemerintah-cJAV',
        sourceName: 'Tirto.id',
      },
    ],
    period: 'colonial',
    dateNote:
      'Sumber kronologi menyebut Mei 1923; tanggal mulai dan berakhirnya aksi perlu diperiksa pada sumber detail.',
    tags: ['Buruh', 'Gerakan sosial', 'Rekaman sejarah'],
    evidence: 'approximate',
    researchedAt: '2026-11-11',
  },
  {
    id: 'first-youth-congress-1926',
    year: 1926,
    title: 'Kongres Pemuda I diselenggarakan di Batavia',
    summary:
      'Perwakilan organisasi pemuda mengadakan Kongres Pemuda I di Batavia. Kongres berakhir tanpa kesepakatan bersama, tetapi menjadi bagian dari rangkaian pertemuan yang mendahului Sumpah Pemuda.',
    impact: 'Membuka ruang pertemuan lintas organisasi pemuda dalam gerakan kebangsaan.',
    category: 'politics',
    region: 'Jawa',
    sources: [
      {
        title: 'Makna Sumpah Pemuda: Sejarah, Isi, Arti Tanggal 28 Oktober 1928',
        url: 'https://tirto.id/isi-makna-sejarah-hari-sumpah-pemuda-28-oktober-1928-eku2',
        sourceName: 'Tirto.id',
      },
    ],
    period: 'colonial',
    date: '1926-04-30',
    dateNote: 'Kongres berlangsung 30 April–2 Mei 1926; tanggal pada peta menandai hari pembukaan.',
    tags: ['Gerakan pemuda', 'Nasionalisme', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'pni-established-1927',
    year: 1927,
    title: 'Partai Nasional Indonesia didirikan',
    summary:
      'Partai Nasional Indonesia didirikan di Bandung pada masa pemerintahan kolonial. Organisasi ini menjadi salah satu wadah penting pergerakan nasional.',
    impact: 'Mengonsolidasikan gerakan politik nasionalis yang menuntut kemerdekaan Indonesia.',
    category: 'politics',
    region: 'Jawa',
    sources: [
      {
        title: 'Partai Nasional Indonesia',
        url: 'https://id.wikipedia.org/wiki/Partai_Nasional_Indonesia',
        sourceName: 'Wikipedia bahasa Indonesia',
      },
    ],
    period: 'colonial',
    date: '1927-07-04',
    tags: ['Nasionalisme', 'Organisasi politik', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'arab-youth-pledge-1934',
    year: 1934,
    title: 'Pemuda keturunan Arab menyatakan Indonesia sebagai tanah air',
    summary:
      'Pertemuan pemuda keturunan Arab di Pekojan, Batavia, menyatakan Indonesia sebagai tanah air mereka. Peristiwa ini dikenal sebagai Sumpah Pemuda Keturunan Arab.',
    impact: 'Merekam perluasan gagasan kebangsaan Indonesia di tengah komunitas yang beragam.',
    category: 'culture',
    region: 'Jawa',
    sources: [
      {
        title: 'Sumpah Pemuda keturunan Arab 1934: Puncak pencarian identitas',
        url: 'https://www.bbc.com/indonesia/berita_indonesia/2015/10/151016_indonesia_arabindonesia_sumpah',
        sourceName: 'BBC News Indonesia',
      },
    ],
    period: 'colonial',
    date: '1934-10-04',
    dateNote: 'Pertemuan berlangsung 4–5 Oktober 1934; tanggal pada peta menandai hari pertama.',
    tags: ['Gerakan pemuda', 'Nasionalisme', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'soetardjo-petition-1936',
    year: 1936,
    title: 'Petisi Soetardjo diajukan di Volksraad',
    summary:
      'Soetardjo Kartohadikoesoemo mengajukan usulan agar wakil Belanda dan bumiputra membahas otonomi Hindia Belanda dalam kerangka Kerajaan Belanda. Petisi itu kemudian dibahas dalam proses politik kolonial.',
    impact:
      'Menjadi salah satu upaya politik untuk memperluas pemerintahan sendiri di Hindia Belanda.',
    category: 'politics',
    region: 'Nasional',
    sources: [
      {
        title: 'Soetardjo Kartohadikoesoemo, Pengusul Petisi Otonomi Hindia Belanda',
        url: 'https://tirto.id/soetardjo-kartohadikoesoemo-pengusul-petisi-otonomi-hindia-belanda-cM9H',
        sourceName: 'Tirto.id',
      },
    ],
    period: 'colonial',
    date: '1936-07-15',
    tags: ['Politik kolonial', 'Otonomi', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'peta-formed-1943',
    year: 1943,
    title: 'Pembela Tanah Air dibentuk pada masa pendudukan Jepang',
    summary:
      'Tentara sukarela Pembela Tanah Air (PETA) dibentuk oleh pemerintahan pendudukan Jepang. Organisasi militer ini melibatkan penduduk setempat dan kemudian menjadi bagian dari pengalaman militer sejumlah tokoh Indonesia.',
    impact:
      'Memberi sebagian kader Indonesia pengalaman organisasi dan kemiliteran menjelang revolusi kemerdekaan.',
    category: 'colonial',
    region: 'Nasional',
    sources: [
      {
        title: 'Terbentuknya PETA & Cara Membela Tanah Air ala Gatot Mangkoepradja',
        url: 'https://tirto.id/terbentuknya-peta-cara-membela-tanah-air-ala-gatot-mangkoepradja-cxGL',
        sourceName: 'Tirto.id',
      },
    ],
    period: 'colonial',
    date: '1943-10-03',
    tags: ['Pendudukan Jepang', 'Militer', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'capital-moved-yogyakarta-1946',
    year: 1946,
    title: 'Pemerintah Republik memindahkan pusat pemerintahan ke Yogyakarta',
    summary:
      'Presiden Soekarno dan sejumlah pejabat Republik berangkat dari Jakarta menuju Yogyakarta pada Januari 1946. Yogyakarta kemudian menjadi pusat pemerintahan Republik selama revolusi.',
    impact:
      'Menjaga keberlangsungan pemerintahan Republik di tengah ancaman militer dan politik setelah proklamasi.',
    category: 'politics',
    region: 'Jawa',
    sources: [
      {
        title: 'Sejarah Ibu Kota RI Pindah dari Jakarta ke Yogyakarta-Bukittinggi',
        url: 'https://tirto.id/sejarah-pindahnya-ibu-kota-ri-dari-jakarta-ke-yogyakarta-pada-1946-efr4',
        sourceName: 'Tirto.id',
      },
    ],
    period: 'independence',
    date: '1946-01-03',
    dateNote: 'Rombongan berangkat pada 3 Januari dan tiba di Yogyakarta pada 4 Januari 1946.',
    tags: ['Revolusi Nasional', 'Pemerintahan', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'tempo-banned-1994',
    year: 1994,
    title: 'Pemerintah Orde Baru membredel majalah Tempo',
    summary:
      'Pemerintah mencabut izin terbit Tempo bersama sejumlah media lain setelah pemberitaan yang mengkritik kebijakan pemerintah. Peristiwa ini menjadi salah satu contoh pembatasan pers pada masa Orde Baru.',
    impact:
      'Menghentikan penerbitan media untuk sementara dan memicu perdebatan mengenai kebebasan pers.',
    category: 'politics',
    region: 'Nasional',
    sources: [
      {
        title: 'Peringatan 25 Tahun Pembredelan Tempo',
        url: 'https://web.archive.org/web/20191226072446/https://investigasi.tempo.co/25-tahun-pembredelan/index.html',
        sourceName: 'Tempo.co / Internet Archive',
      },
    ],
    period: 'republic',
    dateNote:
      'Sumber kronologi menandai tahun 1994; tanggal pencabutan izin perlu dipastikan dari arsip keputusan.',
    tags: ['Pers', 'Orde Baru', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'n250-first-flight-1995',
    year: 1995,
    title: 'Pesawat N-250 melakukan penerbangan perdana',
    summary:
      'Pesawat turboprop N-250 rancangan Industri Pesawat Terbang Nusantara melakukan penerbangan pertamanya. Program tersebut dipimpin oleh insinyur dan mantan presiden B. J. Habibie.',
    impact: 'Menjadi tonggak ambisi pengembangan industri dirgantara nasional.',
    category: 'culture',
    region: 'Jawa',
    sources: [
      {
        title: 'Mengintip N250, Pesawat Pertama Buatan Habibie',
        url: 'https://www.medcom.id/nasional/daerah/lKYB373N-mengintip-n250-pesawat-pertama-buatan-habibie',
        sourceName: 'Medcom.id',
      },
    ],
    period: 'republic',
    dateNote:
      'Sumber kronologi menyebut tahun 1995; tanggal penerbangan tidak disimpulkan dari tanggal terbit artikel.',
    tags: ['Teknologi', 'Dirgantara', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'july-27-incident-1996',
    year: 1996,
    title: 'Kantor DPP PDI di Jakarta diserang',
    summary:
      'Penyerangan terhadap kantor Dewan Pimpinan Pusat Partai Demokrasi Indonesia di Jakarta pada 27 Juli dikenal sebagai Peristiwa 27 Juli atau Kudatuli.',
    impact:
      'Memperuncing konflik politik menjelang akhir pemerintahan Orde Baru dan mendorong demonstrasi serta penindakan terhadap aktivis.',
    category: 'violence',
    region: 'Jawa',
    sources: [
      {
        title: 'Peristiwa 27 Juli',
        url: 'https://id.wikipedia.org/wiki/Peristiwa_27_Juli',
        sourceName: 'Wikipedia bahasa Indonesia',
      },
    ],
    period: 'republic',
    date: '1996-07-27',
    tags: ['Orde Baru', 'Konflik politik', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'sampit-communal-violence-2001',
    year: 2001,
    title: 'Konflik komunal terjadi di Sampit dan sekitarnya',
    summary:
      'Kekerasan komunal pecah di Sampit dan sejumlah wilayah Kalimantan Tengah pada Februari 2001. Peristiwa ini melibatkan komunitas Dayak dan Madura dan menyebabkan korban jiwa serta pengungsian.',
    impact:
      'Memicu krisis kemanusiaan dan perpindahan penduduk; penyebab, kronologi, dan angka korban perlu dibaca dengan memperhatikan perbedaan sumber.',
    category: 'violence',
    region: 'Kalimantan',
    sources: [
      {
        title: 'Konflik Sampit',
        url: 'https://id.wikipedia.org/wiki/Kerusuhan_Sampit',
        sourceName: 'Wikipedia bahasa Indonesia',
      },
    ],
    period: 'republic',
    date: '2001-02-18',
    dateNote:
      'Artikel sumber memberi rentang 18–28 Februari 2001 dan menyebut kekerasan berlanjut dalam skala lebih kecil setelahnya. Asal mula dan angka korban diperdebatkan antar-sumber.',
    tags: ['Konflik komunal', 'Kalimantan', 'Rekaman sejarah'],
    evidence: 'contested',
    researchedAt: '2026-11-11',
  },
  {
    id: 'kpk-established-2003',
    year: 2003,
    title: 'Komisi Pemberantasan Korupsi mulai berdiri',
    summary:
      'Komisi Pemberantasan Korupsi dibentuk berdasarkan Undang-Undang Nomor 30 Tahun 2002 dan mulai menjalankan tugas kelembagaannya pada 2003.',
    impact:
      'Membentuk lembaga negara khusus untuk pencegahan dan penindakan tindak pidana korupsi.',
    category: 'politics',
    region: 'Nasional',
    sources: [
      {
        title: '16 Tahun KPK Mengabdi',
        url: 'https://www.kpk.go.id/id/berita/berita-kpk/1440-16-tahun-kpk-mengabdi',
        sourceName: 'Komisi Pemberantasan Korupsi',
      },
    ],
    period: 'republic',
    date: '2003-12-29',
    tags: ['Lembaga negara', 'Reformasi', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'lapindo-mudflow-2006',
    year: 2006,
    title: 'Semburan lumpur panas terjadi di Sidoarjo',
    summary:
      'Semburan lumpur panas di kawasan Porong, Sidoarjo, dimulai pada Mei 2006 dan berdampak pada permukiman serta infrastruktur di sekitarnya. Perdebatan mengenai penyebab dan tanggung jawab berlangsung lama.',
    impact:
      'Permukiman, lahan, dan jalur transportasi terdampak; ribuan warga harus meninggalkan kawasan yang tergenang.',
    category: 'disaster',
    region: 'Jawa',
    sources: [
      {
        title: 'Lumpur Lapindo',
        url: 'https://id.wikipedia.org/wiki/Lumpur_Lapindo',
        sourceName: 'Wikipedia bahasa Indonesia',
      },
    ],
    period: 'republic',
    date: '2006-05-29',
    dateNote:
      'Tanggal awal semburan menurut kronologi umum; sebab geologis dan kaitan dengan kegiatan pengeboran tetap diperdebatkan.',
    tags: ['Bencana', 'Jawa Timur', 'Rekaman sejarah'],
    evidence: 'contested',
    researchedAt: '2026-11-11',
  },
  {
    id: 'cikeusik-attack-2011',
    year: 2011,
    title: 'Serangan terhadap jemaah Ahmadiyah di Cikeusik',
    summary:
      'Sekelompok orang menyerang jemaah Ahmadiyah di Cikeusik, Kabupaten Pandeglang, pada 6 Februari 2011. Laporan media menyebut tiga orang meninggal dunia.',
    impact:
      'Peristiwa ini menjadi sorotan nasional mengenai kekerasan terhadap kelompok agama minoritas dan perlindungan warga.',
    category: 'violence',
    region: 'Jawa',
    sources: [
      {
        title: 'Ahmadiyah Diserang, Tiga Orang Tewas',
        url: 'https://www.mediaindonesia.com/read/2011/02/07/201475/265/114/Ahmadiyah-Diserang-Tiga-Orang-Tewas',
        sourceName: 'Media Indonesia',
      },
    ],
    period: 'republic',
    date: '2011-02-06',
    tags: ['Kekerasan', 'Kebebasan beragama', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'capital-location-announced-2019',
    year: 2019,
    title: 'Pemerintah mengumumkan lokasi calon ibu kota baru di Kalimantan Timur',
    summary:
      'Presiden Joko Widodo mengumumkan bahwa lokasi calon ibu kota baru berada di Penajam Paser Utara dan sebagian Kutai Kartanegara, Kalimantan Timur.',
    impact:
      'Mengawali proses kebijakan pemindahan ibu kota negara yang kemudian dikembangkan melalui perencanaan dan pembentukan kerangka hukum.',
    category: 'politics',
    region: 'Kalimantan',
    sources: [
      {
        title: 'Resmi! Jokowi Putuskan Ibu Kota RI Pindah ke Kaltim',
        url: 'https://finance.detik.com/properti/d-4681152/resmi-jokowi-putuskan-ibu-kota-ri-pindah-ke-kaltim',
        sourceName: 'detikcom',
      },
    ],
    period: 'republic',
    date: '2019-08-26',
    tags: ['Ibu kota negara', 'Kebijakan publik', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'diponegoro-kris-return-announcement-2020',
    year: 2020,
    title: 'Keris Pangeran Diponegoro ditemukan dalam koleksi museum di Belanda',
    summary:
      'Sebuah keris yang dikaitkan dengan Pangeran Diponegoro ditemukan di Museum Volkenkunde, Leiden. Pemerintah Belanda kemudian mengumumkan rencana pengembaliannya kepada Indonesia.',
    impact:
      'Mendorong pemulangan salah satu benda bersejarah yang dibawa ke Belanda setelah Perang Jawa.',
    category: 'diplomacy',
    region: 'Nasional',
    sources: [
      {
        title: 'Hilang Ratusan Tahun, Keris Diponegoro Ditemukan di Belanda',
        url: 'https://historia.id/kultur/articles/hilang-ratusan-tahun-keris-diponegoro-ditemukan-di-belanda-Pdlkl',
        sourceName: 'Historia.id',
      },
    ],
    period: 'republic',
    date: '2020-03-04',
    dateNote:
      'Tanggal menandai pengumuman pemerintah Belanda tentang pengembalian; artikel Historia yang ditautkan membahas penemuan keris.',
    tags: ['Warisan budaya', 'Diplomasi', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'dutch-king-apology-2020',
    year: 2020,
    title: 'Raja Belanda menyampaikan permintaan maaf atas kekerasan masa lalu',
    summary:
      'Raja Willem-Alexander menyampaikan permintaan maaf kepada Indonesia atas kekerasan yang terjadi pada masa lalu, dalam kunjungan kenegaraan ke Jakarta.',
    impact:
      'Menjadi bagian dari pembahasan publik dan diplomatik mengenai kekerasan pada masa kolonial dan revolusi.',
    category: 'diplomacy',
    region: 'Nasional',
    sources: [
      {
        title: 'Raja Belanda Minta Maaf soal Kekerasan Masa Lalu ke Jokowi',
        url: 'https://www.cnnindonesia.com/nasional/20200310135323-32-482100/raja-belanda-minta-maaf-soal-kekerasan-masa-lalu-ke-jokowi',
        sourceName: 'CNN Indonesia',
      },
    ],
    period: 'republic',
    date: '2020-03-10',
    tags: ['Diplomasi', 'Kolonialisme', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'sinabung-eruption-2020',
    year: 2020,
    title: 'Gunung Sinabung kembali meletus',
    summary:
      'Gunung Sinabung di Kabupaten Karo, Sumatera Utara, mengalami erupsi pada 10 Agustus 2020. Aktivitas gunung tersebut telah berlangsung dalam rangkaian panjang sejak kembali aktif pada 2010.',
    impact:
      'Erupsi menghasilkan kolom abu dan mendorong kewaspadaan serta pembatasan aktivitas di sekitar gunung.',
    category: 'disaster',
    region: 'Sumatera',
    sources: [
      {
        title: 'Kronologi Gunung Sinabung Meletus Hari Ini & Kondisi Setelah Erupsi',
        url: 'https://tirto.id/kronologi-gunung-sinabung-meletus-hari-ini-kondisi-setelah-erupsi-fWY9',
        sourceName: 'Tirto.id',
      },
    ],
    period: 'republic',
    date: '2020-08-10',
    tags: ['Bencana', 'Vulkanologi', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'seroja-floods-2021',
    year: 2021,
    title: 'Siklon Seroja memicu banjir dan longsor di Nusa Tenggara Timur',
    summary:
      'Siklon tropis Seroja memicu hujan ekstrem, banjir, dan longsor di sejumlah wilayah Nusa Tenggara Timur pada April 2021. Bencana tersebut menimbulkan korban jiwa dan kerusakan luas.',
    impact:
      'Menimbulkan keadaan darurat kemanusiaan di sejumlah kabupaten dan memperlihatkan kerentanan wilayah kepulauan terhadap siklon tropis.',
    category: 'disaster',
    region: 'Nusa Tenggara',
    sources: [
      {
        title: 'Banjir dan longsor Nusa Tenggara Timur 2021',
        url: 'https://id.wikipedia.org/wiki/Banjir_dan_longsor_Nusa_Tenggara_Timur_2021',
        sourceName: 'Wikipedia bahasa Indonesia',
      },
      {
        title: 'Siklon Seroja',
        url: 'https://id.wikipedia.org/wiki/Siklon_Seroja',
        sourceName: 'Wikipedia bahasa Indonesia',
      },
    ],
    period: 'republic',
    date: '2021-04-04',
    dateNote:
      'Tanggal menandai awal bencana banjir dan longsor dalam kronologi; dampak berlangsung beberapa hari di banyak kabupaten.',
    tags: ['Bencana', 'Siklon tropis', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
  {
    id: 'kri-nanggala-sinking-2021',
    year: 2021,
    title: 'KRI Nanggala-402 hilang dan kemudian dinyatakan tenggelam',
    summary:
      'Kapal selam KRI Nanggala-402 hilang saat latihan di utara Bali pada 21 April 2021. Tiga hari kemudian TNI Angkatan Laut menyatakan kapal tersebut tenggelam; seluruh 53 awak dinyatakan gugur.',
    impact:
      'Menjadi salah satu kecelakaan paling mematikan dalam sejarah TNI Angkatan Laut dan mendorong evaluasi keselamatan armada kapal selam.',
    category: 'disaster',
    region: 'Bali',
    sources: [
      {
        title: 'Kapal Selam KRI Nanggala-402 Hilang di Utara Bali',
        url: 'https://www.kompas.id/baca/polhuk/2021/04/21/kapal-selam-kri-nanggala-402-hilang/',
        sourceName: 'Kompas.id',
      },
      {
        title: 'Indonesian Navy says missing KRI Nanggala 402 submarine sank',
        url: 'https://www.thejakartapost.com/news/2021/04/24/indonesian-navy-says-missing-kri-nanggala-402-submarine-sank.html',
        sourceName: 'The Jakarta Post',
      },
    ],
    period: 'republic',
    date: '2021-04-21',
    dateNote:
      '21 April adalah tanggal kapal dilaporkan hilang; TNI AL menyatakan kapal tenggelam pada 24 April.',
    tags: ['Kecelakaan', 'TNI Angkatan Laut', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11',
  },
];

export const WIKIPEDIA_TIMELINE_EVENTS: TimelineEvent[] = SEED_EVENTS.map((event) => ({
  ...event,
  sources: [
    ...(event.sources ?? []),
    {
      title: 'Garis waktu sejarah Indonesia',
      url: 'https://id.wikipedia.org/wiki/Garis_waktu_sejarah_Indonesia',
      sourceName: 'Wikipedia bahasa Indonesia',
    },
  ],
}));
