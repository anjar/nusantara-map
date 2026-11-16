import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nusantara — Atlas Kerajaan Indonesia',
    short_name: 'Nusantara',
    description: 'Jelajahi kerajaan Nusantara melalui peta dan linimasa sejarah.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f2e9',
    theme_color: '#30463f',
    icons: [
      { src: '/icons/nusantara-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/nusantara-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  };
}
