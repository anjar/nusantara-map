# CMS kerajaan Nusantara

## Menjalankan

Dari root, setelah menyiapkan `.env` tanpa menimpa konfigurasi yang ada:

```sh
pnpm install --frozen-lockfile
uv sync --project apps/crawler --locked
# Isi DATABASE_URL, CMS_PASSWORD, CRAWLER_USER_AGENT di .env
pnpm db:up
pnpm crawl:migrate
pnpm crawl:territories
pnpm crawl --download-images
pnpm dev:cms
```

Buka http://127.0.0.1:3001. CMS meminta `CMS_PASSWORD`. API menolak semua akses jika password belum diatur. Password hanya berada dalam memori halaman; refresh/logout meminta login ulang. Login kerajaan/riset tidak membutuhkan seed/tabel situs lama.

## Kerajaan & wilayah

Tampilan utama berisi kerajaan, warna, jumlah snapshot, dan cakupan tanggal geometri sumber. Cakupan ini **bukan** tanggal pasti berdiri/runtuh kerajaan.

- Tambah kerajaan: ID slug stabil, nama, warna hex, link sumber, dan ringkasan kurator. Profil dapat disimpan tanpa poligon.
- Edit profil & warna: perubahan tersimpan ke database dan dipakai peta setelah query berikutnya. Field yang sudah diedit kurator ditandai agar sinkronisasi registry tidak menimpanya.
- Input poligon: satu geometry Polygon/MultiPolygon GeoJSON atau Feature (bukan FeatureCollection, titik, maupun gambar). Sertakan tahun awal/akhir, URL dan revisi sumber, lisensi, atribusi, serta catatan ketidakpastian.
- Hubungan wilayah dapat ditandai belum dibedakan, kekuasaan langsung, pengaruh, atau upeti. Pilih kategori spesifik hanya jika ada buktinya.
- Sembunyikan/tampilkan snapshot untuk menentukan apakah geometri masuk query publik. Data sumber tetap tersimpan.

Poligon harus berbasis sumber historis. Jangan membuat batas dengan menghubungkan titik situs atau menggunakan batas provinsi sekarang sebagai pengganti wilayah kerajaan. Importer awal memakai geometri Cliopatria tanpa menggambar ulang.

Input memeriksa tipe GeoJSON, angka/koordinat, rentang tahun, ring tertutup, ukuran/jumlah titik, dan kolom sumber. Ini validasi struktur dasar; topologi historis/keabsahan klaim tetap memerlukan tinjauan. Tahun: -3400 sampai tahun UTC berjalan, tanpa 0 (negatif = SM). Rentang harus awal ≤ akhir. Batas teknis ini bukan klaim bahwa sejarah Indonesia dimulai 3400 SM.

Penyimpanan poligon langsung membuat snapshot tersedia di peta pada tahun yang cocok. Belum ada lapisan draft/publish atau peninjau kedua. Pastikan sumber dan catatan sudah benar saat menyimpan; gunakan Sembunyikan jika perlu koreksi.

## Hasil crawl

Koleksi riset menampilkan artikel dan metadata yang benar-benar telah diambil. Cari judul, filter periode, buka teks, gambar, link sumber, revisi, atribusi, dan lisensi. Klaim tanggal Wikidata mempertahankan presisi/kalender/rank/referensi dan belum otomatis menjadi tanggal kerajaan atau wilayah.

Tinjauan kurator dapat berstatus pending/reviewed/rejected dengan catatan. Ini hanya status bahan riset; tidak otomatis membuat kerajaan/poligon atau menyatakan seluruh klaim terverifikasi. Ringkasan profil ditulis kurator secara terpisah. Crawl ulang dengan konten/revisi berubah mengembalikan status pending dan mengosongkan waktu tinjauan, sambil mempertahankan catatan lama agar perubahan bisa ditinjau lagi.

Teks/metadata ditampilkan sebagai teks, bukan HTML aktif. Gambar lokal diambil lewat endpoint terautentikasi; bila file belum terunduh/tidak tersedia, link Commons dan metadatanya tetap bisa dibuka. Jangan menganggap gambar dengan metadata belum lengkap siap dipublikasikan. Atribusi/lisensi harus tetap menyertai penggunaan ulang.

## Arsip situs lama

Menu Arsip situs lama mempertahankan daftar/detail/tambah/edit delapan situs awal. Database baru memerlukan `pnpm db:seed` untuk tabel ini. Situs memiliki ID, nama/jenis/provinsi, bujur/lintang, judul/deskripsi, sumber, ketepatan lokasi, status kurasi, serta tahun filter 700–1600. API lama tetap kompatibel; arsip atlas ada di `/sites`.

**Jangan menjalankan seed situs rutin setelah edit CMS.** Seed melakukan upsert dan dapat menimpa hasil kurasi pada ID yang sama. Perubahan CMS tidak menulis balik `sites.json`. Impor/crawl kerajaan tidak menimpa situs lama.

## Database, backup, production

Schema riset/kerajaan ada di `apps/crawler/schema.sql`; migrasi additive/idempoten. Backup PostgreSQL dengan alat versi kompatibel dan backup folder `apps/crawler/data/` untuk mempertahankan raw response/gambar. Simpan di luar Git. Uji restore pada database terpisah.

Dev membaca root `.env`. Production memakai:

- `NUXT_DATABASE_URL`: URL PostgreSQL.
- `NUXT_CMS_PASSWORD`: password pengelola.
- `NUXT_CRAWLER_DATA_DIR`: path absolut ke folder data crawler yang sama.
- `NITRO_HOST=127.0.0.1`, `NITRO_PORT=3001` untuk reverse proxy lokal.

Build: `pnpm --filter @sejarah/cms build`; start: `pnpm --filter @sejarah/cms start`. Output production tidak otomatis membaca `.env`. URL database dan password adalah konfigurasi server, tidak diekspor ke public runtime config. Untuk penggunaan lewat jaringan, pakai HTTPS dan pembatasan akses/rate limit reverse proxy.

Versi ini satu password bersama, belum memiliki akun/role atau riwayat revisi edit kurator. Log crawler tersedia per run/URL. Dua kurator yang mengedit profil bersamaan masih memakai penyimpanan terakhir.

## Pemeriksaan

```sh
pnpm --filter @sejarah/cms test
pnpm --filter @sejarah/cms typecheck
pnpm --filter @sejarah/api build
pnpm --filter @sejarah/cms build
pnpm test:kingdoms:e2e
pnpm test:cms:e2e # regresi arsip situs
```

Uji kerajaan membuat schema PostgreSQL terpisah, memeriksa preservasi kurasi saat re-crawl, poligon bersumber lintas tahun, source attribution, API, peta, login tanpa tabel situs, edit profil, tampil/sembunyi poligon, teks riset aman, dan tinjauan yang persisten. Directory Next.js pengujian terpisah agar dev server pengguna tidak dihentikan. Browser default `/usr/bin/google-chrome-stable`, override `CHROMIUM_PATH` bila perlu.
