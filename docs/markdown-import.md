# Impor Markdown menjadi draf event

`scripts/markdown_to_event.py` membaca file `.md` hasil Web-to-Markdown dan mengeluarkan JSON berbentuk kandidat `TimelineEvent`. Skrip tidak mengambil halaman web sendiri, tidak mengirim konten ke layanan luar, dan tidak menulis langsung ke database atau katalog publik.

## Alur

1. Buka halaman sumber dengan plugin Web-to-Markdown dan simpan hasilnya sebagai Markdown.
2. Sertakan URL kanonis halaman sebagai `source_url` di frontmatter atau berikan lewat `--source-url`.
3. Isi tahun, kategori, wilayah, dampak, dan tag lewat frontmatter atau opsi CLI.
4. Buat file JSON, tinjau `missing_required_fields` serta `warnings`, lalu verifikasi sumber dan klaim sebelum memindahkan event yang sudah lengkap ke `data/events/researched.ts`.

```sh
python3 scripts/markdown_to_event.py ./riset/proklamasi.md \
  --source-url 'https://id.wikipedia.org/wiki/Proklamasi_Kemerdekaan_Indonesia' \
  --year 1945 --category independence --region Nasional \
  --impact 'Menandai dimulainya kemerdekaan Republik Indonesia.' \
  --tag Proklamasi --tag Kemerdekaan \
  --output ./riset/proklamasi-1945.event.json
```

Tanpa `--output`, JSON dicetak ke stdout. Tahun SM memakai angka negatif, misalnya `--year -18000`. Opsi CLI mengesampingkan nilai frontmatter. Nilai `period` dapat diturunkan dari tahun; kategori hasil tebakan kata kunci selalu diberi peringatan untuk diperiksa.

## Impor artikel garis waktu

Untuk export artikel kronologi seperti *Garis waktu sejarah Indonesia*, gunakan `--timeline`. Mode ini melewati pengantar/navbox, membaca bagian setelah heading kronologi sampai bagian referensi, lalu menghasilkan satu kumpulan draf JSON. Tautan yang ada di baris event dipertahankan sebagai kandidat sumber detail; URL artikel timeline ikut disimpan sebagai sumber konteks.

```sh
python3 scripts/markdown_to_event.py ./riset/garis-waktu-indonesia.md \
  --timeline \
  --source-url 'https://id.wikipedia.org/wiki/Garis_waktu_sejarah_Indonesia' \
  --output ./riset/garis-waktu-indonesia.drafts.json
```

Mode ini mengenali tanggal/tahun, rentang, SM/BP, tanggal hari-bulan yang mewarisi tahun sebelumnya, serta tabel Markdown dengan kolom waktu dan peristiwa. Abad dan periode luas diberi penanda perkiraan atau tahun kosong jika tidak cukup informasi untuk ditempatkan. Parser tidak menganggap semua pranala entitas sebagai bacaan detail, tidak memeriksa kebenaran klaim, dan tidak menggabungkan entri dengan katalog yang sudah ada. Tinjau duplikasi, tanggal, wilayah/kategori hasil tebakan, tautan detail, dampak, dan atribusi sebelum memindahkan entri ke katalog.

Output batch berbentuk `{ review_status, source_url, event_count, events }`; tiap item dalam `events` memiliki `event`, `missing_required_fields`, dan `warnings`. Hasil tetap pending dan tidak pernah ditulis langsung ke database atau `data/events/researched.ts`.

## Bentuk frontmatter

```md
---
source_url: https://id.wikipedia.org/wiki/Proklamasi_Kemerdekaan_Indonesia
title: Proklamasi Kemerdekaan Indonesia
year: 1945
category: independence
region: Nasional
impact: Menandai dimulainya kemerdekaan Republik Indonesia.
tags: [Proklamasi, Kemerdekaan]
evidence: documented
---

# Proklamasi Kemerdekaan Indonesia

Paragraf pembuka dari artikel sumber.
```

Kunci yang dikenali: `source_url`, `canonical_url`, `original_url`, `url`, `title`, `source_title`, `source_name`, `year`, `period`, `category`, `region`, `summary`, `impact`, `tags`, `evidence`, dan `id`. Bila plugin tidak mempertahankan URL halaman, sertakan `--source-url`; skrip berhenti dengan pesan kesalahan jika tidak menemukan URL HTTPS.

## Isi dan batas ekstraksi

- Judul diambil dari `title` frontmatter atau heading H1.
- Ringkasan mengambil maksimal dua paragraf pembuka, maksimal 600 karakter; bagian referensi dan gambar dilewati.
- URL sumber masuk ke `event.sources` agar tautan Wikipedia/ANRI/website sumber terbawa ke data event.
- Tahun tidak ditebak dari prosa. Isi `year` secara eksplisit agar tanggal artikel, lahir/wafat tokoh, atau periode tidak tertukar dengan tahun peristiwa.
- Kategori boleh ditebak dari kata kunci, tetapi hasilnya harus dikonfirmasi. `impact` dan `tags` perlu diisi sebelum draf dipromosikan.
- Hasil selalu diberi `review_status: pending`. JSON ini adalah bahan tinjauan, bukan data yang otomatis tampil di atlas.
- Untuk Wikipedia, hasil mencatat CC BY-SA 4.0. Ringkasan yang diambil harus memenuhi atribusi dan kewajiban lisensi sebelum dipublikasikan.

Ekstraksi ringkasan mengambil teks sumber apa adanya; skrip tidak mengarang parafrasa atau memastikan kebenaran sejarah. Gunakan sumber tersebut sebagai petunjuk awal dan tulis ringkasan yang sudah diperiksa sebelum publikasi.
