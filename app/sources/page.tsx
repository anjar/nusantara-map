import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import './sources.css';

export const metadata: Metadata = {
  title: 'Sumber, kredit & metode — Nusantara',
  description:
    'Kredit dataset, publikasi, lisensi, dan perangkat lunak yang digunakan Nusantara Atlas.',
};

const repository = 'https://github.com/anjar/nusantara-map';

export default function SourcesPage() {
  return (
    <main className="sources-page">
      <header className="header sources-header">
        <Link href="/" className="brand" aria-label="Nusantara beranda">
          <Image
            src="/brand/nusantara-symbol.svg"
            alt=""
            aria-hidden="true"
            width={44}
            height={44}
            className="brand-icon"
          />
          <span>
            Nusantara
            <span className="brand-sub">ATLAS KERAJAAN INDONESIA</span>
          </span>
        </Link>
        <nav aria-label="Navigasi utama">
          <Link href="/">Peta kerajaan</Link>
          <Link href="/sources" className="nav-active" aria-current="page">
            Sumber &amp; kredit
          </Link>
        </nav>
        <div className="header-end">
          <a href={repository} target="_blank" rel="noreferrer" className="sources-repo-link">
            GitHub ↗
          </a>
        </div>
      </header>

      <div className="sources-shell">
        <section className="sources-intro" aria-labelledby="sources-title">
          <p className="sources-kicker">CATATAN ATLAS · DATA, RISET, DAN PERANGKAT LUNAK</p>
          <h1 id="sources-title">Sumber, kredit &amp; metode</h1>
          <p className="sources-lead">
            Nusantara Atlas menggabungkan geometri historis, rekonstruksi bentang purba, dan peta
            dasar modern. Halaman ini menghimpun kredit dan rujukan bersama; sumber untuk satu
            peristiwa, situs, atau kerajaan tetap tersedia di detail itemnya.
          </p>
        </section>

        <div className="sources-layout">
          <aside className="sources-toc" aria-label="Daftar isi">
            <h2>Daftar isi</h2>
            <nav>
              <a href="#poligon">
                01 <span>Wilayah kerajaan</span>
              </a>
              <a href="#paleogeografi">
                02 <span>Paleogeografi</span>
              </a>
              <a href="#peta-dasar">
                03 <span>Geografi modern</span>
              </a>
              <a href="#item">
                04 <span>Peristiwa &amp; situs</span>
              </a>
              <a href="#perangkat-lunak">
                05 <span>Perangkat lunak</span>
              </a>
              <a href="#metode">
                06 <span>Metode &amp; batasan</span>
              </a>
            </nav>
          </aside>

          <article className="sources-content">
            <section className="source-section" id="poligon">
              <p className="source-section-kicker">01 / DATA WILAYAH</p>
              <h2>Poligon kerajaan</h2>
              <div className="source-entry">
                <div className="source-entry-heading">
                  <h3>Cliopatria · Seshat Global History Databank</h3>
                  <span className="source-license">CC BY 4.0</span>
                </div>
                <p>
                  Dataset geospasial Cliopatria menjadi sumber rekonstruksi wilayah kerajaan yang
                  ditampilkan di atlas. Kami memilih subset yang relevan untuk Nusantara dan
                  mempertahankan rentang snapshot sumber; geometri ini bukan batas hasil survei.
                </p>
                <p className="source-credit-line">
                  Kredit data: Cliopatria / Seshat Global History Databank, CC BY 4.0. Atlas
                  menggunakan subset terpilih dan menyajikannya sebagai rekonstruksi historis.
                </p>
                <ul className="source-links">
                  <li>
                    <a
                      href="https://github.com/Seshat-Global-History-Databank/cliopatria"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repositori Cliopatria ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Seshat-Global-History-Databank/cliopatria/tree/5f433377139a6eeaeacbdc894b70f8805b72c8b5"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Revisi yang dipakai ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Seshat-Global-History-Databank/cliopatria/blob/5f433377139a6eeaeacbdc894b70f8805b72c8b5/LICENSE.md"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lisensi CC BY 4.0 ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://doi.org/10.1038/s41597-025-04516-9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bennett et al. (2025), artikel metode ↗
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="source-section" id="paleogeografi">
              <p className="source-section-kicker">02 / REKONSTRUKSI GEOLOGIS</p>
              <h2>Paleogeografi</h2>
              <p>
                Garis pantai dan daratan Paparan Sunda–Sahul pada periode permukaan laut rendah
                merupakan rekonstruksi dari data geologi dan batimetri. Bentuk pada peta membantu
                membaca perubahan bentang alam; ia tidak menunjukkan wilayah politik.
              </p>
              <ul className="source-list">
                <li>
                  <a
                    href="https://github.com/aourednik/historical-basemaps"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Historical Basemaps — rekonstruksi daratan prasejarah ↗
                  </a>{' '}
                  <span>(CC BY-SA 4.0)</span>
                </li>
                <li>
                  <a
                    href="https://doi.org/10.1073/pnas.1411762111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lambeck et al. (2014), perubahan muka laut sejak Last Glacial Maximum ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://doi.org/10.1046/j.1365-2699.2000.00489.x"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voris (2000), peta muka laut Pleistosen Asia Tenggara ↗
                  </a>
                </li>
                <li>
                  <span>
                    Molengraaff &amp; Weber (1921),{' '}
                    <em>
                      On the relation between the Pleistocene glacial period and the origin of the
                      Sunda Sea
                    </em>
                    .
                  </span>
                </li>
              </ul>
              <p className="source-note">
                Peta menampilkan beberapa ambang kedalaman sebagai pendekatan visual. Ambang itu
                bukan rekonstruksi garis pantai yang presisi untuk setiap tahun.
              </p>
              <p className="source-note">
                Rujukan desain dan interaksi, bukan sumber data sejarah:{' '}
                <a
                  href="https://github.com/DeanChensj/jiangshan-map"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jiangshan Map ↗
                </a>
                .
              </p>
            </section>

            <section className="source-section" id="peta-dasar">
              <p className="source-section-kicker">03 / GEOGRAFI</p>
              <h2>Geografi modern</h2>
              <div className="source-entry">
                <div className="source-entry-heading">
                  <h3>Natural Earth · Admin 0, skala 1:10m</h3>
                  <span className="source-license">Domain publik</span>
                </div>
                <p>
                  Geometri Indonesia modern pada peta dasar diekstrak dari Natural Earth. Data ini
                  digunakan sebagai konteks geografis masa kini, bukan sebagai bukti batas historis.
                </p>
                <ul className="source-links">
                  <li>
                    <a
                      href="https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_10m_admin_0_countries.geojson"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Berkas sumber Natural Earth ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.naturalearthdata.com/about/terms-of-use/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ketentuan penggunaan ↗
                    </a>
                  </li>
                </ul>
              </div>
              <p className="source-note">
                Lapisan provinsi, sungai, rute, gunung, dan toponim adalah katalog proyek yang
                dikelola terpisah. Lihat{' '}
                <a
                  href={`${repository}/blob/main/docs/sumber-data.md`}
                  target="_blank"
                  rel="noreferrer"
                >
                  catatan data repository ↗
                </a>{' '}
                untuk inventaris serta metadata sumber yang tersedia.
              </p>
            </section>

            <section className="source-section" id="item">
              <p className="source-section-kicker">04 / RUJUKAN ITEM</p>
              <h2>Peristiwa &amp; situs</h2>
              <p>
                Rujukan yang mendukung tanggal atau keterangan tertentu dicantumkan dekat itemnya:
                pada detail peristiwa di panel linimasa, atau pada detail kerajaan dan situs. Dengan
                begitu, pembaca bisa menilai sumber yang langsung mendukung klaim tersebut.
              </p>
              <p>
                Koleksi situs saat ini memuat catatan kurasi awal dan perkiraan kawasan; sumber atau
                rentang ilustratif pada suatu entri tidak otomatis membuktikan penggunaan situs pada
                setiap tahun yang dipilih.
              </p>
              <p className="source-note">
                Untuk kontribusi, cantumkan tautan artikel atau dokumen yang mendukung klaim,
                penerbit, tanggal akses, lisensi, serta catatan ketidakpastian. Lihat{' '}
                <a
                  href={`${repository}/blob/main/CONTRIBUTING.md`}
                  target="_blank"
                  rel="noreferrer"
                >
                  panduan kontribusi ↗
                </a>
                .
              </p>
            </section>

            <section className="source-section" id="perangkat-lunak">
              <p className="source-section-kicker">05 / TEKNOLOGI</p>
              <h2>Perangkat lunak</h2>
              <p>
                Terima kasih kepada para pemelihara dan kontributor proyek sumber terbuka berikut.
                Daftar ini mencakup dependensi langsung aplikasi dan alat pengembangan; dependensi
                lengkap beserta versinya ada di berkas manifest dan lockfile repository.
              </p>
              <ul className="software-list">
                <li>
                  <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                    Next.js ↗
                  </a>
                  <span>kerangka aplikasi dan routing</span>
                </li>
                <li>
                  <a href="https://react.dev/reference/react-dom" target="_blank" rel="noreferrer">
                    React &amp; React DOM ↗
                  </a>
                  <span>antarmuka dan rendering DOM</span>
                </li>
                <li>
                  <a
                    href="https://maplibre.org/maplibre-gl-js/docs/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MapLibre GL JS ↗
                  </a>
                  <span>render peta interaktif</span>
                </li>
                <li>
                  <a href="https://lucide.dev/" target="_blank" rel="noreferrer">
                    Lucide ↗
                  </a>
                  <span>ikon antarmuka</span>
                </li>
                <li>
                  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                    TypeScript ↗
                  </a>
                  <span>bahasa dan pemeriksaan tipe</span>
                </li>
                <li>
                  <a href="https://oxc.rs/" target="_blank" rel="noreferrer">
                    Oxlint &amp; Oxfmt ↗
                  </a>
                  <span>lint dan format kode</span>
                </li>
                <li>
                  <a href="https://tsx.is/" target="_blank" rel="noreferrer">
                    tsx ↗
                  </a>
                  <span>menjalankan tes TypeScript</span>
                </li>
                <li>
                  <a href="https://nodejs.org/api/test.html" target="_blank" rel="noreferrer">
                    Node.js test runner ↗
                  </a>
                  <span>runner tes bawaan</span>
                </li>
              </ul>
              <p className="source-note">
                Untuk nama paket, versi yang dipasang, dan lisensi masing-masing dependensi, lihat{' '}
                <a href={`${repository}/blob/main/package.json`} target="_blank" rel="noreferrer">
                  package.json ↗
                </a>{' '}
                dan{' '}
                <a href={`${repository}/blob/main/pnpm-lock.yaml`} target="_blank" rel="noreferrer">
                  pnpm-lock.yaml ↗
                </a>
                .
              </p>
            </section>

            <section className="source-section" id="metode">
              <p className="source-section-kicker">06 / CARA MEMBACA</p>
              <h2>Metode &amp; batasan</h2>
              <ul className="method-list">
                <li>
                  Poligon adalah rekonstruksi dari sumber, bukan batas survei atau klaim legal.
                </li>
                <li>
                  Rentang snapshot dapat berbeda dari tanggal berdiri atau berakhirnya sebuah
                  kerajaan.
                </li>
                <li>
                  Tahun tanpa snapshot berarti data wilayah belum tersedia pada koleksi ini; itu
                  bukan bukti kerajaan tidak ada.
                </li>
                <li>
                  Warna, penyederhanaan, dan penempatan label merupakan keputusan visual atlas.
                  Hubungan kekuasaan dapat belum dibedakan oleh dataset sumber.
                </li>
              </ul>
              <p className="source-note">
                Detail provenance dan prosedur kurasi dicatat di{' '}
                <a href={`${repository}/tree/main/docs`} target="_blank" rel="noreferrer">
                  dokumentasi repository ↗
                </a>
                .
              </p>
            </section>

            <footer className="sources-footer">
              <span>Halaman kredit untuk Nusantara Atlas.</span>
              <Link href="/">Kembali ke peta kerajaan ↑</Link>
            </footer>
          </article>
        </div>
      </div>
    </main>
  );
}
