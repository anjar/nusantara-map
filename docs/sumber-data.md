# Sumber data

## Inventaris dataset awal

Tabel ini mendokumentasikan rujukan yang **tercantum dalam dataset**, bukan hasil verifikasi ulang isi halaman. Dataset berisi delapan situs dengan status awal `Kurasi awal · periode ilustratif`. Koordinat merupakan perkiraan/kawasan. Rentang tahun adalah filter demonstrasi atlas, bukan bukti penggunaan aktif situs setiap tahun.

| ID | Situs | Rujukan tercatat | Catatan |
| --- | --- | --- | --- |
| trowulan | Trowulan | [UNESCO: Trowulan](https://whc.unesco.org/en/tentativelists/5466/) | Kawasan; bukan titik pasti keraton |
| bajang-ratu | Gapura Bajang Ratu | [UNESCO: kawasan Trowulan](https://whc.unesco.org/en/tentativelists/5466/) | Sumber kawasan; tanggal bangunan belum dikurasi |
| tikus | Candi Tikus | [UNESCO: kawasan Trowulan](https://whc.unesco.org/en/tentativelists/5466/) | Fungsi ritual/tata air perlu sumber spesifik |
| wringin | Gapura Wringin Lawang | [UNESCO: kawasan Trowulan](https://whc.unesco.org/en/tentativelists/5466/) | Fungsi dan tanggal belum dipastikan |
| penataran | Candi Penataran | [Portal Kebudayaan](https://kebudayaan.kemdikbud.go.id/) | Masih homepage untuk riset lanjutan; ganti dengan artikel/prasasti spesifik |
| singosari | Candi Singosari | [Portal Kebudayaan](https://kebudayaan.kemdikbud.go.id/) | Masih homepage; bukan bukti afiliasi kerajaan pada tahun filter |
| borobudur | Candi Borobudur | [UNESCO: Borobudur Temple Compounds](https://whc.unesco.org/en/list/592/) | Rentang atlas bukan masa penggunaan aktif yang diverifikasi |
| prambanan | Candi Prambanan | [UNESCO: Prambanan Temple Compounds](https://whc.unesco.org/en/list/642/) | Rentang atlas ilustratif |

## Geografi dan Garis Pantai Purba (Paleoshoreline)

Berkas `public/data/indonesia.geojson` adalah geometri Indonesia modern yang diekstrak dari [Natural Earth Admin 0 1:10m](https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_10m_admin_0_countries.geojson). Atribusi yang sudah ada: [ketentuan Natural Earth](https://www.naturalearthdata.com/about/terms-of-use/) menyatakan domain publik. Lihat juga `public/data/README.md`.

### Rekonstruksi Paparan Sunda & Sahul (Zaman Es)
Pada era prasejarah (khususnya 20.000 SM s/d 8.000 SM), penurunan permukaan laut global membuka daratan paparan benua (continental shelf):
- **Paparan Sunda (Sundaland)**: Menghubungkan daratan Asia Tenggara dengan Sumatera, Jawa, dan Kalimantan.
- **Paparan Sahul**: Menghubungkan daratan Papua / New Guinea dengan benua Australia.
- **Wallacea**: Kepulauan antara kedua paparan (Sulawesi, Nusa Tenggara, Maluku) tetap terpisah oleh palung laut dalam.

Berkas data tersimpan di `public/data/`:
- `paleoshoreline-120m.geojson`: Puncak Zaman Es (LGM, ~18.000–20.000 SM)
- `paleoshoreline-75m.geojson`: Deglasiasi awal (~14.000–12.000 SM)
- `paleoshoreline-50m.geojson`: Pasca-glasial (~10.000 SM)
- `paleoshoreline-25m.geojson`: Holosen awal (~8.000 SM)

Rujukan & dataset:
1. [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps) (CC BY-SA 4.0) — rekonstruksi poligon daratan prasejarah.
2. [DeanChensj/jiangshan-map](https://github.com/DeanChensj/jiangshan-map) — inspirasi pola arsitektur linimasa kronologi peristiwa (event drawer), toponim dinamis, dan visual relief.
3. Lambeck, K., et al. (2014). *Sea level and global ice volumes from the Last Glacial Maximum to the Holocene*. PNAS.
4. Molengraaff, G. A. F., & Weber, M. (1921). *On the relation between the Pleistocene glacial period and the origin of the Sunda Sea*.
5. Voris, H. K. (2000). *Maps of Pleistocene sea levels in Southeast Asia: shorelines, river systems and time durations*. Journal of Biogeography.

### Geografi Kawasan Nusantara & Negara Tetangga
Berkas `public/data/neighbors.geojson` melengkapi peta dasar dengan negara-negara di lingkar budaya Nusantara:
- **Malaysia** (Semenanjung & Sabah/Sarawak di Borneo utara)
- **Brunei Darussalam** (pesisir utara Borneo)
- **Singapura**, **Timor Leste**, dan **Papua Nugini**

Setiap entitas memiliki warna isian (*fill color*) dan garis tepi (*stroke*) tersendiri yang harmonis dengan palet atlas kertas (*parchment*).

### Relief Terrain & Aliran Sungai
- **Shaded Relief Terrain**: Ubin raster bukit dan lereng pegunungan dari Esri World Shaded Relief / USGS.
- **Sistem Sungai (`rivers.geojson`)**:
  - *Sungai Purba*: Sungai Sunda Utara (Molengraaff River), Sungai Sunda Timur, dan Sungai Sahul Purba yang aktif saat Zaman Es.
  - *Sungai Modern*: Kapuas, Barito, Mahakam, Musi, Batanghari, Bengawan Solo, Brantas, Mamberamo, Digul.
- **Puncak Gunung (`mountains.geojson`)**: Puncak-puncak utama (Puncak Jaya, Kerinci, Rinjani, Semeru, Kinabalu, Latimojong, dll).

### Nama Wilayah Dinamis Sesuai Linimasa (`region-names.ts`)
Label nama kepulauan dan kawasan beradaptasi otomatis terhadap tahun yang dipilih:
- Zaman Es (≤ -4000 SM): Paparan Sunda, Lembah Jawa Purba, Sahul, Wallacea.
- Era Hindu-Buddha (400–1300 M): Swarnabhumi/Swarnadwipa, Yawadwipa, Warunadwipa, Po-ni, Kedah Tua/Langkasuka.
- Era Majapahit (1300–1500 M): Bhumi Malayu, Bhumi Jawa, Tanjungpura, Barune, Hujung Medini, Maluku Dwipa, Wwanin & Sran.
- Era Kesultanan (1500–1800 M): Pulau Perca/Andalas, Tanah Jawa, Borneo, Kesultanan Brunei, Tanah Melayu, Spice Islands.
- Era Kolonial (1800–1945 M): Hindia Belanda (Java, Sumatra, Borneo, Celebes), British Malaya, British North Borneo, British Brunei.
- Era Modern (1945+ / 1963+ M): Indonesia, Malaysia, Brunei Darussalam, Singapura.

Ini bukan garis pantai historis, wilayah kerajaan, ataupun klaim kekuasaan. Tidak ada data atau aset OldMapsOnline yang diambil dalam proyek.

## Saat menambah sumber

Catat URL artikel langsung, judul, penerbit, tanggal akses, bagian/halaman yang mendukung klaim, izin penggunaan, serta ketidakpastian lokasi dan tanggal. Skema saat ini menampung satu rujukan utama melalui `sourceUrl` dan `sourceTitle`; rincian tambahan dapat dicatat pada deskripsi atau dokumen sumber di folder ini. Jangan mengubah status menjadi terverifikasi hanya karena URL berhasil diakses.

Sumber arkeologi, prasasti, laporan konservasi, dan publikasi ilmiah perlu diprioritaskan untuk penanggalan spesifik. Link homepage saja belum cukup untuk mendukung klaim per situs.
