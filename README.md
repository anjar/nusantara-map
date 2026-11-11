# Nusantara — Atlas Historis & Geologis Indonesia

Atlas interaktif sejarah kepulauan Nusantara dan Indonesia dari **Zaman Es (-20.000 SM)** hingga era kerajaan dan masa modern.

Proyek ini dibangun sebagai **single Next.js application** yang statis, cepat, dan mandiri — **tanpa ketergantungan database runtime (zero-database)**. Seluruh data wilayah historis, garis pantai purba, toponimi wilayah, dan situs arkeologi disajikan melalui berkas GeoJSON dan JSON statis berkinerja tinggi.

---

## ✨ Fitur Utama

1. **Rekonstruksi Geologis Paleoshoreline (Paparan Sunda & Sahul)**
   - Menampilkan daratan Sundaland yang menyatukan Sumatera, Jawa, Kalimantan, dan Semenanjung Malaya dengan daratan Asia pada Zaman Es (-20.000 SM s/d -4.000 SM).
   - Menampilkan Paparan Sahul yang menyatukan Papua dan Australia.
   - Perhitungan eustatik permukaan air laut dinamis berdasarkan model geologi Lambeck et al. (2014) dengan interpolasi kedalaman -120m, -75m, -50m, dan -25m.

2. **Sistem Hidrologi & Topografi Purba**
   - Jaringan sungai purba Molengraaff (Sistem Sungai Sunda Utara & Sunda Timur) serta sungai-sungai besar modern di kepulauan Nusantara.
   - Penanda puncak gunung berapi bersejarah (Krakatau, Merapi, Tambora, Toba, Semeru, Rinjani, dll).

3. **Perubahan Nama Toponimi Regional Dinamis**
   - Nama-nama pulau dan wilayah berganti secara otomatis mengikuti lini masa sejarah:
     - **Sumatera:** Suvarnadvipa / Swarnabhumi (-20.000 s/d 600 M) → Swarnadwipa (era Sriwijaya) → Melayu & Minangkabau (era Islam) → Sumatera (modern).
     - **Jawa:** Yawadwipa (-20.000 s/d 700 M) → Bhumi Jawa (era Medang, Kediri, Majapahit) → Tanah Jawa (era Mataram Islam) → Jawa (modern).
     - **Kalimantan:** Varunadvipa → Tanjungpura & Kuripan → Borneo → Kalimantan.
     - **Semenanjung Malaya:** Hujung Medini → Malaka / Tanah Melayu → Malaysia Barat.
     - **Sulawesi:** Celebes / Waniadwipa → Kerajaan Gowa-Tallo & Luwu → Sulawesi.

4. **Batas Wilayah Negara Tetangga**
   - Batas wilayah negara tetangga (Malaysia Semenanjung & Borneo Sabah/Sarawak, Brunei Darussalam, Singapura, Timor-Leste, Papua Nugini) dengan warna pastel/parchment yang jelas dan estetis.

5. **Wilayah Kerajaan & Kesultanan Nusantara**
   - Menampilkan wilayah kekuasaan 22+ polity/kerajaan besar (Kutai, Tarumanagara, Sriwijaya, Mataram Kuno, Medang Kamulan, Kediri, Singasari, Majapahit, Samudera Pasai, Malaka, Demak, Pajang, Mataram Islam, Aceh, Banten, Cirebon, Gowa-Tallo, Ternate, Tidore, Banjar, Pagaruyung, dll) dengan rentang snapshot tahun -3400 SM hingga masa modern.

6. **Drawer Lini Masa & Peristiwa Sejarah Interaktif (Kanan)**
   - Panel samping yang dapat di-scroll vertikal, mengelompokkan peristiwa penting per periode:
     - ❄️ **Zaman Es & Pasca-Glasial:** Puncak glasial LGM, kenaikan air laut, pencairan es Meltwater Pulse 1A, banjir glasial, dan pemisahan pulau-pulau Sunda.
     - 🏛️ **Era Prasejarah & Kerajaan Klasik:** Austronesia, Dong Son, Kutai, Tarumanagara, Sriwijaya, Majapahit, Kesultanan Islam, hingga era Kemerdekaan.
     - Klik pada peristiwa di drawer akan langsung menggeser peta dan slider ke tahun tersebut.

7. **Arsip Situs Arkeologi (`/sites`)**
   - Peta dan katalog titik situs arkeologi kuno (Trowulan, Muaro Jambi, Borobudur, Sangiran, Liang Bua, dll).

---

## 🚀 Memulai

### Prasyarat
- Node.js 18+ (direkomendasikan Node.js 20 atau 24)
- `npm` atau `pnpm`

### Instalasi & Menjalankan

```bash
# Clone repositori
git clone https://github.com/your-username/nusantara-atlas.git
cd sejarah

# Pasang dependensi
pnpm install
# atau menggunakan npm:
# npm install

# Jalankan server pengembangan
pnpm dev
# atau:
# npm run dev
```

Buka browser di **[http://localhost:3000](http://localhost:3000)**.

### Uji & Build

```bash
# Typecheck TypeScript
pnpm typecheck

# Jalankan unit test
pnpm test

# Build production
pnpm build

# Menjalankan build production
pnpm start
```

---

## 📁 Struktur Proyek

```
.
├── app/
│   ├── api/
│   │   ├── health/route.ts              # API status cek
│   │   ├── kingdoms/route.ts            # Filter poligon kerajaan per ?year=
│   │   ├── kingdoms/timeline/route.ts   # Indeks rentang tahun kerajaan
│   │   └── sites/route.ts               # Data situs arkeologi
│   ├── globals.css                      # Styling tema atlas & MapLibre
│   ├── layout.tsx                       # Root layout & font
│   ├── page.tsx                         # Halaman utama atlas kerajaan & paleoshoreline
│   └── sites/page.tsx                   # Arsip peta titik situs arkeologi
├── components/
│   ├── Atlas.tsx                        # Komponen peta situs arkeologi
│   ├── EventDrawer.tsx                  # Drawer timeline & event sejarah di sisi kanan
│   ├── KingdomAtlas.tsx                 # Orkestrasi peta kerajaan, slider, & legenda
│   ├── Timeline.tsx                     # Linimasa interaktif
│   ├── Map.tsx                          # Lapisan MapLibre GL, paleoshoreline, sungai, gunung
│   └── types.ts                         # Type definitions UI & GeoJSON
├── data/                                # Katalog data dan panduan kontribusi
│   ├── events/                          # Peristiwa dasar dan hasil riset
│   ├── cities.ts, provinces.ts, routes.ts
│   └── region-names.ts
├── lib/
│   ├── events.ts                        # Tipe, penggabungan, dan pencarian peristiwa
│   ├── region-names.ts                  # Toponimi pulau dinamis berdasarkan tahun
│   └── sea-level.ts                     # Model kurva penurunan muka laut Lambeck et al.
├── public/
│   └── data/
│       ├── indonesia.geojson            # Poligon kepulauan Indonesia
│       ├── neighbors.geojson            # Malaysia, Brunei, Singapura, Timor Leste, PNG
│       ├── paleoshoreline-120m.geojson  # Garis pantai Sundaland LGM (-120m)
│       ├── paleoshoreline-75m.geojson   # Garis pantai transisi (-75m)
│       ├── paleoshoreline-50m.geojson   # Garis pantai pasca-banjir (-50m)
│       ├── paleoshoreline-25m.geojson   # Garis pantai holosen awal (-25m)
│       ├── rivers.geojson               # Sistem sungai purba Sunda & sungai modern
│       ├── mountains.geojson            # Titik gunung berapi bersejarah
│       ├── kingdom-territories.geojson  # 103 snapshot wilayah 22 kerajaan
│       ├── kingdoms-timeline.json       # Indeks tahun aktif kerajaan
│       ├── kingdoms.json                # Metadata & warna kerajaan
│       └── sites.json                   # Metadata situs arkeologi
└── package.json
```

---

## 🤝 Berkontribusi

Panduan lengkap tersedia di [CONTRIBUTING.md](CONTRIBUTING.md) dan [panduan data](data/README.md). Kontributor dapat membantu memperkaya data sejarah kepulauan Nusantara:

1. **Menambah / Memperbaiki Data Kerajaan:**
   - Tambahkan poligon wilayah baru pada `public/data/kingdom-territories.geojson`.
   - Perbarui metadata atau warna kerajaan di `public/data/kingdoms.json`.

2. **Menambah Peristiwa Sejarah:**
   - Tambahkan entri di `data/events/researched.ts` sesuai [panduan data](data/README.md).

3. **Menambah Toponimi Kuno:**
   - Tambahkan nama kuno pulau/wilayah untuk rentang tahun tertentu di `data/region-names.ts`.

4. **Menambah Garis Sungai atau Puncak Gunung:**
   - Tambahkan fitur GeoJSON pada `public/data/rivers.geojson` atau `public/data/mountains.geojson`.

---

## Referensi Tampilan

- [Jiangshan Map](https://github.com/DeanChensj/jiangshan-map) — referensi tampilan peta sejarah dan linimasa.
- [Historical Basemaps](https://github.com/aourednik/historical-basemaps) — referensi peta sejarah.

## 📜 Lisensi & Sumber Data

- **Cliopatria / Seshat Global History Databank**: Subset rekonstruksi poligon historis (CC BY 4.0).
- **Natural Earth Data**: Peta dasar garis pantai modern dan negara tetangga (Public Domain).
- **Lambeck et al. (2014) & Molengraaff (1921)**: Rekonstruksi paleoshoreline & sistem sungai Paparan Sunda purba.
- **Proyek ini**: Dilisensikan di bawah lisensi MIT.

## Katalog event bersumber

Linimasa memuat 60 event tambahan hasil riset (152 entri gabungan sejarah dan rekonstruksi geologi). Daftar kejadian, link detail, batas verifikasi, dan catatan tanggal ada di [docs/event-catalog.md](docs/event-catalog.md). Panel peristiwa mendukung pencarian kejadian/tokoh/wilayah/sumber, filter Wabah, serta label tanggal perkiraan dan klaim diperdebatkan. Filter default Rekaman sejarah memisahkan entri tersebut dari rekonstruksi prasejarah; tab Semua tetap tersedia.
