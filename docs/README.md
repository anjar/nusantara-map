# Dokumentasi Nusantara

Fokus aktif: kerajaan/kesultanan dengan wilayah per periode, bukan titik situs.

- [Katalog event hasil riset](event-catalog.md): 83 kejadian tambahan beserta tanggal, link detail, dan catatan penafsiran.
- [Impor Markdown ke draf event](markdown-import.md): mengubah hasil ekspor Web-to-Markdown menjadi JSON dengan URL sumber.
- [Riset sumber crawl dan poligon kerajaan](sumber-crawl.md): endpoint, lisensi, dataset yang terverifikasi berisi kerajaan Nusantara, dan kandidat riset.
- [Crawling dan impor wilayah](crawling.md): menjalankan Python, data yang benar-benar sudah diambil, provenance, resume, backup, dan batas cakupan.
- [Library dan arsitektur](library.md): komponen serta alur data.
- [Panduan CMS](cms.md): kerajaan, warna, poligon, hasil crawl, serta arsip situs.
- [Sumber data situs awal](sumber-data.md): inventaris delapan situs prototipe terdahulu.

Skrip impor Markdown tersedia di [`scripts/markdown_to_event.py`](../scripts/markdown_to_event.py). Data operasional crawler lokal tersimpan dalam PostgreSQL; raw response/gambar ada di `crawler/data/` dan tidak masuk Git.
