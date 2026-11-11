# Library dan arsitektur

Versi resolved JS: `pnpm-lock.yaml`. Versi Python: `apps/crawler/uv.lock`. Manifest mencatat rentang versi; gunakan lockfile untuk reproduksi.

| Area | Library / teknologi | Peran |
| --- | --- | --- |
| Atlas | Next.js 16, React 19 | UI atlas kerajaan, linimasa dan pemilihan kerajaan; arsip situs tetap `/sites` |
| Peta | MapLibre GL | GeoJSON fill/line per kerajaan, warna, outline pilihan, label, zoom/pan |
| Ikon | lucide-react | Ikon navigasi |
| API | NestJS 11, RxJS, reflect-metadata | Read API dan lifecycle database |
| Database JS | pg | Pool/query PostgreSQL berparameter |
| CMS | Nuxt 4, Vue 3, H3/Nitro | UI admin dan API terautentikasi |
| Crawler | requests | HTTP serial, timeout, redirect dibatasi, retry/backoff, ukuran respons dibatasi |
| Ekstraksi | beautifulsoup4 | Mengubah metadata HTML menjadi teks dan ekstraksi artikel web berizin |
| Database Python | psycopg 3, psycopg-binary | Transaksi/query berparameter dan JSONB |
| Lingkungan Python | python-dotenv | Membaca root `.env` tanpa menimpa environment |
| Python stdlib | hashlib, zipfile, json, urllib.robotparser, ipaddress | Hash provenance, archive terbatasi, JSON, robots.txt, validasi jaringan |
| Python runtime | uv + uv.lock | Venv dan dependency reproducible |
| Database | PostgreSQL 17 | Kerajaan, poligon JSONB, dokumen/gambar, audit run, situs lama |
| Workspace | pnpm, Turborepo | Workspace dan orkestrasi |
| Pengujian | node:test, unittest/mock, Playwright | Validasi, preservasi review/DB, dan browser dengan schema terpisah |

Tidak memakai model AI untuk mengarang batas wilayah/tanggal, tidak memakai library browser scraping, dan tidak menambahkan dependency GIS untuk menggambar ulang poligon. Geometri Cliopatria dipilih tanpa modifikasi koordinat.

```text
Cliopatria ZIP (pinned, SHA256) --> Python importer --> kingdoms + kingdom_territories
                                                           |
                                                           +--> NestJS /api/kingdoms --> MapLibre (warna + tahun)
                                                           |
                                                           +--> Nuxt CMS (profil/warna/poligon/tampil-sembunyi)

Wikipedia + Wikidata + Commons --> Python crawler --> research_documents + research_images
                                               |            |
                                               +--> data/   +--> Nuxt CMS (baca + tinjau)

sites.json --> seed --> sites --> API/atlas arsip /sites
```

CMS menyimpan password dalam memori halaman, mengirim Bearer header, dan server memeriksa hash dengan `node:crypto` timingSafeEqual. Login tidak bergantung pada tabel situs lama. Query CMS mengirim no-store. Gambar lokal dibaca melalui endpoint terautentikasi dengan path hash yang dibatasi; metadata/teks eksternal dirender sebagai teks, bukan HTML aktif.

Dokumentasi resmi: [MediaWiki Action API](https://www.mediawiki.org/wiki/API:Main_page), [Commons metadata](https://commons.wikimedia.org/wiki/Commons:Machine-readable_data), [Cliopatria](https://github.com/Seshat-Global-History-Databank/cliopatria), [Nuxt](https://nuxt.com/docs/4.x/getting-started/introduction), [requests](https://requests.readthedocs.io/), [Psycopg](https://www.psycopg.org/psycopg3/docs/), [MapLibre](https://maplibre.org/maplibre-gl-js/docs/).
