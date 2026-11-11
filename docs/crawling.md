# Crawling dan impor wilayah kerajaan

Skrip untuk mengubah Markdown artikel menjadi kandidat event ada di [`scripts/markdown_to_event.py`](../scripts/markdown_to_event.py); lihat [panduan impor Markdown](markdown-import.md). Kebijakan, endpoint, dan lisensi sumber crawl ada di [sumber-crawl.md](sumber-crawl.md).

## Markdown ke draf event

Hasil export plugin Web-to-Markdown bisa diolah offline menjadi kandidat data event. Untuk satu artikel, dari root repository jalankan:

```sh
python3 scripts/markdown_to_event.py ./artikel.md \
  --source-url 'https://id.wikipedia.org/wiki/Judul_Artikel' \
  --year 1945 --category independence --region Nasional \
  --output ./event-draft.json
```

Parser mengambil judul H1, ringkasan pembuka, dan URL sumber. Tahun/kategori/region dapat diberikan lewat frontmatter atau opsi CLI; periode diturunkan dari tahun dan kategori tebakan diberi peringatan. Hasil tetap berstatus `pending`, tidak ditulis langsung ke database atau event katalog. Kurator perlu melengkapi dampak, tag, ketepatan tanggal, dan memeriksa sumber sebelum publikasi. Lihat [panduan impor Markdown](markdown-import.md).

Untuk artikel berformat kronologi seperti Wikipedia, tambahkan `--timeline` sebelum `--source-url`; parser membuat satu batch kandidat dari baris-baris peristiwa dan menyimpan tautan inline sebagai kandidat sumber detail:

```sh
python3 scripts/markdown_to_event.py ./garis-waktu.md --timeline \
  --source-url 'https://id.wikipedia.org/wiki/Garis_waktu_sejarah_Indonesia' \
  --output ./garis-waktu.drafts.json
```

## Dua jalur data

1. **Wilayah**: Cliopatria/Seshat GeoJSON dari commit dipin + verifikasi SHA-256 → seleksi nama kerajaan → `kingdoms` dan `kingdom_territories` → API → poligon berwarna pada atlas sesuai tahun.
2. **Bahan sejarah**: Wikipedia Action API → teks dan revisi → Wikidata EntityData untuk klaim tanggal berpresisi/referensi → Commons imageinfo untuk gambar/author/lisensi → `research_documents` dan `research_images` → menu Hasil crawl di CMS.

Artikel tidak diubah menjadi batas kerajaan. Klaim tanggal Wikidata tidak otomatis dianggap sebagai masa wilayah. Label periode manifest juga tidak menjadi tanggal fakta.

## Sumber poligon yang dipakai

- Publisher: [Seshat Cliopatria](https://github.com/Seshat-Global-History-Databank/cliopatria).
- Referensi ilmiah: [Bennett et al., Scientific Data (2025)](https://doi.org/10.1038/s41597-025-04516-9).
- Commit: `5f433377139a6eeaeacbdc894b70f8805b72c8b5`.
- Archive SHA-256: `e10a4e429fca708788ff9e7572a95fce801fae55852d217cffabc1c59cd4eed4`.
- Nama anggota ZIP sebenarnya: `cliopatria_polities_only_v021.geojson`.
- [Lisensi publisher](https://github.com/Seshat-Global-History-Databank/cliopatria/blob/5f433377139a6eeaeacbdc894b70f8805b72c8b5/LICENSE.md): CC BY 4.0.
- Seleksi lokal: `packages/data/kingdoms.json`; subset portable: `packages/data/kingdom-territories.geojson` (103 fitur, 22 label polity pada impor awal).

Subset dipilih berdasarkan nama, bukan dipotong dengan perbatasan Indonesia sekarang. Geometri tetap sebagaimana sumber. ID fitur adalah hash konten sumber, sehingga impor archive yang sama tidak menambah duplikasi. Profil yang sudah ditandai diedit kurator tidak ditimpa sinkronisasi nama registry; flag tampil/sembunyi wilayah juga dipertahankan.

Batas adalah rekonstruksi dataset. Klaim kekuasaan langsung/upeti/pengaruh belum dibedakan pada impor awal (`relationship=unspecified`). Wilayah dan rentang masa sumber perlu ditinjau. Contohnya, label Kutai pada poligon abad ke-17 tidak boleh disamakan dengan Kutai awal pada Prasasti Yupa; snapshot Yogyakarta juga tidak otomatis menentukan tanggal berdiri institusi.

Dataset global berhenti pada 2024. Subset kerajaan yang dipilih berakhir lebih awal (1959 pada archive ini). Tidak ada ekstrapolasi sampai tahun berjalan. Peta kosong berarti tidak ada snapshot bersumber untuk tahun tersebut, bukan bukti tidak ada kerajaan/institusi yang masih ada.

## Menjalankan

```sh
uv sync --project apps/crawler --locked
# Isi DATABASE_URL dan CRAWLER_USER_AGENT di root .env
pnpm crawl:migrate
pnpm crawl:territories
pnpm crawl --download-images
pnpm crawl:stats
```

Crawl terjadwal/berulang bisa memakai `pnpm crawl --refresh --download-images`; scheduler belum dipasang. Crawler melewati dokumen yang sudah ada secara default, dan mencatat URL gagal agar bisa dicoba lagi. Lihat log di `crawl_runs` dan `crawl_items`. Sumber yang berubah mengembalikan dokumen menjadi `pending` untuk ditinjau ulang.

## Hasil awal yang benar-benar diambil

Impor archive: **22 label kerajaan, 103 snapshot**. Crawl profil setelah dua judul Kutai diperbaiki: **27 dokumen Wikipedia**, disertai metadata Wikidata/Commons sesuai ketersediaan; **26 metadata gambar Commons**, dengan **8 thumbnail berhasil diunduh** pada dua run awal. Semua dokumen awal berstatus pending. Jumlah ini adalah cakupan pengambilan awal, bukan seluruh sejarah Nusantara atau verifikasi klaim artikelnya. Gunakan `crawl:stats` untuk kondisi database terbaru.

Situs/blog lain dapat dimasukkan lewat manifest `web` dengan URL artikel spesifik. Default hanya metadata/tautan. Full text membutuhkan lisensi/izin nyata yang dicatat kurator. Belum dilakukan crawl massal blog, ANRI, atau UNESCO. Link kandidat dan batas penggunaan masing-masing didokumentasikan di riset sumber.

## Penyimpanan, backup, dan rollback

Schema tambahan ada di `apps/crawler/schema.sql`. Migrasi additive/idempoten; tidak mengubah tabel situs lama. Snapshot mentah dan gambar tersimpan lokal di `apps/crawler/data`, tidak masuk Git. Backup database bersama folder ini. CMS harus diarahkan ke folder berkas yang sama dengan `CRAWLER_DATA_DIR` (dev) / `NUXT_CRAWLER_DATA_DIR` (production).

Rollback tampilan: route `/sites` mempertahankan atlas situs lama; data `sites` tetap ada. Tidak ada langkah drop otomatis. Untuk menghentikan pemakaian suatu snapshot, gunakan tombol Sembunyikan dari peta di CMS; histori/sumber tetap tersimpan. Menghapus tabel hanya dilakukan terpisah setelah backup, bukan bagian migrasi ini.
