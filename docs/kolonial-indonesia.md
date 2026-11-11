# Snapshot kolonial dan Indonesia

Catatan riset untuk memperluas atlas kerajaan menjadi linimasa VOC/kolonial, masa peralihan, dan Republik Indonesia. Dibaca bersama [sumber crawl](sumber-crawl.md) dan [prosedur impor](crawling.md). Pemeriksaan dilakukan 11 November 2026. Dokumen ini memisahkan tanggal peristiwa dari rentang snapshot geometri.

## Sumber geometri yang diperiksa

Archive resmi [Cliopatria/Seshat](https://github.com/Seshat-Global-History-Databank/cliopatria) pada commit `5f433377139a6eeaeacbdc894b70f8805b72c8b5`, SHA-256 `e10a4e429fca708788ff9e7572a95fce801fae55852d217cffabc1c59cd4eed4`, anggota ZIP `cliopatria_polities_only_v021.geojson`. Lisensi publisher [CC BY 4.0](https://github.com/Seshat-Global-History-Databank/cliopatria/blob/5f433377139a6eeaeacbdc894b70f8805b72c8b5/LICENSE.md). [Metode ilmiah](https://doi.org/10.1038/s41597-025-04516-9) menjelaskan rekonstruksi; ketidakpastian sumber tetap berlaku.

| Label sumber persis | Ketersediaan yang diperiksa | Implikasi pemakaian |
| --- | --- | --- |
| `Dutch Republic` | 42 record global; bagian geometri yang beririsan bbox Nusantara 94°–142° BT / 12° LS–7° LU mulai snapshot 1609–1611 sampai 1794–1795 | Tidak ada label VOC tersendiri. Label tampilan VOC/Belanda merupakan padanan editorial atas bagian regional sumber, bukan bukti semua area dikendalikan langsung oleh perusahaan |
| `Batavian Republic` | 4 record global; record 1796–1802 memiliki geometri yang beririsan bbox tersebut | Snapshot melintasi pembubaran VOC; bila tanggal tampilan dipotong, simpan rentang asli dan aturan pemotongannya |
| `Dutch East Indies` | 35 record, 1800–1942 serta 1946–1949, dalam beberapa snapshot | Ada record 1895–1897 tetapi pemeriksaan bbox tidak menemukan poligon Nusantara. Jangan membuat wilayah pengganti hanya untuk mengisi kekosongan |
| `British Empire` | Record global ada tetapi nama tanpa tanda kurung ini tidak memberikan poligon yang beririsan bbox Nusantara pada pemeriksaan | Jangan menganggap layer Inggris tersedia hanya dari rentang keberadaan imperiumnya; perlu periksa nama/layer lain atau sumber peta tambahan |
| `Empire of Japan` | Geometri regional pada record tahunan 1942, 1943, 1944, 1945 | Jangan mengimpor seluruh kekaisaran dunia ke peta Indonesia. Data tahun tunggal tidak menyelesaikan perubahan kontrol dalam satu tahun |
| `Republic of Indonesia` | 9 snapshot, dirinci di bawah | Satu identitas negara dan satu warna untuk semua bagian MultiPolygon; bukan pewarnaan per provinsi |

Rentang `Republic of Indonesia` persis dalam archive: **1946; 1947–1948; 1949; 1950–1952; 1953–1959; 1960–1975; 1976–2005; 2006–2023; 2024**. Tidak tersedia poligon RI tahun 1945 pada label ini. Tanggal 1946 awal data **bukan** tanggal proklamasi atau berdirinya Republik.

Nama yang memakai tanda kurung, misalnya `(Dutch Republic)` atau `(Batavian Republic)`, juga ada sebagai fitur tersendiri; jangan mengimpor versi bertanda kurung dan tanpa tanda kurung sekaligus tanpa memeriksa duplikasi serta maksud agregasinya. Field `Type` saja belum cukup untuk membedakannya karena fitur yang diperiksa sama-sama dapat berlabel `POLITY`.

Bbox di atas hanyalah alat pemeriksaan dan pembatas kawasan produk. Bbox bukan batas Indonesia maupun batas legal kolonial. Bila importer memotong atau menyaring komponen geometri regional, simpan aturan, bbox, rentang asli, hash fitur asli, dan source revision pada metadata. Jangan menyebut geometri hasil crop “tanpa perubahan”.

## Kronologi peristiwa yang didukung sumber primer

### VOC dan peralihan administrasi Belanda

VOC dibentuk pada 1602. Monopoli dagang dan kewenangan kontrak, benteng, pengadilan, tentara, serta perang tidak sama dengan penguasaan daratan secara menyeluruh; karena itu poligon regional tidak boleh ditafsirkan sebagai seluruh Nusantara telah dijajah sejak 1602. [Nationaal Archief: VOC](https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/voc-1602-1800).

Pameran riset Huygens mencatat pembubaran VOC pada 1799. Tabel charter di pengantar arsip Nationaal Archief menampilkan charter terakhir sampai **31 Desember 1799**. Gunakan akhir 1799/awal 1800 sebagai batas label produk bila diperlukan, bukan menggeser koordinat poligon agar tampak sebagai peristiwa harian. [Huygens: De Rooswijk](https://rooswijk.huygens.knaw.nl/), [Nationaal Archief: pengantar arsip, Appendix 4](https://www.nationaalarchief.nl/sites/default/files/afbeeldingen/toegangen/NL-HaNA_1.04.02_introduction-VOC.pdf).

Pergantian lembaga sudah berlangsung sebelum akhir charter: Nationaal Archief menjelaskan penggantian pengurus VOC oleh Comité pada Desember 1795, lalu penerusnya Raad der Aziatische Bezittingen pada 1800. Ini alasan tambahan untuk mempertahankan label sumber dan tidak menyederhanakan semua poligon sebelum 1800 sebagai satu bentuk pemerintahan yang identik. [Inventaris lembaga VOC](https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/overzicht-van-voc-archieven-1594-1814).

### Masa Inggris dan Jepang

British Library menyimpan transkrip administrasi Raffles untuk Jawa dan wilayah tanggungannya pada September 1811–Maret 1816. National Library Board Singapura menjelaskan pengembalian Jawa kepada Belanda pada 1816. Catat **1811–1816** sebagai interregnum Inggris di Jawa; jangan menafsirkannya sebagai seluruh Indonesia sekarang berada di bawah satu kontrol Inggris. [British Library, Mss Eur F202/8](https://searcharchives.bl.uk/catalog/040-002360253), [NLB: surat Raffles](https://biblioasia.nlb.gov.sg/all-sections/vol-8-issue-2-jul-2012-singapore-raffles-founding-letters/).

ANRI memberi periode **1942–1945** untuk pendudukan Jepang dalam sejarah lembaga arsipnya. Label atlas dapat memakai periode ini, tetapi snapshot tahunan 1942 atau 1945 perlu catatan bahwa penyerahan/kontrol berubah selama tahun tersebut. [Sejarah ANRI](https://www.anri.go.id/profil/sejarah).

### Republik, RIS, dan negara kesatuan

UUDS 1950 mengakui proklamasi **17 Agustus 1945**, fase republik kesatuan dan federasi, serta perubahan kembali menjadi Republik Indonesia berbentuk kesatuan. Pasal II menetapkan mulai berlaku **17 Agustus 1950**. Ini merupakan sumber primer untuk penanda negara kesatuan; jangan menjadikan awal poligon 1950 sebagai klaim bahwa Republik baru lahir pada 1950. [Naskah UUDS 1950, JDIH Kemenkeu](https://www.jdih.kemenkeu.go.id/api/download/fullText/1950/UUDSTAHUN~1950UUDS.HTM), [metadata UU 7/1950, JDIH DPR](https://jdih.dpr.go.id/setjen/detail-dokumen/tipe/uu/id/1657).

Jika mulai 1950 peta utama hanya menampilkan satu warna Indonesia, itu adalah **pilihan tingkat tampilan negara**, bukan bukti tidak ada lagi institusi kerajaan, konflik regional, maupun perubahan wilayah setelah 1950. Snapshot kesultanan lama sebaiknya tetap disimpan untuk arsip dan tinjauan walau tidak ditumpuk di layer nasional default.

## Dua ketidakpresisian penting pada poligon RI

### Papua / Irian Barat

PBB menjelaskan UNTEA memiliki kewenangan administrasi mulai 1 Oktober 1962 sampai penyerahannya kepada Indonesia pada **1 Mei 1963**. Karena snapshot Cliopatria bertajuk RI mencakup **1960–1975**, ia terlalu kasar untuk menggambarkan perubahan 1962/1963 secara tepat. Jangan menyatakan geometri snapshot itu membuktikan wilayah yang sama sudah menjadi Indonesia sepanjang 1960. [UNSF: latar belakang resmi](https://police.un.org/sites/default/files/past/unsfbackgr.html).

### Timor Timur / Timor-Leste

Sumber PBB mencatat konsultasi rakyat 1999, administrasi transisi PBB, lalu kemerdekaan Timor-Leste pada **20 Mei 2002**. Rentang RI **1976–2005** pada dataset tidak boleh diartikan sebagai validasi penguasaan atau kedaulatan Indonesia yang seragam sampai 2005. Tampilkan catatan sumber atau gunakan sumber geometri lain yang terverifikasi bila produk membutuhkan ketepatan tahun-tahun transisi. [UNTAET: kronologi](https://peacekeeping.un.org/sites/default/files/past/etimor/Untaetchrono.html), [UNMISET: latar belakang](https://peacekeeping.un.org/sites/default/files/past/unmiset/background.html).

## Tahun setelah 2024

Cliopatria yang dipin berakhir pada 2024. Jangan meneruskan snapshot 2024 ke tahun berjalan lalu tetap melabelinya sebagai snapshot sejarah sumber tersebut.

Jika produk perlu satu warna Indonesia pada tahun terkini, gunakan **layer kontemporer terpisah** dari `Natural Earth Admin 0 – Countries` yang sudah menjadi sumber geografi modern proyek. Identitas negara tetap Indonesia, namun provenance, versi/hash, dan catatan harus menyebut **peta modern / contemporary layer**, bukan rekonstruksi poligon tahunan. Bila ditampilkan untuk 2025–tahun berjalan, jelaskan bahwa interval itu adalah aturan tampilan produk setelah cakupan Cliopatria, bukan tanggal pembaruan atau verifikasi batas pada setiap tahun. [Sumber Natural Earth di repository publisher](https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_10m_admin_0_countries.geojson).

Natural Earth memakai kebijakan batas **de facto** dan menyediakan penanganan batas sengketa/varian sudut pandang; bukan survei legal batas nasional Indonesia. Datanya domain publik dan dapat dimodifikasi/didistribusikan. [Kebijakan batas Natural Earth](https://www.naturalearthdata.com/about/disputed-boundaries-policy/), [ketentuan penggunaan](https://www.naturalearthdata.com/about/terms-of-use/).

Simpan seluruh pulau sebagai satu Feature/MultiPolygon dengan satu `id` Indonesia dan satu warna. Ini menghindari pecah warna per pulau/provinsi tanpa menghilangkan sumber tiap snapshot.
