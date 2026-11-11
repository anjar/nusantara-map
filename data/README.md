# Panduan Data Atlas

Folder ini berisi katalog yang dikurasi sebagai TypeScript. Fungsi pemilihan dan tipe publiknya tetap di `lib/`; data geografis yang dimuat langsung oleh peta berada di `public/data/`. Semua berkas ini adalah sumber data aplikasi, bukan dump basis data. Tidak ada langkah impor atau generator yang otomatis memperbarui semuanya.

| Data | Berkas yang diedit | Digunakan untuk |
| --- | --- | --- |
| Peristiwa lama | `data/events/base.ts` | Linimasa dan panel peristiwa |
| Peristiwa hasil riset | `data/events/researched.ts` | Linimasa dan panel peristiwa |
| Tambahan dari seed Wikipedia | `data/events/wikipedia-timeline.ts` | Kumpulan terpisah yang digabung ke daftar hasil riset |
| Kota dan nama historis | `data/cities.ts` | Marker kota dan detailnya |
| Provinsi dan pembagian historis | `data/provinces.ts` | Nama wilayah dan pembagian administratif |
| Rute dan benteng | `data/routes.ts` | Metadata rute dan benteng |
| Nama wilayah menurut era | `data/region-names.ts` | Nama pulau dan perairan di peta |
| Geometri wilayah | `public/data/kingdom-territories.geojson` | Snapshot wilayah kerajaan dan negara |
| Indeks linimasa wilayah | `public/data/kingdoms-timeline.json` | Rentang dan periode yang dapat dipilih |
| Metadata kerajaan | `public/data/kingdoms.json` | Metadata tambahan; beberapa entri lama belum punya `id` |
| Situs arkeologi | `public/data/sites.json` | Peta `/sites` |
| Geografi dan layer lainnya | `public/data/*.geojson` | Garis pantai, tetangga, gunung, sungai, dan referensi peta |

`public/data/provinces.geojson` berisi poligon perkiraan yang sederhana, bukan batas administratif resmi. Koordinat kota adalah titik, bukan poligon batas kota. `public/data/routes-and-walls.geojson` dan katalog `data/routes.ts` adalah berkas terpisah; perubahan salah satunya tidak memperbarui yang lain otomatis.

## Menambah peristiwa

Tambahkan objek ke `data/events/researched.ts` untuk entri baru yang ditinjau. Ikuti tipe `TimelineEvent` di `lib/events.ts`. Contoh bentuk (nilai contoh perlu diganti dengan data dan sumber yang sudah diverifikasi):

```ts
{
  id: 'contoh-peristiwa-1900', // ID unik, huruf kecil dan tanda hubung
  year: 1900,
  period: 'colonial',
  category: 'politics',
  region: 'Jawa',
  title: 'Nama peristiwa',
  summary: 'Ringkasan fakta berdasarkan sumber.',
  impact: 'Dampak yang didukung sumber.',
  tags: ['Sejarah tercatat'],
  evidence: 'documented',
  sources: [{ title: 'Judul dokumen', url: 'https://example.org/dokumen', sourceName: 'Nama lembaga' }]
}
```

`id`, `year`, `period`, `category`, `title`, `summary`, `impact`, dan `tags` wajib menurut tipe; data yang ada juga diperiksa agar memiliki sumber. Gunakan kategori dan periode yang tersedia di `lib/events.ts`. `date` dapat diisi tanggal ISO `YYYY-MM-DD` bila hari pasti diketahui; `endYear` untuk rentang, `dateNote` untuk penjelasan tanggal, dan `evidence` untuk status `documented`, `approximate`, `contested`, atau `reconstruction`. Cantumkan `researchedAt` bila sesuai. Jangan mengisi tanggal pasti jika sumber hanya menyebut tahun.

Tahun positif adalah Masehi, tahun negatif digunakan untuk SM; UI menghindari tahun nol. Rentang `startYear` dan `endYear` inklusif. Tidak semua peristiwa yang tersedia masuk rentang linimasa peta; jangan mengubah tahun agar tampak di linimasa. Gabungan katalog diurutkan berdasarkan tahun di `lib/events.ts`.

## Geometri dan sumber

Snapshot wilayah berupa GeoJSON `FeatureCollection`: setiap feature memiliki `Polygon` atau `MultiPolygon` dalam koordinat `[bujur, lintang]`, serta properti `id`, `name`, `color`, `startYear`, `endYear`, `sourceUrl`, `sourceRevision`, `license`, `attribution`, `notes`, dan `relationship`. Ikuti feature yang sudah ada dan sertakan sumber geometri yang bisa ditelusuri; `relationship: 'unspecified'` berarti jenis hubungan kekuasaan belum dibedakan. Jangan mengartikan snapshot sebagai batas pasti atau menyamakan batas modern dengan batas sejarah.

Saat mengubah snapshot, periksa juga `kingdoms-timeline.json` dan metadata `kingdoms.json`: nama, ID, warna, periode, dan cakupan harus konsisten. Indeks memakai `start_year` / `end_year`, sedangkan feature memakai `startYear` / `endYear`. Tidak ada sinkronisasi otomatis. Sebagian metadata lama belum memiliki `id`; API hanya mencocokkan metadata yang memiliki `id`, lalu memakai properti feature sebagai cadangan.

Untuk situs, contoh lengkap tersedia pada `public/data/sites.json`; isi `sourceUrl`, `sourceTitle`, `confidence`, dan `curationStatus`. Untuk gambar dan data pihak ketiga, periksa lisensi, izin penggunaan, dan atribusi sebelum menambahkan berkas. Lihat [dokumentasi sumber](../docs/README.md) dan [katalog riset peristiwa](../docs/event-catalog.md); beberapa dokumen arsitektur lama perlu dicocokkan dengan kode aktif.

## Memeriksa perubahan

Dari root repositori, jalankan `pnpm typecheck` dan `pnpm test`. Tes memeriksa antara lain keunikan ID peristiwa, format URL, urutan tahun, dan sebagian metadata; tes tidak membuktikan kebenaran sejarah, ketepatan geometri, lisensi, atau bahwa tautan masih hidup. Periksa sumber dan peta secara manual, lalu jelaskan keterbatasannya di pull request. Lihat [CONTRIBUTING.md](../CONTRIBUTING.md).
