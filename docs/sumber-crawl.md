# Riset sumber untuk koleksi sejarah Indonesia

Diperiksa pada 11 November 2026. Ini daftar sumber dan jalur pengambilan, bukan klaim bahwa seluruh sejarah Indonesia sudah terhimpun. Endpoint yang disebut **terdokumentasi** mempunyai dokumentasi resmi; itu tidak otomatis berarti akses jaringan dari lingkungan crawler sudah berhasil. Hasil eksekusi crawler, jumlah record, dan kegagalan harus dilihat pada log crawl.

## Fokus atlas: kerajaan dan poligon wilayah menurut periode

Kebutuhan utama atlas adalah **wilayah kerajaan yang diwarnai dan berubah menurut tahun**, bukan sekumpulan pin situs. Teks dan gambar pada bagian selanjutnya menjadi pelengkap profil kerajaan dan bukti sumber. Wilayah tidak boleh dibentuk dari buffer titik candi, batas provinsi modern, atau polygon yang direka.

### Cliopatria: kandidat utama yang sudah diunduh dan diperiksa

Sumber primer: [repository resmi Seshat/Cliopatria](https://github.com/Seshat-Global-History-Databank/cliopatria), [LICENSE.md](https://raw.githubusercontent.com/Seshat-Global-History-Databank/cliopatria/main/LICENSE.md), [artikel metode, DOI 10.1038/s41597-025-04516-9](https://doi.org/10.1038/s41597-025-04516-9), dan [salinan artikel pada repositori University of California](https://escholarship.org/content/qt21t5k2gq/qt21t5k2gq.pdf).

**Download langsung yang berhasil pada pemeriksaan ini:**

```text
https://raw.githubusercontent.com/Seshat-Global-History-Databank/cliopatria/main/cliopatria.geojson.zip
```

Berkas unduhan sekitar 44 MB; isi archive yang benar pada pemeriksaan ini adalah `cliopatria_polities_only_v021.geojson`, bukan `cliopatria.geojson`. Hasil pembacaan JSON lokal: **13.797 fitur**. SHA-256 archive: `e10a4e429fca708788ff9e7572a95fce801fae55852d217cffabc1c59cd4eed4`. URL `main` dapat berubah; simpan checksum dan pin commit/tag untuk impor yang dapat diulang. [Zenodo yang ditautkan proyek](https://zenodo.org/records/13363121) adalah arsip versi; record tersebut bertanda ada versi lebih baru, jadi jangan menganggapnya identik dengan file `main`.

[Skema resmi](https://raw.githubusercontent.com/Seshat-Global-History-Databank/cliopatria/main/README.md): GeoJSON EPSG:4326 dengan `Name`, `FromYear`, `ToYear`, `Area`, `Type`, `Wikipedia`, `Wikidata`, `SeshatID`; baris memiliki periode tahun inklusif. Dataset global mencakup 3400 SM–2024 M dan satu entitas dapat mempunyai banyak geometri lintas waktu. `Type=RELATION` dan keanggotaan entitas bukan otomatis kerajaan mandiri. Lisensi data adalah **CC BY 4.0**: kredit pencipta/sumber, tautan lisensi, dan keterangan perubahan wajib dipertahankan.

Berikut **hasil inspeksi archive aktual**, bukan daftar perkiraan berdasarkan homepage. Rentang di tabel adalah minimum/maksimum tahun record yang tersedia dengan nama tersebut; bukan pernyataan tanggal pasti berdiri/runtuh dan tidak menjamin setiap tahun di antaranya terwakili.

| Nama persis dalam data | Jumlah record | Rentang record Masehi |
| --- | ---: | --- |
| Tarumanagara | 4 | 367–673 |
| Sunda Kingdom | 13 | 674–1578 |
| Srivijaya | 8 | 674–1293 |
| Mataram Kingdom | 2 | 741–1009 |
| Early Balinese Kingdoms | 4 | 922–1343 |
| Kediri Kingdom | 4 | 1046–1226 |
| Singhasari | 2 | 1227–1293 |
| Samudera Pasai Sultanate | 5 | 1272–1520 |
| Majapahit | 8 | 1294–1518 |
| Demak Sultanate | 3 | 1475–1551 |
| Sultanate of Bone | 3 | 1512–1858 |
| Sultanate of Gowa | 2 | 1512–1669 |
| Sultanate of Aceh | 16 | 1516–1959 |
| Sultanate of Banten | 6 | 1529–1808 |
| Mataram Sultanate | 7 | 1588–1743 |
| Kutai Kingdom | 2 | 1648–1733 |
| Sultanate of Kutai Kartanegara | 2 | 1734–1845 |

**Kutai Kingdom 1648–1733 tidak boleh disamakan dengan kerajaan dalam prasasti Yupa awal.** Nama mengandung “Kalinga” pada dataset juga bukan bukti otomatis kerajaan Kalingga di Jawa: hasil yang ditemukan berperiode SM. Pencocokan nama perlu QID/Wikipedia, lokasi geometri, dan kurasi.

Makalah metode menjelaskan polygon berasal dari konversi peta raster berwarna dan penyuntingan; resolusi asal terbatas, tepian dihaluskan, dan ketidakpastian/sengketa batas belum dikodekan penuh. Gunakan label **rekonstruksi wilayah menurut Cliopatria**, bukan “batas kerajaan terverifikasi”. Kedaulatan langsung, upeti, pengaruh, dan klaim tidak dapat dibedakan hanya dari satu bidang berwarna. Jangan memperpanjang baris yang berakhir 2024 hingga 2026 tanpa sumber baru. Sumber ini memberi basis implementasi yang nyata, tetapi bukan cakupan lengkap semua kerajaan/periode.

### OpenHistoricalMap: pelengkap temporal, cakupan Nusantara perlu audit

[Dokumentasi reuse resmi OHM](https://wiki.openstreetmap.org/wiki/OpenHistoricalMap/Reuse) menyediakan tileset poligon administratif dengan properti `start_decdate` dan `end_decdate`. **TileJSON yang berhasil dibaca:** [`https://vtiles.openhistoricalmap.org/maps/ohm_admin.json`](https://vtiles.openhistoricalmap.org/maps/ohm_admin.json). Pada respons pemeriksaan ini, layer bernama `boundaries` dan URL tile adalah `https://vtiles.openhistoricalmap.org/maps/ohm_admin/{z}/{x}/{y}`. Baca template dari TileJSON, jangan mengasumsikan ekstensi `.pbf`.

Data utama OHM umumnya domain publik/CC0, dengan pengecualian berlisensi per objek; layer landmass OpenStreetMap memiliki ODbL dan bukan lisensi yang sama. [FAQ OHM](https://wiki.openstreetmap.org/wiki/Open_Historical_Map/FAQ) menjelaskan pengecualian melalui tag `license=*`. Cakupan kerajaan Indonesia belum diverifikasi pada riset ini; jangan menjanjikan Tarumanagara/Majapahit tersedia hanya karena layer global ada. Ekspor objek perlu memeriksa sumber dan lisensinya, bukan menyalin tile tanpa provenance.

### Seshat dan World Historical Gazetteer

**Seshat** adalah pengelola Cliopatria; untuk geometri unduhan gunakan archive resmi di atas. [Codebook Seshat](https://seshatdatabank.info/sites/g/files/vzsiac1631/files/seshatdatabank/documents/media/code-book-4.20.2021.pdf) membantu menafsirkan entitas politik. Jangan mengasumsikan lisensi seluruh variabel Seshat sama dengan lisensi geometri Cliopatria.

**WHG** berguna untuk identitas tempat/nama dan provenance. [Model data WHG v4](https://docs.whgazetteer.org/content/v4/data-model/overview.html) memang dapat menampung Point maupun Polygon/MultiPolygon, interval waktu, ketepatan spasial, serta lisensi dataset. Kemampuan model tersebut bukan bukti koleksi poligon kerajaan Indonesia tersedia. Belum ditemukan unduhan kerajaan Nusantara yang terverifikasi dari WHG pada pemeriksaan ini; bukan sumber default wilayah berwarna.

### Aturan impor wilayah kerajaan

Simpan satu profil kerajaan terpisah dari banyak record wilayah/periode. Tiap wilayah perlu identitas sumber/baris, rentang tahun, geometry, URL sumber, versi/checksum, lisensi, status kurasi, dan interpretasi batas (`rekonstruksi`, `kekuasaan langsung`, `upeti`, `pengaruh`, `klaim`, atau `belum dibedakan`). Pertahankan nama asli; label Indonesia boleh menjadi field tambahan. Warna adalah keputusan tampilan stabil per kerajaan, bukan bukti historis. Tidak ada geometri untuk suatu periode berarti data belum tersedia, bukan bukti wilayah itu kosong atau kerajaan tidak pernah ada.

## Cakupan waktu yang masuk akal

Gunakan koleksi lintas periode dari bukti tertulis awal Nusantara, kerajaan, kolonial, pergerakan nasional, kemerdekaan, sampai tahun kalender berjalan. Jangan menjadikan tahun 700 sebagai batas bawah korpus. Namun jangan pula menyamakan tanggal paling awal dalam database dengan “awal sejarah Indonesia”. Penanggalan dan batas geografis klaim harus ikut disimpan.

Untuk titik awal riset keberaksaraan, [Prasasti Batu: Pembacaan Ulang dan Alih Aksara Bagian II, Museum Nasional dalam repositori Kementerian Kebudayaan](https://repositori.kemenbud.go.id/id/eprint/6016/) membahas prasasti Muara Kaman/Yupa. [Publikasi Belajar Bersama Ganesha pada repositori pendidikan](https://repositori.kemendikdasmen.go.id/10859/1/Belajar%20Bersama%20Ganesha.pdf) menempatkan Yupa pada abad ke-5; [modul aksara resmi](https://sirungbasa.kemendikdasmen.go.id/modul/BA_aksara.pdf) menyebut setidaknya abad IV. Simpan penanggalan sebagai kisaran/pernyataan sumber dan perbedaan pendapat, bukan mengubahnya menjadi satu tanggal pasti.

Tahun akhir dihitung saat proses berjalan; pada pemeriksaan ini 2026. Artikel peristiwa 2026 adalah catatan berjalan yang bisa berubah. Tanggal publikasi artikel, tanggal revisi Wikipedia, tanggal peristiwa, dan tanggal pengambilan merupakan field berbeda.

## Sumber yang paling siap untuk tahap pertama

### Wikipedia Indonesia dan Inggris: teks dengan revisi

**Status: API resmi terdokumentasi; cocok untuk koleksi awal dan penemuan rujukan.** Wikipedia adalah sumber sekunder, bukan pengganti prasasti, arsip, atau penelitian asli.

- Endpoint Action API Indonesia: `https://id.wikipedia.org/w/api.php`; Inggris: `https://en.wikipedia.org/w/api.php`.
- Temukan artikel melalui pencarian atau [categorymembers](https://www.mediawiki.org/wiki/API:Categorymembers). Ikuti token `continue` dan batasi kedalaman kategori; kategori tidak menjamin semua anggota relevan.
- Ambil teks/revisi dengan [revisions API](https://www.mediawiki.org/wiki/API:Revisions): `action=query`, `prop=revisions`, `rvprop=ids|timestamp|content`, `rvslots=main`, `format=json`, `formatversion=2`, `redirects=1`, dan `titles=...`.
- Untuk HTML dan metadata halaman, pertimbangkan [MediaWiki REST API](https://www.mediawiki.org/wiki/API:REST_API/Reference), misalnya `/w/rest.php/v1/page/{title}/with_html`. Jangan menjalankan skrip yang terkandung dalam HTML eksternal.
- Simpan URL artikel, page ID, revision ID, permalink revisi, bahasa, waktu pengambilan, checksum, lisensi, dan pranala riwayat/kontributor. Untuk publikasi ulang teks, pertahankan atribusi dan ketentuan lisensi artikel; lihat [kebijakan akses dan penggunaan ulang Wikimedia](https://www.mediawiki.org/wiki/Wikimedia_APIs/Access_policy).

Daftar judul awal untuk **diselesaikan melalui API**, bukan dianggap pasti ada dengan ejaan tersebut: Sejarah Indonesia, Yupa, Kutai Martapura, Tarumanagara, Sriwijaya, Kerajaan Medang, Singhasari, Majapahit, Kesultanan Samudera Pasai, Kesultanan Demak, Kesultanan Ternate, Kesultanan Gowa, VOC, Hindia Belanda, Perang Diponegoro, Budi Utomo, Sumpah Pemuda, Pendudukan Jepang di Indonesia, Proklamasi Kemerdekaan Indonesia, Revolusi Nasional Indonesia, Konferensi Asia Afrika, Demokrasi Terpimpin, Orde Baru, Reformasi Indonesia, Tsunami Samudra Hindia 2004, serta `{tahun berjalan} di Indonesia`. Catat judul hilang/redirect; jangan membuat teks pengganti seolah hasil crawl.

### Wikimedia Commons: gambar dengan metadata lisensi

**Status: API resmi terdokumentasi; cocok untuk ilustrasi dan foto arsip yang lisensinya jelas.** Gambar di artikel Wikipedia tidak otomatis berasal dari Commons atau bebas digunakan.

Endpoint: `https://commons.wikimedia.org/w/api.php`. Gunakan [imageinfo](https://www.mediawiki.org/wiki/API:Imageinfo) dengan `iiprop=url|mime|size|sha1|extmetadata`, `titles=File:...`, dan opsional `iiurlwidth=...`. `extmetadata` mahal; ambil sedikit file per permintaan. Simpan URL berkas asli, thumbnail, halaman deskripsi, nama file, jenis MIME, checksum, pembuat/artist, kredit, `LicenseShortName`, `LicenseUrl`, dan ketentuan atribusi. Metadata berformat HTML perlu dibersihkan sebelum ditampilkan.

[Pedoman penggunaan ulang Commons](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia) menjelaskan bahwa syarat berbeda per file. Lisensi kosong/tidak dikenal harus masuk antrean pemeriksaan, bukan diberi label bebas pakai. URL thumbnail saja belum cukup sebagai dokumentasi hak penggunaan.

### Wikidata: identitas dan tanggal terstruktur

**Status: akses JSON/SPARQL resmi terdokumentasi; cocok untuk pengayaan dan penghubung entitas.** [Data terstruktur Wikidata disediakan dengan CC0](https://www.wikidata.org/wiki/Help:Data_access). Teks Wikipedia dan gambar Commons tetap mengikuti lisensi masing-masing.

- Contoh endpoint JSON yang dapat dibaca: [`https://www.wikidata.org/wiki/Special:EntityData/Q252.json`](https://www.wikidata.org/wiki/Special:EntityData/Q252.json) (Indonesia).
- Hubungkan artikel dengan QID, simpan statement dan references; jangan menganggap setiap pernyataan punya sumber.
- [Model tanggal Wikidata](https://www.wikidata.org/wiki/Help:Dates) menyimpan nilai waktu, precision, calendar model, dan qualifiers. Precision 7 berarti abad, 8 dekade, 9 tahun, 10 bulan, 11 hari. Jangan mengubah penanggalan abad menjadi 1 Januari pada satu tahun pasti.
- Tahun pendirian, awal peristiwa, akhir peristiwa, tanggal lahir, dan tanggal penerbitan berbeda makna. Simpan properti asal dan precision, termasuk pernyataan bertentangan/unknown.

## Sumber lanjutan: penting tetapi belum menjadi izin crawl massal

| Sumber | Nilai untuk riset | Status dan langkah berikutnya |
| --- | --- | --- |
| [ANRI: layanan SIKN/JIKN](https://anri.go.id/layanan-publik/sikn-dan-jikn) | Arsip lintas lembaga; katalog dan salinan digital | Keberadaan layanan akses publik terkonfirmasi. Endpoint bulk/API terbuka dan lisensi seluruh objek belum terkonfirmasi; mulai dari metadata/pranala per arsip dan konsultasikan izin pemanfaatan |
| [Khastara Perpusnas](https://khastara.perpusnas.go.id/?open=Home) | Naskah, buku langka, foto, gambar, peta, terbitan lama | Portal koleksi terkonfirmasi; hak salinan digital dan kemungkinan API/OAI perlu diperiksa per koleksi. [Perpusnas menjelaskan fungsi portal](https://www.perpusnas.go.id/berita/jelajahi-sejarah-bangsa-bersama-khastara) |
| [Repositori Kementerian Kebudayaan](https://repositori.kemenbud.go.id/id/eprint/6016/) | Publikasi museum/arkeologi; konteks dan pembacaan prasasti | Halaman dokumen terkonfirmasi. Periksa lisensi PDF, hak foto, robots, serta endpoint ekspor yang benar-benar tersedia; jangan menebak URL OAI sebagai API yang sudah diuji |
| [Registrasi Cagar Budaya: Prasasti Yupa D.176](https://budaya.data.kemdikbud.go.id/cagarbudaya/objek/KB001728) | Identitas objek dan SK penetapan | Contoh record resmi ditemukan. Koordinat record ditampilkan nol: jangan dipakai sebagai lokasi arkeologis. Tanggal SK bukan tanggal pembuatan prasasti |
| [UNESCO WHC: Prambanan](https://whc.unesco.org/en/list/642) | Deskripsi situs, evaluasi, dokumen nominasi | Bagian deskripsi menampilkan lisensi CC-BY-SA IGO 3.0; hak gambar/dokumen lain perlu dilihat terpisah. Jangan mengasumsikan seluruh situs berlisensi sama |
| Blog/majalah sejarah, misalnya Historia | Penemuan topik, wawancara, rujukan lanjutan | Kandidat editorial; akses endpoint, robots, dan izin reuse belum diverifikasi pada riset ini. Simpan link/metadata dahulu. Jangan memasukkan teks penuh/foto ke publik tanpa dasar lisensi/izin |

UNESCO menyediakan [XML/RSS/KML/XLS pada halaman syndication](https://whc.unesco.org/en/syndication), tetapi aturan halaman tersebut membatasi penggunaan dan mensyaratkan otorisasi untuk syndication/republication. Bagian yang tidak disediakan untuk syndication dilarang di-scrape menurut ketentuan itu. Karena ada pula lisensi khusus pada bagian deskripsi situs, tinjau materi dan jalur lisensinya secara spesifik; UNESCO bukan default crawler massal untuk seluruh HTML/fotonya.

## Blog WordPress, RSS, dan situs lain

[REST API WordPress bersifat per situs](https://developer.wordpress.org/rest-api/reference/). Bentuk umum `/wp-json/wp/v2/posts` bukan jaminan sebuah blog mengaktifkannya. Gunakan [discovery lewat Link header/elemen HTML](https://developer.wordpress.org/rest-api/using-the-rest-api/discovery/) dan catat endpoint yang benar-benar merespons.

[WordPress.com mendokumentasikan feed `/feed/` untuk situs publik](https://wordpress.com/support/feeds/); [WordPress juga mendukung beberapa format feed](https://developer.wordpress.org/advanced-administration/wordpress/feeds/). RSS cocok untuk menemukan pembaruan, judul, penulis, tanggal publikasi, dan URL. Ketersediaan feed/API bukan lisensi menyalin seluruh tulisan atau gambar. Bila izin belum jelas, koleksi menyimpan metadata dan tautan; kurator menulis ringkasan sendiri berdasarkan pemeriksaan sumber.

Untuk adapter situs non-Wikimedia, tetapkan allowlist domain, aturan robots, batas kedalaman, selector/format, izin teks/gambar, dan contoh fixture sebelum mengaktifkan pengambilan. Jangan melewati login, CAPTCHA, atau blok akses. Hindari merayapi situs umum hanya berdasarkan keyword “sejarah”.

## Aturan operasional crawler

[Wikimedia mewajibkan identifikasi User-Agent bermakna dengan informasi kontak](https://www.mediawiki.org/wiki/Wikimedia_APIs/Access_policy), bukan hanya user-agent bawaan library. Gunakan kontak operator yang sebenarnya, bukan alamat contoh. [Pedoman rate limit 2026](https://www.mediawiki.org/wiki/Wikimedia_APIs/Rate_limits) menyarankan maksimal tiga request serentak, permintaan tidak berulang tanpa perlu, dan menghormati `Retry-After`. Untuk proyek ini satu request pada satu waktu dengan jeda konservatif sudah cukup; angka kuota dapat berubah.

Simpan status HTTP, waktu UTC, content-type, checksum, parameter crawl, versi adapter, serta error 429/503. Gunakan timeout, cache, retry terbatas dan backoff. Jangan menulis halaman error/halaman hilang sebagai artikel sukses. Untuk jumlah sangat besar, evaluasi [dump resmi Wikimedia](https://dumps.wikimedia.org/) alih-alih membebani API.

## Prioritas implementasi dan kurasi

1. Isi korpus Wikipedia lintas periode dari daftar judul/penelusuran terkontrol. Pertahankan revisi dan lisensi. Cakupan dihitung dari record aktual; daftar seed bukan bukti semua era terwakili.
2. Ambil metadata gambar Commons dan unduh hanya file dengan metadata penggunaan yang memadai. Periksa foto modern versus foto artefak, tanggal foto, objek yang ditampilkan, dan atribusi.
3. Hubungkan Wikidata untuk koordinat/tanggal berprecision dengan referensi; simpan unknown bila tidak tersedia, jangan isi koordinat nol sebagai nilai default.
4. Tinjau sumber primer ANRI, Perpusnas, museum, dan penelitian untuk memverifikasi klaim. Tambahkan adapter setelah format dan izin terbukti.
5. Kurator memisahkan artikel, peristiwa, tokoh, artefak, dan lokasi. Hanya record yang punya lokasi/tanggal yang telah ditinjau dipromosikan ke atlas. Artikel panjang bukan otomatis satu peristiwa atau satu situs.
6. Perbarui topik tahun berjalan secara berkala dengan hasil crawl idempoten. Riwayat revisi dan status kurasi tidak boleh hilang karena crawl ulang.
