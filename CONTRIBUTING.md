# Panduan Kontribusi

Terima kasih telah membantu memperbaiki Atlas Nusantara. Mulai dari [panduan data](data/README.md) untuk memilih berkas dan format yang tepat. Perubahan tampilan dan kode mengikuti petunjuk di [AGENTS.md](AGENTS.md).

## Alur kontribusi data

1. Cari ID, nama, dan tahun di katalog untuk menghindari duplikasi. Untuk koreksi, perbarui entri yang sudah ada dan pertahankan ID-nya.
2. Tambahkan sumber yang langsung mendukung setiap klaim penting. Cantumkan judul dan URL halaman atau dokumen spesifik, bukan hanya beranda. Tulis ringkasan dengan kata sendiri.
3. Catat tanggal perkiraan, perbedaan pendapat, dan keterbatasan sumber. Untuk geometri, sertakan sumber, revisi, lisensi, atribusi, rentang snapshot, dan ketidakpastian batas. Jangan menggambar batas dari perkiraan sendiri.
4. Jalankan `pnpm install --frozen-lockfile`, `pnpm typecheck`, dan `pnpm test`. Untuk perubahan tampilan, periksa peta dan linimasa di browser.
5. Buka pull request yang menjelaskan perubahan, sumber, bagian yang belum pasti, dan hasil pemeriksaan. Sertakan tangkapan layar untuk perubahan visual.

Gunakan satu perubahan yang saling berkaitan per pull request. Laporkan kesalahan atau usulkan sumber lewat issue jika belum bisa menyiapkan perubahan data.
