# Panduan Kontribusi

Terima kasih telah membantu memperbaiki Atlas Nusantara. Mulai dari [panduan data](data/README.md) untuk memilih berkas dan format yang tepat. Perubahan tampilan dan kode mengikuti petunjuk di [AGENTS.md](AGENTS.md).

## Alur branch dan pull request

- `main` adalah branch production Vercel. Perubahan di sana langsung dirilis ke situs utama.
- `dev` adalah branch development untuk menggabungkan beberapa kontribusi sebelum rilis.
- Untuk kontribusi, buat fork lalu branch kerja dari `dev` pada repo asal (`upstream/dev`), misalnya `feat/nama-fitur`, `fix/nama-masalah`, atau `docs/nama-panduan`. Ajukan pull request ke branch `dev`, bukan `main`.
- Pull request menjalankan Oxlint dan tes otomatis, serta mendapat Vercel Preview untuk ditinjau. Pull request dari fork mungkin perlu disetujui maintainer sebelum Preview dibuat. Cantumkan ringkasan perubahan, pemeriksaan yang dijalankan, dan tautan/screenshot Preview bila relevan.
- Maintainer dapat menggabungkan beberapa pull request yang lolos pemeriksaan ke `dev`. Saat siap dirilis, maintainer membuka pull request `dev` → `main`; merge tersebut memicu deployment production.

## Alur kontribusi data

1. Cari ID, nama, dan tahun di katalog untuk menghindari duplikasi. Untuk koreksi, perbarui entri yang sudah ada dan pertahankan ID-nya.
2. Tambahkan sumber yang langsung mendukung setiap klaim penting. Cantumkan judul dan URL halaman atau dokumen spesifik, bukan hanya beranda. Tulis ringkasan dengan kata sendiri.
3. Catat tanggal perkiraan, perbedaan pendapat, dan keterbatasan sumber. Untuk geometri, sertakan sumber, revisi, lisensi, atribusi, rentang snapshot, dan ketidakpastian batas. Jangan menggambar batas dari perkiraan sendiri.
4. Jalankan `pnpm install --frozen-lockfile`, `pnpm format`, `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, dan `pnpm test`. Untuk perubahan tampilan, periksa peta dan linimasa di browser.
5. Buka pull request ke `dev` yang menjelaskan perubahan, sumber, bagian yang belum pasti, dan hasil pemeriksaan. Sertakan tangkapan layar untuk perubahan visual.

Gunakan satu perubahan yang saling berkaitan per pull request. Laporkan kesalahan atau usulkan sumber lewat issue jika belum bisa menyiapkan perubahan data.
