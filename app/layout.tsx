import type { Metadata } from 'next';
import 'maplibre-gl/dist/maplibre-gl.css';
import './globals.css';
export const metadata: Metadata = { title: 'Nusantara — Atlas Kerajaan Indonesia', description: 'Jelajahi kerajaan Nusantara melalui poligon wilayah bersumber, warna kerajaan, dan linimasa rekonstruksi historis.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
