import type { TimelineEvent } from '../../lib/events';
import { WIKIPEDIA_TIMELINE_EVENTS } from './wikipedia-timeline';

/** Curated research batches (83 entries); provenance and caveats: docs/event-catalog.md. */
export const RESEARCHED_EVENTS: TimelineEvent[] = [
  {
    id: 'talang-tuo-sriksetra-684',
    year: 684,
    title: 'Prasasti Talang Tuo mencatat pembuatan taman Sriksetra',
    summary: 'Prasasti Talang Tuo bertarikh 606 Saka mencatat perintah Dapunta Hyang Sri Jayanasa untuk membuat taman Sriksetra. Prasasti beraksara Pallawa dan berbahasa Melayu Kuno ini menjadi bukti tertulis kegiatan Sriwijaya.',
    impact: 'Menyediakan rekaman mengenai penguasa, lingkungan, dan gagasan keagamaan Sriwijaya abad ke-7.',
    category: 'kingdom',
    region: 'Sumatera',
    sources: [
      {
        title: 'Treasures of Sumatra — Prasasti Talang Tuo, inventaris D145',
        url: 'https://repositori.kemendikdasmen.go.id/8221/1/TREASURES%20OF%20SUMATRA.pdf',
        sourceName: 'Museum Nasional / Kemendikbud'
      }
    ],
    period: 'kingdom',
    tags: ['Prasasti dan kerajaan', 'Sejarah tercatat'],
    dateNote: 'Tahun 606 Saka dikonversi menjadi 684 M; tanggal harian tidak diperlukan untuk penempatan pada atlas.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'kota-kapur-inscription-686',
    year: 686,
    title: 'Prasasti Kota Kapur merekam pernyataan kekuasaan Sriwijaya',
    summary: 'Prasasti Kota Kapur di Bangka memuat sumpah kesetiaan kepada penguasa Sriwijaya. Penanggalannya juga dikaitkan dalam teks dengan pengiriman pasukan ke Bhumi Jawa.',
    impact: 'Menjadi bukti tertulis politik Sriwijaya; penyebutan ekspedisi bukan bukti bahwa seluruh Jawa berhasil ditaklukkan.',
    category: 'kingdom',
    region: 'Sumatera',
    sources: [
      {
        title: 'Prasasti Kota Kapur',
        url: 'https://exotic.bangka.go.id/web/2023/01/prasasti-kota-kapur/',
        sourceName: 'Dinas Pariwisata dan Kebudayaan Kabupaten Bangka'
      }
    ],
    period: 'kingdom',
    tags: ['Prasasti dan kerajaan', 'Sejarah tercatat'],
    dateNote: '608 Saka / 686 M. Konversi hari mengikuti pembacaan prasasti pada sumber, bukan tanggal penemuan artefak.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'kalasan-inscription-778',
    year: 778,
    title: 'Prasasti Kalasan merekam pendirian bangunan suci Tara',
    summary: 'Prasasti Kalasan bertarikh 700 Saka mencatat pendirian bangunan suci bagi Tara serta tempat bagi para pendeta Buddha. Keterangan ini dikaitkan dengan tinggalan Candi Kalasan dan Candi Sari.',
    impact: 'Merekam patronase keagamaan dan kegiatan pembangunan pada masa Jawa Kuno.',
    category: 'kingdom',
    region: 'Jawa',
    sources: [
      {
        title: 'Candi Kalasan — inventaris JOGJACAGAR',
        url: 'https://jogjacagar.jogjaprov.go.id/detail/676/candi-kalasan',
        sourceName: 'Dinas Kebudayaan DIY'
      },
      {
        title: 'Revitalisasi Penataan Situs Kalasan di Tahun 2021',
        url: 'https://budaya.jogjaprov.go.id/artikel/detail/Revitalisasi-Penataan-Situs-Kalasan-di-Tahun-2021',
        sourceName: 'Dinas Kebudayaan DIY'
      }
    ],
    period: 'kingdom',
    tags: ['Prasasti dan kerajaan', 'Sejarah tercatat'],
    dateNote: '700 Saka / 778 M; yang bertanggal adalah prasasti, bukan kepastian tanggal selesainya seluruh bangunan yang sekarang terlihat.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'tuhanyaru-inscription-1323',
    year: 1323,
    title: 'Prasasti Tuhanyaru diterbitkan pada masa Jayanagara',
    summary: 'Prasasti Tuhanyaru, juga dikenal sebagai Prasasti Sidoteko, merupakan dokumen Majapahit bertarikh 1323. Pembacaannya dipakai dalam penelitian arkeologi untuk memahami hubungan pemerintahan dan penataan wilayah Majapahit.',
    impact: 'Menambah bukti administrasi kerajaan dari dokumen tertulis, tanpa menganggap uraian simbolisnya sebagai batas peta yang pasti.',
    category: 'kingdom',
    region: 'Jawa',
    sources: [
      {
        title: 'Berkala Arkeologi Volume 40 Nomor 1, Mei 2020',
        url: 'https://repositori.kemendikdasmen.go.id/19361/1/BERKALA%20ARKEOLOGI%20-%20Vol.%2040%20No.%201%20-%20Mei%202020.pdf',
        sourceName: 'Balai Arkeologi / Kemendikbud'
      }
    ],
    period: 'kingdom',
    tags: ['Prasasti dan kerajaan', 'Sejarah tercatat'],
    dateNote: 'Gunakan tahun prasasti 1323; jangan menambahkan tanggal harian tanpa pemeriksaan edisi epigrafi.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'gajah-mada-palapa-oath-1336',
    year: 1336,
    title: 'Sumpah Palapa Gajah Mada dalam tradisi Pararaton',
    summary: 'Ikrar politik Gajah Mada yang dikenal sebagai Sumpah Palapa diceritakan dalam tradisi teks Pararaton dan lazim ditempatkan pada masa Tribhuwana Tunggadewi. Penempatan 1336 mengikuti salah satu kronologi yang banyak dipakai.',
    impact: 'Menjadi rujukan gagasan ekspansi Majapahit; isi ikrar tidak membuktikan bahwa semua daerah yang disebut kemudian berada di bawah kekuasaan langsung.',
    category: 'figure',
    region: 'Jawa',
    sources: [
      {
        title: 'Kata Nusantara, Jawa Sentris?',
        url: 'https://indonesia.go.id/kategori/editorial/4095/kata-nusantara-jawa-sentris',
        sourceName: 'Portal Informasi Indonesia'
      },
      {
        title: 'Peristiwa Penting Perkembangan Indonesia sebagai Negara Maritim',
        url: 'https://maritim.go.id/konten/unggahan/2021/12/Booklet-Maritim-FINISHED.pdf',
        sourceName: 'Kementerian Koordinator Bidang Kemaritiman'
      }
    ],
    period: 'kingdom',
    tags: ['Tokoh', 'Sejarah tercatat'],
    dateNote: 'Tanggal perkiraan/kronologi konvensional: terdapat penempatan 1334 dan 1336. Tidak dicatat sebagai peristiwa pasti pada 1350 dan bukan prasasti sezaman.',
    evidence: 'approximate',
    researchedAt: '2026-11-11'
  },
  {
    id: 'portuguese-maluku-voyage-1512',
    year: 1512,
    title: 'Ekspedisi Portugis mencapai Kepulauan Maluku',
    summary: 'Sesudah perebutan Malaka, pelayaran yang terkait dengan Antonio de Abreu dan Francisco Serrao mencapai kepulauan rempah pada 1511–1512. Peristiwa ini berbeda dari kedatangan rombongan Belanda pada 1596 dan pembentukan VOC pada 1602.',
    impact: 'Memperluas kontak dagang dan persaingan antara penguasa Maluku dan kekuatan maritim Eropa.',
    category: 'colonial',
    region: 'Maluku',
    sources: [
      {
        title: 'Koleksi Peta Indiae Orientalis di Gedung Arsip Nasional RI',
        url: 'https://pusdipres.anri.go.id/pameran-arsip/gedung-cagar-budaya-anri/koleksi-peta-indiae-orientalis-di-gedung-arsip-nasional-ri',
        sourceName: 'ANRI'
      }
    ],
    period: 'colonial',
    tags: ['Kolonialisme', 'Sejarah tercatat'],
    dateNote: 'Sumber ANRI menyebut pelayaran 1511–1512; tahun penanda 1512 tidak bermakna seluruh Nusantara diduduki Portugis pada tahun itu.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'sunda-portuguese-treaty-1522',
    year: 1522,
    title: 'Perjanjian Sunda–Portugis diperingati dengan padrao',
    summary: 'Utusan Portugis Henrique Leme mengadakan perjanjian dengan Kerajaan Sunda yang memperbolehkan pos dagang dan benteng di Kalapa. Batu padrao yang kini dikoleksi Museum Nasional merupakan tinggalan perjanjian itu.',
    impact: 'Merekam upaya diplomasi perdagangan dan pertahanan Sunda; kesepakatan tidak sama dengan bukti benteng Portugis benar-benar selesai dibangun.',
    category: 'diplomacy',
    region: 'Jawa',
    sources: [
      {
        title: 'Padrao — koleksi Museum Nasional',
        url: 'https://www.museumnasional.or.id/1899/',
        sourceName: 'Museum Nasional Indonesia'
      }
    ],
    period: 'colonial',
    tags: ['Diplomasi', 'Sejarah tercatat'],
    date: '1522-08-21',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'amboyna-trial-1623',
    year: 1623,
    title: 'Pengadilan dan eksekusi Amboyna',
    summary: 'Pengadilan VOC di Ambon pada Februari–Maret 1623 berujung pada eksekusi orang Inggris, Jepang, dan Portugis yang dituduh bersekongkol. Dokumen pemeriksaan dan pengakuan memperlihatkan penggunaan penyiksaan dalam proses tersebut.',
    impact: 'Memperuncing pertentangan perusahaan dagang Inggris dan Belanda serta menghasilkan sengketa panjang mengenai proses pengadilan.',
    category: 'colonial',
    region: 'Maluku',
    sources: [
      {
        title: 'The Amboyna Conspiracy Trial — timeline dan dokumen pemeriksaan',
        url: 'https://amboyna.org/timeline.html',
        sourceName: 'Amboyna digital history project'
      },
      {
        title: 'The Power of Petitioning: Thomas Billingsley dan Amboyna',
        url: 'https://petitioning.history.ac.uk/investigating-petitioners/1652-thomas-billingsley-seeks-compensation-for-the-murder-of-his-uncle-by-the-dutch-at-amboyna-in-the-east-indies/',
        sourceName: 'Institute of Historical Research'
      }
    ],
    period: 'colonial',
    tags: ['Kolonialisme', 'Sejarah tercatat'],
    dateNote: 'Tahun 1623; sumber memakai kalender berbeda untuk tanggal harian. Tuduhan konspirasi tidak diperlakukan sebagai kesalahan para terdakwa yang terbukti tanpa perdebatan.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'pattimura-resistance-1817',
    year: 1817,
    title: 'Perlawanan Pattimura di Saparua',
    summary: 'Pattimura dan kelompok perlawanan Maluku melawan kembalinya pemerintahan kolonial Belanda pada 1817. Perlawanan tersebut sempat menguasai Benteng Duurstede di Saparua sebelum ditumpas.',
    impact: 'Menjadi bagian penting sejarah perlawanan di Maluku dan perjalanan tokoh yang kemudian ditetapkan sebagai pahlawan nasional.',
    category: 'war',
    region: 'Maluku',
    sources: [
      {
        title: 'Revolution and Resistance: An Exploration of the Looping Effect in the Moluccas in 1817',
        url: 'https://www.cambridge.org/core/journals/itinerario/article/revolution-and-resistance-an-exploration-of-the-looping-effect-in-the-moluccas-in-1817/4B19594F36FAB6EEBF4B854A417A3CBA',
        sourceName: 'Itinerario / Cambridge University Press'
      },
      {
        title: '1814–1914: De krijgsmacht overzee — De opstand van Pattimura',
        url: 'https://www.nimh.nl/militaire-geschiedenis-van-nederland/historische-overzichten/tijdlijn/1814-1914-de-krijgsmacht-overzee',
        sourceName: 'Nederlands Instituut voor Militaire Historie'
      }
    ],
    period: 'colonial',
    tags: ['Konflik', 'Sejarah tercatat'],
    dateNote: 'Penanda tahun perlawanan; tidak menetapkan satu hari sebagai keseluruhan rangkaian perang.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'slavery-abolition-east-indies-1860',
    year: 1860,
    title: 'Penghapusan hukum perbudakan di wilayah pemerintahan langsung Hindia Belanda',
    summary: 'Ketentuan penghapusan perbudakan mulai berlaku pada 1 Januari 1860 di wilayah yang diperintah langsung oleh pemerintah kolonial. Pelaksanaannya tidak serentak di seluruh kepulauan dan perbudakan masih berlanjut di sejumlah daerah.',
    impact: 'Mengubah status hukum sebagian orang yang diperbudak, namun tidak langsung mengakhiri seluruh praktik perbudakan di Nusantara.',
    category: 'colonial',
    region: 'Nasional',
    sources: [
      {
        title: 'Slavernij en slavenhandel in Nederlands-Indië, 1820–1900',
        url: 'https://nationaalarchief.nl/onderzoeken/zoekhulpen/slavernij-en-slavenhandel-in-nederlands-indie-1820-1900',
        sourceName: 'Nationaal Archief'
      }
    ],
    period: 'colonial',
    tags: ['Kolonialisme', 'Sejarah tercatat'],
    date: '1860-01-01',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'max-havelaar-publication-1860',
    year: 1860,
    title: 'Max Havelaar karya Multatuli terbit',
    summary: 'Novel Max Havelaar karya Eduard Douwes Dekker, dengan nama pena Multatuli, pertama kali terbit pada 1860. Karya ini menggunakan bentuk sastra untuk mengkritik penyalahgunaan kekuasaan kolonial.',
    impact: 'Menjadi bagian perdebatan publik mengenai kolonialisme; karya sastra tidak diperlakukan sebagai laporan administratif yang seluruh detailnya literal.',
    category: 'culture',
    region: 'Jawa',
    sources: [
      {
        title: 'Max Havelaar — riwayat edisi dan digitalisasi',
        url: 'https://www.dbnl.org/titels/titel.php?id=mult001maxh01',
        sourceName: 'DBNL / Koninklijke Bibliotheek'
      }
    ],
    period: 'colonial',
    tags: ['Kebudayaan', 'Sejarah tercatat'],
    dateNote: 'Gunakan tahun terbit 1860. Edisi bibliografi berbeda memberi rincian hari edar yang tidak sama; jangan mengunci tanggal harian tanpa kajian bibliografi.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'agrarische-wet-1870',
    year: 1870,
    title: 'Agrarische Wet mengubah kerangka agraria kolonial',
    summary: 'Pembentukan Agrarische Wet pada 1870 terdokumentasi dalam arsip Menteri Koloni E. de Waal. Kebijakan ini menjadi bagian perubahan pengaturan tanah dan kegiatan perkebunan swasta di Hindia Belanda.',
    impact: 'Mempengaruhi hubungan antara pemerintah kolonial, pengusaha perkebunan, dan penggunaan tanah penduduk.',
    category: 'colonial',
    region: 'Nasional',
    sources: [
      {
        title: 'Inventaris arsip E. de Waal, 2.21.173, berkas 8–15',
        url: 'https://www.nationaalarchief.nl/onderzoeken/archief/2.21.173/download/pdf',
        sourceName: 'Nationaal Archief'
      },
      {
        title: 'Spotprent over de aanneming van de Agrarische wet, 1870',
        url: 'https://www.rijksmuseum.nl/nl/collectie/object/Spotprent-over-de-aanneming-van-de-Agrarische-wet-1870--7467a5093420fc6b8b20da8eca0f40ba',
        sourceName: 'Rijksmuseum'
      }
    ],
    period: 'colonial',
    tags: ['Kolonialisme', 'Sejarah tercatat'],
    dateNote: 'Tahun pembentukan kebijakan; arsip membedakan pembahasan undang-undang dan keputusan pelaksanaan, sehingga tidak dipadatkan menjadi satu tanggal sembarang.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'pes-malang-confirmation-1911',
    year: 1911,
    title: 'Wabah pes Malang terkonfirmasi secara bakteriologis',
    summary: 'Laporan W. Th. de Vogel mencatat temuan bakteri pes dari sampel pasien Malang pada 27 Maret 1911. Pemeriksaan tersebut diikuti penyelidikan dan tindakan pengendalian wabah di Jawa.',
    impact: 'Pemerintah kolonial memperluas penyelidikan epidemiologi dan penanggulangan pes.',
    region: 'Jawa',
    sources: [
      {
        title: 'De Vogel — Verslag over de Pest-Epidemie in de Afdeeling Malang, GTNI LII (1912), hlm.91 dst.',
        url: 'https://archive.nsgh.nl/gtni-deel-lii-1912',
        sourceName: 'Arsip GTNI / NSGH'
      }
    ],
    category: 'disease',
    date: '1911-03-27',
    dateNote: 'Tanggal konfirmasi laboratorium, bukan tanggal penyakit pertama kali masuk. Laporan retrospektif mencakup dugaan kasus sejak November 1910.',
    period: 'colonial',
    tags: ['Wabah', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'muhammadiyah-founded-1912',
    year: 1912,
    title: 'Ahmad Dahlan mendirikan Muhammadiyah',
    summary: 'Muhammadiyah didirikan oleh Ahmad Dahlan di Yogyakarta pada 18 November 1912. Tanggal tersebut tercantum dalam anggaran dasar organisasi.',
    impact: 'Membentuk wadah pendidikan, dakwah, dan kegiatan sosial yang berkembang di berbagai daerah.',
    category: 'figure',
    region: 'Jawa',
    sources: [
      {
        title: 'Anggaran Dasar Muhammadiyah — Pasal 2',
        url: 'https://muhammadiyah.or.id/anggaran-dasar/',
        sourceName: 'Muhammadiyah'
      }
    ],
    period: 'colonial',
    tags: ['Tokoh', 'Sejarah tercatat'],
    date: '1912-11-18',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'indische-partij-constituent-meeting-1912',
    year: 1912,
    title: 'Rapat konstituen Indische Partij di Bandung',
    summary: 'Rapat konstituen Indische Partij pada 25 Desember 1912 menyetujui perubahan anggaran dasar dan memilih pengurus. Douwes Dekker, Tjipto Mangoenkoesoemo, serta Soewardi Soerjaningrat terlibat dalam organisasi yang menentang diskriminasi kolonial ini.',
    impact: 'Merekam pembentukan organisasi politik lintas kelompok yang mengusung gagasan Hindia untuk penduduk Hindia.',
    category: 'colonial',
    region: 'Jawa',
    sources: [
      {
        title: 'Indie Voor De Indiers — rapat konstituen dan sumber pers sezaman',
        url: 'https://esi.kemenbud.go.id/wiki/Indie_Voor_De_Indiers',
        sourceName: 'Ensiklopedia Sejarah Indonesia / Kemenbud'
      }
    ],
    period: 'colonial',
    tags: ['Kolonialisme', 'Sejarah tercatat'],
    date: '1912-12-25',
    dateNote: 'Tanggal rapat konstituen, bukan klaim bahwa semua tahapan pembentukan partai terjadi pada hari yang sama. Sumber juga mencatat aktivitas sebelum Desember 1912.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'influenza-pandemic-indies-1918',
    year: 1918,
    title: 'Pandemi influenza 1918–1919 di Hindia Belanda',
    summary: 'Pandemi influenza melanda Hindia Belanda pada 1918–1919. Penelitian demografi atas data Jawa dan Madura menunjukkan dampak besar pada penduduk serta perbedaan dampak antardaerah.',
    impact: 'Pandemi menekan kesehatan masyarakat dan pertumbuhan penduduk.',
    region: 'Nasional',
    sources: [
      {
        title: 'Chandra (2013) — Mortality from the influenza pandemic of 1918–19 in Indonesia',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3687026/',
        sourceName: 'Population Studies / PMC'
      }
    ],
    category: 'disease',
    endYear: 1919,
    dateNote: 'Tahun mencakup gelombang pandemi, bukan satu hari kejadian. Angka kematian merupakan estimasi penelitian dan tidak disamakan dengan hitungan korban yang pasti.',
    period: 'colonial',
    tags: ['Wabah', 'Nasional', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'kelud-eruption-1919',
    year: 1919,
    title: 'Letusan Kelud 1919',
    summary: 'Kelud meletus pada 19–20 Mei 1919. Catatan GVP mencakup lontaran material, aliran piroklastik, dan lahar yang merusak kawasan sekitar.',
    impact: 'Bencana menjadi latar penting rekayasa pengurangan air danau kawah.',
    region: 'Jawa',
    sources: [
      {
        title: 'Global Volcanism Program — Kelud: Eruptive History',
        url: 'https://volcano.si.edu/volcano.cfm?vn=263280',
        sourceName: 'Smithsonian GVP'
      }
    ],
    category: 'disaster',
    date: '1919-05-19',
    dateNote: '19 Mei adalah awal episode dalam katalog GVP; episode berlanjut hingga 20 Mei.',
    period: 'colonial',
    tags: ['Bencana', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'tamansiswa-founded-1922',
    year: 1922,
    title: 'Ki Hadjar Dewantara mendirikan Tamansiswa',
    summary: 'Perguruan Tamansiswa didirikan oleh Ki Hadjar Dewantara di Yogyakarta pada 3 Juli 1922. Pendidikan ditempatkan sebagai bagian perjuangan kebudayaan dan pengembangan masyarakat.',
    impact: 'Memperluas gerakan pendidikan nasional di luar sistem sekolah kolonial.',
    category: 'culture',
    region: 'Jawa',
    sources: [
      {
        title: 'Sejarah UST dan Perguruan Tamansiswa',
        url: 'https://www.fe.ustjogja.ac.id/index.php?id=4&r=profil/index',
        sourceName: 'Universitas Sarjanawiyata Tamansiswa'
      }
    ],
    period: 'colonial',
    tags: ['Kebudayaan', 'Sejarah tercatat'],
    date: '1922-07-03',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'nahdlatul-ulama-founded-1926',
    year: 1926,
    title: 'Nahdlatul Ulama didirikan di Surabaya',
    summary: 'Para ulama mendirikan Nahdlatul Ulama di Surabaya pada 31 Januari 1926. Pembentukan organisasi berkaitan dengan jejaring pesantren serta kegiatan Komite Hijaz.',
    impact: 'Menjadi wadah organisasi ulama dan kegiatan keagamaan, pendidikan, serta sosial di berbagai daerah.',
    category: 'culture',
    region: 'Jawa',
    sources: [
      {
        title: 'Nahdlatul Ulama — Ensiklopedia Sejarah Indonesia',
        url: 'https://esi.kemenbud.go.id/wiki/Nahdlatul_Ulama_%28NU%29',
        sourceName: 'Kemenbud'
      },
      {
        title: 'Menuju Hari Kelahiran NU 31 Januari',
        url: 'https://www.nu.or.id/opini/menuju-hari-kelahiran-nu-31-januari-h8d3l',
        sourceName: 'NU Online'
      }
    ],
    period: 'colonial',
    tags: ['Kebudayaan', 'Sejarah tercatat'],
    date: '1926-01-31',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'merapi-eruption-1930',
    year: 1930,
    title: 'Episode letusan Merapi 1930–1931',
    summary: 'Katalog Smithsonian mencatat episode letusan Merapi dimulai pada 25 November 1930. Aktivitas berlanjut hingga 1931, sehingga peristiwa ini dicatat sebagai episode, bukan satu letusan sesaat.',
    impact: 'Episode menjadi bagian penting sejarah aktivitas dan pemantauan Merapi.',
    region: 'Jawa',
    sources: [
      {
        title: 'Global Volcanism Program — Merapi: Eruptive History 1930–1931',
        url: 'https://volcano.si.edu/volcano.cfm?vn=263250',
        sourceName: 'Smithsonian GVP'
      }
    ],
    category: 'disaster',
    date: '1930-11-25',
    endYear: 1931,
    dateNote: 'Katalog mencatat akhir 16 September 1931 dengan ketidakpastian sekitar 15 hari; tanggal awal episode bukan tanggal seluruh dampak terjadi.',
    period: 'colonial',
    tags: ['Bencana', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'linggarjati-agreement-signed-1947',
    year: 1947,
    title: 'Persetujuan Linggarjati ditandatangani',
    summary: 'Delegasi Republik Indonesia dan Belanda menandatangani Persetujuan Linggarjati pada 25 Maret 1947. Penandatanganan ini mengikuti perundingan di Linggarjati pada 11–13 November 1946.',
    impact: 'Menjadi tahap diplomasi penting dalam revolusi kemerdekaan, meskipun tafsir dan pelaksanaannya tetap diperselisihkan.',
    category: 'diplomacy',
    region: 'Nasional',
    sources: [
      {
        title: 'Museum Gedung Perundingan Linggarjati — sejarah perundingan dan penandatanganan',
        url: 'https://museum.kemenbud.go.id/museum/profile/museum%2Bgedung%2Bperundingan%2Blinggarjati',
        sourceName: 'Kemenbud / Museum Linggarjati'
      }
    ],
    period: 'independence',
    tags: ['Diplomasi', 'Sejarah tercatat'],
    date: '1947-03-25',
    dateNote: 'Membedakan perundingan November 1946 dari penandatanganan resmi Maret 1947.',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'renville-agreement-signed-1948',
    year: 1948,
    title: 'Persetujuan Renville ditandatangani',
    summary: 'Perwakilan Indonesia dan Belanda menandatangani Persetujuan Renville di kapal USS Renville pada 17 Januari 1948. Perundingan berlangsung dengan perantaraan Komisi Tiga Negara.',
    impact: 'Menghasilkan kesepakatan baru dalam konflik Indonesia–Belanda dan memunculkan persoalan pelaksanaan serta penarikan pasukan.',
    category: 'diplomacy',
    region: 'Nasional',
    sources: [
      {
        title: 'Pameran BINAR: Penandatanganan Perjanjian Renville',
        url: 'https://www.anri.go.id/publikasi/berita/pameran-binar-bulan-januari-angkat-tema-penandatangan-perjanjian-renville',
        sourceName: 'ANRI'
      }
    ],
    period: 'independence',
    tags: ['Diplomasi', 'Sejarah tercatat'],
    date: '1948-01-17',
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'pemilu-dpr-1955',
    year: 1955,
    title: 'Pemilihan umum DPR pertama',
    summary: 'Pemungutan suara nasional untuk anggota DPR dilaksanakan pada 29 September 1955. Pemilihan Konstituante diselenggarakan terpisah pada Desember.',
    impact: 'Menghasilkan perwakilan partai-partai dalam DPR hasil pemilihan umum pertama.',
    category: 'politics',
    region: 'Nasional',
    sources: [
      {
        title: 'Hasil Pemilu 1955–2009, modul KPU',
        url: 'https://www.kpu.go.id/dmdocuments/modul_1d.pdf',
        sourceName: 'KPU'
      }
    ],
    date: '1955-09-29',
    period: 'republic',
    tags: ['Politik', 'Nasional', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'pemilu-konstituante-1955',
    year: 1955,
    title: 'Pemilihan anggota Konstituante',
    summary: 'Pemungutan suara untuk memilih anggota Konstituante berlangsung pada 15 Desember 1955. Lembaga ini ditugasi menyusun undang-undang dasar baru.',
    impact: 'Membentuk badan penyusun konstitusi hasil pemilu.',
    category: 'politics',
    region: 'Nasional',
    sources: [
      {
        title: 'Hasil Pemilu 1955–2009, modul KPU',
        url: 'https://www.kpu.go.id/dmdocuments/modul_1d.pdf',
        sourceName: 'KPU'
      }
    ],
    date: '1955-12-15',
    period: 'republic',
    tags: ['Politik', 'Nasional', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'dekrit-presiden-1959',
    year: 1959,
    title: 'Dekrit Presiden 5 Juli 1959',
    summary: 'Presiden Sukarno mengeluarkan dekrit yang membubarkan Konstituante dan memberlakukan kembali UUD 1945. Dokumen dekrit tercatat dalam katalog arsip ANRI.',
    impact: 'Mengakhiri berlakunya UUD Sementara 1950.',
    category: 'politics',
    region: 'Nasional',
    sources: [
      {
        title: 'Dekrit Presiden 5 Juli 1959 — katalog arsip ANRI',
        url: 'https://jdih.bpip.go.id/dokumen/view?id=718',
        sourceName: 'JDIH BPIP / ANRI'
      }
    ],
    date: '1959-07-05',
    period: 'republic',
    tags: ['Politik', 'Nasional', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'asian-games-jakarta-1962',
    year: 1962,
    title: 'Asian Games IV di Jakarta',
    summary: 'Jakarta menyelenggarakan Asian Games keempat pada 24 Agustus–4 September 1962. Presiden Sukarno membuka pesta olahraga tersebut.',
    impact: 'Menempatkan Jakarta sebagai tuan rumah ajang olahraga Asia.',
    category: 'diplomacy',
    region: 'Jawa',
    sources: [
      {
        title: 'Jakarta 1962 — Olympic Council of Asia',
        url: 'https://oca.asia/games/104-jakarta-1962.html',
        sourceName: 'Olympic Council of Asia'
      }
    ],
    date: '1962-08-24',
    dateNote: 'Tanggal menandai pembukaan; pertandingan berlangsung sampai 4 September 1962.',
    period: 'republic',
    tags: ['Diplomasi', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'agung-eruption-1963',
    year: 1963,
    title: 'Letusan besar Agung 1963',
    summary: 'Agung mengalami ledakan besar pada 17 Maret 1963 dan kembali meletus kuat pada Mei. Awan panas, hujan abu, dan lahar merusak kawasan Bali bagian timur.',
    impact: 'Penduduk terdampak harus mengungsi dan permukiman mengalami kerusakan.',
    region: 'Bali',
    sources: [
      {
        title: 'Global Volcanism Program — Agung: Eruptive History',
        url: 'https://volcano.si.edu/volcano.cfm?vn=264020',
        sourceName: 'Smithsonian GVP'
      }
    ],
    category: 'disaster',
    date: '1963-03-17',
    dateNote: 'Tanggal menandai ledakan besar pertama; rangkaian aktivitas telah dimulai Februari 1963 dan berlanjut hingga 1964.',
    period: 'republic',
    tags: ['Bencana', 'Bali', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'gerakan-30-september-1965',
    year: 1965,
    title: 'Gerakan 30 September dan pembunuhan perwira Angkatan Darat',
    summary: 'Pada malam 30 September hingga 1 Oktober 1965 terjadi penculikan dan pembunuhan perwira Angkatan Darat. Kelompok yang menamakan diri Gerakan 30 September mengumumkan gerakannya melalui RRI; arsip pernyataan Sukarno pada 1 dan 3 Oktober tersimpan dalam inventaris ANRI.',
    impact: 'Memicu krisis politik yang diikuti perubahan kekuasaan dan kekerasan terhadap penduduk sipil.',
    category: 'politics',
    region: 'Jawa',
    sources: [
      {
        title: 'Guide Arsip Pertahanan Keamanan Negara era Sukarno 1945–1967',
        url: 'https://www.anri.go.id/download/ga-21.-guide-arsip-pertahanan-keamanan-negara-era-sukarno-19451967-1734326739',
        sourceName: 'ANRI'
      }
    ],
    date: '1965-09-30',
    dateNote: 'Berlangsung melintasi 30 September–1 Oktober. Identitas, peran, dan tanggung jawab berbagai aktor harus dibedakan dari fakta peristiwa; tidak semua tuduhan atau narasi resmi dianggap terbukti.',
    period: 'republic',
    tags: ['Politik', 'Jawa', 'Rekaman sejarah', 'G30S', 'G30S/PKI', 'Gerakan 30 September'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'kekerasan-massal-1965-1966',
    year: 1965,
    title: 'Kekerasan massal dan penahanan 1965–1966',
    summary: 'Pembunuhan, penahanan sewenang-wenang, penyiksaan, serta bentuk kekerasan lain terjadi di berbagai daerah terhadap orang yang dituduh terkait PKI. Tim ad hoc Komnas HAM menyelidiki rangkaian peristiwa ini dan menyampaikan temuannya pada 2012.',
    impact: 'Menimbulkan korban serta dampak berkepanjangan bagi penyintas dan keluarganya.',
    category: 'violence',
    region: 'Nasional',
    sources: [
      {
        title: 'Wacana HAM 2012: hasil penyelidikan Peristiwa 1965–1966',
        url: 'https://www.komnasham.go.id/files/20120621-wacana-ham-edisi-2-tahun-2012-%24CP6RA3.pdf',
        sourceName: 'Komnas HAM'
      }
    ],
    endYear: 1966,
    dateNote: 'Rangkaian lintas daerah dan waktu; bukan satu kejadian pada tanggal tertentu. Temuan penyelidikan dibedakan dari putusan pengadilan; angka korban tidak diseragamkan.',
    period: 'republic',
    tags: ['Kekerasan', 'Nasional', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'kelud-eruption-1966',
    year: 1966,
    title: 'Letusan Kelud 1966',
    summary: 'Kelud kembali mengalami letusan eksplosif pada 26–27 April 1966. Katalog mencatat aliran piroklastik, hujan abu, lahar, dan kerusakan.',
    impact: 'Peristiwa mendorong pembangunan saluran penguras danau kawah yang lebih dalam.',
    region: 'Jawa',
    sources: [
      {
        title: 'Global Volcanism Program — Kelud: Eruptive History',
        url: 'https://volcano.si.edu/volcano.cfm?vn=263280',
        sourceName: 'Smithsonian GVP'
      }
    ],
    category: 'disaster',
    date: '1966-04-26',
    dateNote: 'Tanggal awal episode katalog; kegiatan berlanjut hingga 27 April.',
    period: 'republic',
    tags: ['Bencana', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'supersemar-1966',
    year: 1966,
    title: 'Surat Perintah Sebelas Maret',
    summary: 'Surat Perintah 11 Maret 1966 terkait kewenangan Soeharto dalam menghadapi situasi keamanan menjadi salah satu dokumen penting peralihan kekuasaan. ANRI mencatat salinannya dalam inventaris dan masih memasukkan arsip aslinya ke Daftar Pencarian Arsip.',
    impact: 'Menjadi dokumen penting dalam perubahan hubungan kekuasaan Sukarno–Soeharto.',
    category: 'politics',
    region: 'Nasional',
    sources: [
      {
        title: 'Menilik Sejarah dan Arsip Supersemar melalui Tayangan TOP SECRET',
        url: 'https://anri.go.id/publikasi/berita/menilik-sejarah-dan-arsip-supersemar-melalui-tayangan-top-secret',
        sourceName: 'ANRI'
      },
      {
        title: 'Guide Arsip Pertahanan Keamanan Negara era Sukarno 1945–1967',
        url: 'https://www.anri.go.id/download/ga-21.-guide-arsip-pertahanan-keamanan-negara-era-sukarno-19451967-1734326739',
        sourceName: 'ANRI'
      }
    ],
    date: '1966-03-11',
    dateNote: 'Keberadaan salinan dan peristiwa surat perintah tidak berarti seluruh versi dokumen yang beredar telah dinyatakan asli.',
    period: 'republic',
    tags: ['Politik', 'Nasional', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'pepera-1969',
    year: 1969,
    title: 'Penentuan Pendapat Rakyat di Irian Barat',
    summary: 'Dewan-dewan perwakilan melaksanakan Penentuan Pendapat Rakyat pada 14 Juli–2 Agustus 1969. Pelaksanaannya dilaporkan kepada PBB dalam tindak lanjut Persetujuan New York.',
    impact: 'Laporan Sekretaris Jenderal kemudian dibahas Majelis Umum PBB melalui Resolusi 2504 (XXIV).',
    category: 'diplomacy',
    region: 'Papua',
    sources: [
      {
        title: 'UNSF background: pelaksanaan Pepera dan laporan PBB',
        url: 'https://peacekeeping.un.org/sites/default/files/past/unsfbackgr.html',
        sourceName: 'United Nations'
      }
    ],
    date: '1969-07-14',
    dateNote: 'Tanggal awal rangkaian sampai 2 Agustus. Proses memakai perwakilan, bukan pemungutan suara individual seluruh penduduk; legitimasi proses diperdebatkan.',
    period: 'republic',
    tags: ['Diplomasi', 'Papua', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'malari-1974',
    year: 1974,
    title: 'Peristiwa Malari',
    summary: 'Demonstrasi mahasiswa dan kerusuhan terjadi di Jakarta pada 15 Januari 1974, bertepatan dengan kunjungan Perdana Menteri Jepang Kakuei Tanaka. Berkas mengenai peristiwa tersebut tercatat dalam inventaris arsip ANRI.',
    impact: 'Diikuti penangkapan serta pembatasan terhadap gerakan mahasiswa dan sejumlah media.',
    category: 'politics',
    region: 'Jawa',
    sources: [
      {
        title: 'Inventaris Arsip Tekstual Marzuki Arifin 1945–1984, bagian MALARI',
        url: 'https://www.anri.go.id/download/inventaris-arsip-tekstual-marzuki-arifin-19451984-1633329015',
        sourceName: 'ANRI'
      },
      {
        title: 'Hariman Siregar: Dibui & Terancam Mati',
        url: 'https://arsip.ui.ac.id/hariman-siregar-dibui-terancam-mati/',
        sourceName: 'Arsip Universitas Indonesia'
      }
    ],
    date: '1974-01-15',
    period: 'republic',
    tags: ['Politik', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'invasi-timor-timur-1975',
    year: 1975,
    title: 'Invasi Indonesia ke Timor Timur',
    summary: 'Pasukan Indonesia melancarkan serangan laut, udara, dan darat ke Timor Timur pada 7 Desember 1975. Wilayah itu masih dicatat PBB sebagai wilayah belum berpemerintahan sendiri.',
    impact: 'Memulai masa pendudukan dan konflik berkepanjangan di Timor Timur.',
    category: 'war',
    region: 'Nusa Tenggara',
    sources: [
      {
        title: 'Laporan Komite Khusus Dekolonisasi: Timor Timur',
        url: 'https://documents.un.org/doc/undoc/gen/n80/090/03/pdf/n8009003.pdf',
        sourceName: 'United Nations'
      }
    ],
    date: '1975-12-07',
    period: 'republic',
    tags: ['Perang', 'Nusa Tenggara', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'klaim-aneksasi-timor-timur-1976',
    year: 1976,
    title: 'Indonesia menetapkan Timor Timur sebagai provinsi',
    summary: 'Pada 17 Juli 1976 pemerintah Indonesia memberlakukan UU No. 7/1976 yang menyatakan penggabungan Timor Timur sebagai provinsi. PBB tidak mengakui keputusan tersebut sebagai penetapan sah status wilayah.',
    impact: 'Menciptakan perbedaan antara administrasi Indonesia dan status Timor Timur dalam kerangka PBB.',
    category: 'politics',
    region: 'Nusa Tenggara',
    sources: [
      {
        title: 'Laporan Komisi Ahli PBB S/2005/458: latar belakang Timor Timur',
        url: 'https://documents.un.org/api/symbol/access?l=en&s=S%2F2005%2F458&t=pdf',
        sourceName: 'United Nations'
      }
    ],
    date: '1976-07-17',
    dateNote: 'Jangan disajikan sebagai integrasi damai atau perubahan kedaulatan yang diakui PBB.',
    period: 'republic',
    tags: ['Politik', 'Nusa Tenggara', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'tanjung-priok-1984',
    year: 1984,
    title: 'Peristiwa Tanjung Priok',
    summary: 'Kekerasan terhadap warga terjadi di kawasan Tanjung Priok, Jakarta, pada September 1984. Peristiwa ini kemudian diselidiki Komnas HAM dan menjadi perkara pengadilan HAM ad hoc.',
    impact: 'Meninggalkan korban serta tuntutan pertanggungjawaban dan pemulihan.',
    category: 'violence',
    region: 'Jawa',
    sources: [
      {
        title: 'Laporan Kinerja Komnas HAM 2023: daftar penyelidikan pelanggaran HAM berat',
        url: 'https://www.komnasham.go.id/files/20240318-laporan-kinerja-instansi-pemerintah-%24FGCS.pdf',
        sourceName: 'Komnas HAM'
      }
    ],
    dateNote: 'Event utama dikenal bertanggal 12 September 1984; sumber Komnas HAM yang ditautkan mengonfirmasi tahun dan penanganan perkara, bukan seluruh rincian kronologi.',
    period: 'republic',
    tags: ['Kekerasan', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'santa-cruz-dili-1991',
    year: 1991,
    title: 'Penembakan Santa Cruz di Dili',
    summary: 'Pada 12 November 1991 terjadi penembakan terhadap demonstran di Dili, Timor Timur. Laporan kunjungan Komisaris Tinggi HAM PBB kemudian membahas korban, orang hilang, dan perlunya penyelidikan lanjutan.',
    impact: 'Memperkuat perhatian internasional terhadap pelanggaran HAM di Timor Timur.',
    category: 'violence',
    region: 'Nusa Tenggara',
    sources: [
      {
        title: 'Laporan kunjungan Komisaris Tinggi HAM PBB ke Indonesia dan Timor Timur, E/CN.4/1996/112',
        url: 'https://hrlibrary.umn.edu/commission/country52/112-idn.htm',
        sourceName: 'United Nations / Human Rights Library, University of Minnesota'
      }
    ],
    date: '1991-11-12',
    dateNote: 'Laporan PBB disediakan melalui salinan di Human Rights Library, University of Minnesota. Tidak menetapkan satu angka korban sebagai angka pasti.',
    period: 'republic',
    tags: ['Kekerasan', 'Nusa Tenggara', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'flores-earthquake-tsunami-1992',
    year: 1992,
    title: 'Gempa dan tsunami Flores 1992',
    summary: 'Gempa pada 12 Desember 1992 membangkitkan tsunami di Flores. Dokumentasi NOAA mencatat gelombang tiba dengan cepat di pesisir dan merekam kerusakan kawasan Maumere serta sekitarnya.',
    impact: 'Permukiman pesisir rusak dan penanganan bencana dilakukan di sejumlah wilayah Flores.',
    region: 'Nusa Tenggara',
    sources: [
      {
        title: 'December 1992 Flores Region, Maumere, Indonesia Images',
        url: 'https://catalog.data.gov/dataset/december-1992-flores-region-maumere-indonesia-images',
        sourceName: 'NOAA / data.gov'
      }
    ],
    category: 'disaster',
    date: '1992-12-12',
    period: 'republic',
    tags: ['Bencana', 'Nusa Tenggara', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'biak-earthquake-tsunami-1996',
    year: 1996,
    title: 'Gempa dan tsunami Biak 1996',
    summary: 'Gempa besar terjadi di sekitar Biak pada 17 Februari 1996. Catatan BMKG mendokumentasikan tsunami dan dampaknya di kawasan pesisir Papua.',
    impact: 'Bencana merusak permukiman pesisir Biak dan wilayah di sekitarnya.',
    region: 'Papua',
    sources: [
      {
        title: '17 Februari 1996 — Biak Numfor, Gempa Bumi Merusak',
        url: 'https://stageof-jayapura.bmkg.go.id/gempa-merusak/13/',
        sourceName: 'BMKG Jayapura'
      },
      {
        title: 'Katalog Gempabumi Merusak 1821–2023, bagian tahun 1996',
        url: 'https://content.bmkg.go.id/wp-content/uploads/FA_Katalog-Gempabumi-Merusak-1821-2023.pdf',
        sourceName: 'BMKG'
      }
    ],
    category: 'disaster',
    date: '1996-02-17',
    period: 'republic',
    tags: ['Bencana', 'Papua', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'trisakti-1998',
    year: 1998,
    title: 'Penembakan mahasiswa Universitas Trisakti',
    summary: 'Empat mahasiswa Universitas Trisakti tewas dalam peristiwa 12 Mei 1998 di Jakarta. Universitas dan keluarga korban terus memperingati kejadian tersebut.',
    impact: 'Menjadi salah satu peristiwa penting dalam rangkaian tuntutan Reformasi.',
    category: 'violence',
    region: 'Jawa',
    sources: [
      {
        title: 'Universitas Trisakti mengenang Tragedi 12 Mei 1998',
        url: 'https://trisakti.ac.id/news/universitas-trisakti-mengenang-tragedi-12-mei-1998-dalam-upacara-memorial-yang-mengharukan/',
        sourceName: 'Universitas Trisakti'
      },
      {
        title: 'Laporan Kinerja Komnas HAM 2023: daftar penyelidikan pelanggaran HAM berat',
        url: 'https://www.komnasham.go.id/files/20240318-laporan-kinerja-instansi-pemerintah-%24FGCS.pdf',
        sourceName: 'Komnas HAM'
      }
    ],
    date: '1998-05-12',
    period: 'republic',
    tags: ['Kekerasan', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'kerusuhan-mei-1998',
    year: 1998,
    title: 'Kerusuhan dan kekerasan Mei 1998',
    summary: 'Kerusuhan, penjarahan, pembakaran, serta kekerasan terhadap warga terjadi dalam rangkaian 13–15 Mei 1998. Tim Gabungan Pencari Fakta menyelidikinya dan menyusun laporan.',
    impact: 'Menimbulkan korban serta tuntutan penyelidikan, pemulihan, dan perlindungan terhadap warga.',
    category: 'violence',
    region: 'Nasional',
    sources: [
      {
        title: 'Tim Gabungan Pencari Fakta peristiwa tanggal 13–15 Mei 1998',
        url: 'https://perpustakaan.komnasham.go.id/opackomnas/index.php?id=6893&keywords=&p=show_detail',
        sourceName: 'Perpustakaan Komnas HAM'
      },
      {
        title: 'Laporan Akhir TGPF, Bab I: peristiwa 13–15 Mei 1998',
        url: 'https://id.wikisource.org/wiki/Halaman:Temuan_Tim_Gabungan_Pencari_Fakta_Peristiwa_Kerusuhan_Mei_1998.pdf/11',
        sourceName: 'TGPF / Wikisumber'
      }
    ],
    date: '1998-05-13',
    dateNote: 'Rangkaian 13–15 Mei di beberapa kota. Bedakan temuan TGPF, kesaksian korban, dan putusan pengadilan; hindari penyamarataan jumlah korban.',
    period: 'republic',
    tags: ['Kekerasan', 'Nasional', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'soeharto-mundur-1998',
    year: 1998,
    title: 'Soeharto berhenti sebagai Presiden',
    summary: 'Pada 21 Mei 1998 Soeharto menyatakan berhenti sebagai Presiden Republik Indonesia. Wakil Presiden B. J. Habibie kemudian mengucapkan sumpah sebagai presiden.',
    impact: 'Menandai pergantian kepresidenan dalam masa Reformasi.',
    category: 'figure',
    region: 'Jawa',
    sources: [
      {
        title: 'Penyerahan arsip pidato Presiden Soeharto kepada ANRI',
        url: 'https://www.setneg.go.id/baca/index/kementerian_sekretariat_negara_menyerahkan_arsip_pidato_presiden_soeharto_kepada_anri',
        sourceName: 'Sekretariat Negara'
      },
      {
        title: 'Istana Merdeka: peralihan kepresidenan 21 Mei 1998',
        url: 'https://www.setneg.go.id/baca/index/istana_merdeka_dibuka_untuk_umum_1',
        sourceName: 'Sekretariat Negara'
      }
    ],
    date: '1998-05-21',
    period: 'republic',
    tags: ['Tokoh', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'pemilu-reformasi-1999',
    year: 1999,
    title: 'Pemilu pertama setelah berakhirnya Orde Baru',
    summary: 'Pemungutan suara pemilihan anggota DPR diselenggarakan pada 7 Juni 1999. Pemilu ini berlangsung setelah pergantian pemerintahan pada 1998.',
    impact: 'Menghasilkan susunan perwakilan politik baru pada awal Reformasi.',
    category: 'politics',
    region: 'Nasional',
    sources: [
      {
        title: 'Hasil Pemilu 1955–2009, modul KPU',
        url: 'https://www.kpu.go.id/dmdocuments/modul_1d.pdf',
        sourceName: 'KPU'
      }
    ],
    date: '1999-06-07',
    period: 'republic',
    tags: ['Politik', 'Nasional', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'jajak-pendapat-timor-1999',
    year: 1999,
    title: 'Jajak pendapat Timor Timur',
    summary: 'Pada 30 Agustus 1999 rakyat Timor Timur mengikuti konsultasi yang diselenggarakan PBB. Mayoritas menolak usulan otonomi khusus dalam Indonesia, diikuti kekerasan dan pembentukan administrasi transisi PBB.',
    impact: 'Membuka proses peralihan menuju kemerdekaan Timor-Leste.',
    category: 'diplomacy',
    region: 'Nusa Tenggara',
    sources: [
      {
        title: 'UNMISET background: popular consultation dan kemerdekaan Timor-Leste',
        url: 'https://peacekeeping.un.org/sites/default/files/past/unmiset/background.html',
        sourceName: 'United Nations'
      }
    ],
    date: '1999-08-30',
    dateNote: 'Jajak pendapat bukan tanggal kemerdekaan resmi; kemerdekaan Timor-Leste berlangsung pada 20 Mei 2002.',
    period: 'republic',
    tags: ['Diplomasi', 'Nusa Tenggara', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'kemerdekaan-timor-leste-2002',
    year: 2002,
    title: 'Kemerdekaan Timor-Leste',
    summary: 'Timor-Leste menjadi negara merdeka pada 20 Mei 2002 setelah masa administrasi transisi PBB. Peristiwa ini terpisah dari jajak pendapat 1999.',
    impact: 'Mengakhiri masa administrasi transisi PBB di Timor-Leste.',
    category: 'independence',
    region: 'Nusa Tenggara',
    sources: [
      {
        title: 'UNMISET background: popular consultation dan kemerdekaan Timor-Leste',
        url: 'https://peacekeeping.un.org/sites/default/files/past/unmiset/background.html',
        sourceName: 'United Nations'
      }
    ],
    date: '2002-05-20',
    period: 'republic',
    tags: ['Kemerdekaan', 'Nusa Tenggara', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'bom-bali-2002',
    year: 2002,
    title: 'Serangan bom Bali',
    summary: 'Serangan bom terjadi di kawasan Kuta dan Renon, Bali, pada malam 12 Oktober 2002. Penyelidikan melibatkan kepolisian Indonesia dan kerja sama internasional.',
    impact: 'Menimbulkan korban dari berbagai negara dan mendorong kerja sama penyelidikan terorisme.',
    category: 'violence',
    region: 'Bali',
    sources: [
      {
        title: 'Bali Bombing: inquiry by the Inspector-General of Intelligence and Security',
        url: 'https://www.igis.gov.au/inquiries/bali-bombing',
        sourceName: 'Australian Government, IGIS'
      },
      {
        title: 'Bali bombings — defining moments',
        url: 'https://www.nma.gov.au/defining-moments/resources/bali-bombings',
        sourceName: 'National Museum of Australia'
      }
    ],
    date: '2002-10-12',
    dateNote: 'Kategori war mengikuti kelompok konflik/serangan dalam skema; kejadian adalah serangan teror, bukan perang antarnegeri.',
    period: 'republic',
    tags: ['Kekerasan', 'Bali', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'pilpres-langsung-2004',
    year: 2004,
    title: 'Pemilihan presiden langsung pertama',
    summary: 'Rakyat Indonesia memilih presiden dan wakil presiden secara langsung pada 5 Juli 2004. Karena tidak ada pasangan yang langsung terpilih, pemungutan suara putaran kedua dilakukan pada 20 September.',
    impact: 'Memulai pemilihan langsung presiden dan wakil presiden oleh pemilih.',
    category: 'politics',
    region: 'Nasional',
    sources: [
      {
        title: 'Pemilihan Umum Tahun 2004',
        url: 'https://riau.kpu.go.id/page/read/pemilihan-umum-tahun-2004',
        sourceName: 'KPU Riau'
      }
    ],
    date: '2004-07-05',
    period: 'republic',
    tags: ['Politik', 'Nasional', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'mou-helsinki-aceh-2005',
    year: 2005,
    title: 'Penandatanganan MoU Helsinki untuk Aceh',
    summary: 'Pemerintah Republik Indonesia dan Gerakan Aceh Merdeka menandatangani nota kesepahaman di Helsinki pada 15 Agustus 2005. Kesepakatan difasilitasi Martti Ahtisaari.',
    impact: 'Menjadi dasar proses perdamaian dan pengaturan pelaksanaan kesepakatan Aceh.',
    category: 'diplomacy',
    region: 'Sumatera',
    sources: [
      {
        title: 'Peace agreement between Indonesian Government and Free Aceh Movement was signed',
        url: 'https://um.fi/news/-/asset_publisher/GRSnUwaHDPv5/content/indonesian-hallitus-ja-vapaa-aceh-liike-allekirjoittivat-rauhansopimuksen',
        sourceName: 'Ministry for Foreign Affairs of Finland'
      },
      {
        title: 'MoU Pemerintah Republik Indonesia dan Gerakan Aceh Merdeka, 15 Agustus 2005',
        url: 'https://commons.wikimedia.org/wiki/File:MoU_between_the_Government_of_the_Republic_of_Indonesia_and_the_Free_Aceh_Movement.pdf',
        sourceName: 'Pemerintah RI / GAM (salinan dokumen di Commons)'
      }
    ],
    date: '2005-08-15',
    period: 'republic',
    tags: ['Diplomasi', 'Sumatera', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'yogyakarta-earthquake-2006',
    year: 2006,
    title: 'Gempa Yogyakarta dan Jawa Tengah 2006',
    summary: 'Gempa pada 27 Mei 2006 mengguncang Yogyakarta dan sebagian Jawa Tengah. Laporan BMKG mencatat kerusakan luas pada rumah dan bangunan di kawasan terdampak.',
    impact: 'Bencana memicu tanggap darurat dan pemulihan permukiman.',
    region: 'Jawa',
    sources: [
      {
        title: '27 Mei 2006 — Gunungkidul, DI Yogyakarta, Gempa Merusak',
        url: 'https://stageof-jayapura.bmkg.go.id/gempa-merusak/347/',
        sourceName: 'BMKG Jayapura'
      }
    ],
    category: 'disaster',
    date: '2006-05-27',
    period: 'republic',
    tags: ['Bencana', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'pangandaran-tsunami-2006',
    year: 2006,
    title: 'Gempa dan tsunami Pangandaran 2006',
    summary: 'Gempa di lepas pantai selatan Jawa pada 17 Juli 2006 memicu tsunami. Gelombangnya merusak kawasan pesisir Pangandaran dan daerah lain di pantai selatan Jawa.',
    impact: 'Peristiwa menjadi rujukan penguatan kesiapsiagaan tsunami di pesisir selatan Jawa.',
    region: 'Jawa',
    sources: [
      {
        title: 'Peringatan 20 Tahun Tsunami Pangandaran 2006: Refleksi Bangun Masyarakat Tangguh Tsunami',
        url: 'https://www.bmkg.go.id/berita/utama/bmkg-peringatan-20-tahun-tsunami-pangandaran-2006-refleksi-bangun-masyarakat-tangguh-tsunami',
        sourceName: 'BMKG'
      }
    ],
    category: 'disaster',
    date: '2006-07-17',
    period: 'republic',
    tags: ['Bencana', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'padang-earthquake-2009',
    year: 2009,
    title: 'Gempa Sumatra Barat 2009',
    summary: 'Gempa pada 30 September 2009 mengguncang Padang, Pariaman, dan kawasan Sumatra Barat. Rekaman seismik BMKG mendokumentasikan kejadian yang menimbulkan kerusakan berat di wilayah terdampak.',
    impact: 'Infrastruktur dan permukiman memerlukan pemulihan pascabencana.',
    region: 'Sumatera',
    sources: [
      {
        title: 'PeringatanTujuh Tahun Gempa Padang: Penyerahan Record Signal Gempa',
        url: 'https://www.bmkg.go.id/berita/kegiatan/peringatan-tujuh-tahun-gempa-padang-stageof-padang-panjang-serahkan-record-signal-gempa',
        sourceName: 'BMKG'
      }
    ],
    category: 'disaster',
    date: '2009-09-30',
    dateNote: 'Tidak memasukkan angka magnitudo karena beberapa laporan memakai hasil/label pengukuran berbeda; tanggal kejadian konsisten.',
    period: 'republic',
    tags: ['Bencana', 'Sumatera', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'merapi-eruption-2010',
    year: 2010,
    title: 'Rangkaian erupsi Merapi 2010',
    summary: 'Erupsi Merapi dimulai pada 26 Oktober 2010 dan berlanjut dengan aktivitas eksplosif serta awan panas. Laporan GVP mendokumentasikan pengungsian besar selama krisis vulkanik tersebut.',
    impact: 'Permukiman dan aktivitas masyarakat di sekitar Merapi terdampak, disertai perluasan evakuasi.',
    region: 'Jawa',
    sources: [
      {
        title: 'Global Volcanism Program — Merapi',
        url: 'https://volcano.si.edu/volcano.cfm?vn=263250',
        sourceName: 'Smithsonian GVP'
      }
    ],
    category: 'disaster',
    date: '2010-10-26',
    dateNote: 'Tanggal awal rangkaian erupsi; bukan seluruh episode atau puncak letusan November 2010.',
    period: 'republic',
    tags: ['Bencana', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'kelud-eruption-2014',
    year: 2014,
    title: 'Letusan Kelud 2014',
    summary: 'Kelud mengalami letusan besar pada 13 Februari 2014. Abu menyebar luas dan letusan menghancurkan kubah lava yang terbentuk pada episode sebelumnya.',
    impact: 'Penduduk dievakuasi dan gangguan abu memengaruhi aktivitas serta penerbangan.',
    region: 'Jawa',
    sources: [
      {
        title: 'Global Volcanism Program — Kelud: Eruptive History',
        url: 'https://volcano.si.edu/volcano.cfm?vn=263280',
        sourceName: 'Smithsonian GVP'
      }
    ],
    category: 'disaster',
    date: '2014-02-13',
    period: 'republic',
    tags: ['Bencana', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'lombok-earthquake-2018',
    year: 2018,
    title: 'Gempa Lombok 5 Agustus 2018',
    summary: 'Gempa kuat mengguncang Lombok Utara pada 5 Agustus 2018. BMKG mengeluarkan peringatan dini tsunami dan melanjutkan pemantauan gempa susulan.',
    impact: 'Kerusakan bangunan dan perpindahan penduduk memperluas kebutuhan tanggap darurat.',
    region: 'Nusa Tenggara',
    sources: [
      {
        title: 'Gempa Lombok Berpotensi Tsunami, BMKG: Jauhi Bibir Pantai',
        url: 'https://www.bmkg.go.id/siaran-pers/gempa-lombok-berpotensi-tsunami-bmkg-jauhi-bibir-pantai',
        sourceName: 'BMKG'
      }
    ],
    category: 'disaster',
    date: '2018-08-05',
    dateNote: 'Ini salah satu gempa utama dalam rangkaian Lombok 2018; tidak digabung dengan gempa 29 Juli atau 19 Agustus.',
    period: 'republic',
    tags: ['Bencana', 'Nusa Tenggara', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'palu-earthquake-tsunami-2018',
    year: 2018,
    title: 'Gempa dan tsunami Palu–Donggala 2018',
    summary: 'Gempa pada 28 September 2018 mengguncang Sulawesi Tengah dan diikuti tsunami di Teluk Palu. BMKG melakukan survei dan mendokumentasikan jejak gelombang di wilayah pesisir.',
    impact: 'Palu, Donggala, dan kawasan sekitar mengalami kerusakan serta operasi tanggap darurat.',
    region: 'Sulawesi',
    sources: [
      {
        title: 'Merekam Jejak Tsunami Palu 2018',
        url: 'https://www.bmkg.go.id/artikel/merekam-jejak-tsunami-palu-2018',
        sourceName: 'BMKG'
      },
      {
        title: 'Tsunami Hits the Palu Beach, Emergency Operation Continues',
        url: 'https://bnpb.go.id/berita/tsunami-hits-the-palu-beach-emergency-operation-continues',
        sourceName: 'BNPB'
      }
    ],
    category: 'disaster',
    date: '2018-09-28',
    period: 'republic',
    tags: ['Bencana', 'Sulawesi', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'sunda-strait-tsunami-2018',
    year: 2018,
    title: 'Tsunami Selat Sunda 2018',
    summary: 'Pada 22 Desember 2018, tsunami melanda pesisir Banten dan Lampung setelah aktivitas Anak Krakatau. Penjelasan BMKG menghubungkannya dengan longsor lereng gunung, bukan gempa tektonik.',
    impact: 'Permukiman dan kawasan wisata pesisir rusak, diikuti evakuasi dan penanganan darurat.',
    region: 'Jawa',
    sources: [
      {
        title: 'BMKG Ungkap Kronologi Tsunami Selat Sunda',
        url: 'https://www.bmkg.go.id/berita/utama/bmkg-ungkap-kronologi-tsunami-selat-sunda',
        sourceName: 'BMKG'
      }
    ],
    category: 'disaster',
    date: '2018-12-22',
    dateNote: 'Wilayah terdampak meliputi Banten di Jawa dan Lampung di Sumatra; region utama UI memakai Jawa.',
    period: 'republic',
    tags: ['Bencana', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'covid-first-reported-cases-2020',
    year: 2020,
    title: 'Kasus COVID-19 pertama yang dilaporkan di Indonesia',
    summary: 'Pemerintah Indonesia mengonfirmasi dua kasus COVID-19 pada 2 Maret 2020. WHO menyebut keduanya sebagai kasus pertama yang dilaporkan di Indonesia dan menekankan kesiapan respons kesehatan.',
    impact: 'Pengumuman menjadi tonggak respons nasional terhadap COVID-19.',
    region: 'Nasional',
    sources: [
      {
        title: 'Media Statement on confirmed COVID-19 cases',
        url: 'https://www.who.int/indonesia/news/detail/02-03-2020-media-statement-on-covid-19',
        sourceName: 'WHO Indonesia'
      }
    ],
    category: 'disease',
    date: '2020-03-02',
    dateNote: 'Tanggal pengumuman kasus terkonfirmasi pertama yang dilaporkan; bukan bukti virus baru pertama masuk pada hari itu.',
    period: 'republic',
    tags: ['Wabah', 'Nasional', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'semeru-pyroclastic-flow-2021',
    year: 2021,
    title: 'Awan panas guguran Semeru 2021',
    summary: 'Awan panas guguran Semeru pada 4 Desember 2021 mengarah ke Besuk Kobokan di Lumajang. Pengamatan vulkanik dan laporan pemerintah mencatat kerusakan permukiman serta penanganan pengungsi.',
    impact: 'Evakuasi, pencarian korban, dan pemulihan akses dilakukan di wilayah terdampak.',
    region: 'Jawa',
    sources: [
      {
        title: 'Aktivitas Vulkanik Gunung Semeru, Jawa Timur 4 Desember 2021',
        url: 'https://www.esdm.go.id/en/media-center/news-archives/aktivitas-vulkanik-gunung-semeru-jawa-timur-4-desember-2021',
        sourceName: 'Kementerian ESDM'
      },
      {
        title: 'Presiden Perintahkan Kepala BNPB Pastikan Penanganan Darurat Bencana Guguran Awan Panas Semeru',
        url: 'https://setkab.go.id/presiden-perintahkan-kepala-bnpb-pastikan-penanganan-darurat-bencana-guguran-awan-panas-semeru/',
        sourceName: 'Sekretariat Kabinet'
      }
    ],
    category: 'disaster',
    date: '2021-12-04',
    dateNote: 'Sumber ESDM terbit 5 Desember, tetapi siaran persnya bertanggal kejadian 4 Desember 2021.',
    period: 'republic',
    tags: ['Bencana', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'cianjur-earthquake-2022',
    year: 2022,
    title: 'Gempa Cianjur 2022',
    summary: 'Gempa pada 21 November 2022 mengguncang Cianjur dan sekitarnya. BMKG mendokumentasikan kejadian dan penyelidikan penyebab gempa dangkal tersebut.',
    impact: 'Kerusakan permukiman memicu tanggap darurat dan pemulihan di Cianjur.',
    region: 'Jawa',
    sources: [
      {
        title: 'Gempa Cianjur, Apa penyebabnya?',
        url: 'https://bbmkg2.bmkg.go.id/infografis/gempa-cianjur-apa-penyebabnya/',
        sourceName: 'BMKG Provinsi Banten'
      }
    ],
    category: 'disaster',
    date: '2022-11-21',
    period: 'republic',
    tags: ['Bencana', 'Jawa', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  {
    id: 'ruang-eruption-2024',
    year: 2024,
    title: 'Rangkaian erupsi Ruang 2024',
    summary: 'Ruang mengalami rangkaian erupsi pada April–Mei 2024. Katalog GVP mencatat awal episode pada 16 April, sementara laporan pemantauan mencatat ledakan kuat pada 17 dan 30 April.',
    impact: 'Krisis vulkanik memerlukan evakuasi penduduk dan pembatasan akses sekitar gunung.',
    region: 'Sulawesi',
    sources: [
      {
        title: 'Global Volcanism Program — Ruang: Eruptive History',
        url: 'https://volcano.si.edu/volcano.cfm?vn=267010',
        sourceName: 'Smithsonian GVP'
      },
      {
        title: 'Kenaikan Status G. Ruang dari Siaga ke AWAS, 17 April 2024',
        url: 'https://geologi.esdm.go.id/media-center/kenaikan-status-g-ruang-dari-siaga-ke-awas-17-april-2024',
        sourceName: 'Badan Geologi / PVMBG'
      }
    ],
    category: 'disaster',
    date: '2024-04-16',
    dateNote: 'Tanggal awal episode GVP; bukan tanggal tunggal seluruh ledakan besar. Katalog mencatat episode berakhir 7 Mei 2024.',
    period: 'republic',
    tags: ['Bencana', 'Sulawesi', 'Rekaman sejarah'],
    evidence: 'documented',
    researchedAt: '2026-11-11'
  },
  ...WIKIPEDIA_TIMELINE_EVENTS
];
