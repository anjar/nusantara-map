'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, BookOpen, Check, ChevronDown, ChevronRight, ExternalLink, Flag, Globe2, Info, Layers3, MapPin, Pause, Play, Search, X } from 'lucide-react';
import type { Site } from './types';
const Map = dynamic(() => import('./Map'), { ssr: false, loading: () => <div className="map-loading">Membuka atlas…</div> });
export default function Atlas() {
  const [year, setYear] = useState(1350);
  const [sites, setSites] = useState<Site[]>([]);
  const [selected, setSelected] = useState<string | null>('trowulan');
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'overview' | 'sources'>('overview');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [showSites, setShowSites] = useState(true);
  const [layersOpen, setLayersOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [focus, setFocus] = useState<'java' | 'indonesia'>('java');
  const [focusKey, setFocusKey] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true); setError('');
    const timer = setTimeout(() => {
      fetch(`/api/sites?year=${year}`, { signal: controller.signal }).then(async response => {
        if (!response.ok) throw new Error('Layanan data belum dapat diakses.');
        const result = await response.json(); setSites(result.sites); setLoading(false);
      }).catch(e => { if (e.name !== 'AbortError') { setError('Data situs gagal dimuat. Periksa layanan API dan database.'); setSites([]); setLoading(false); } });
    }, 150);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [year, retry]);
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => setYear(value => { if (value >= 1600) { setPlaying(false); return 1600; } return Math.min(1600, value + 10); }), 1200);
    return () => clearInterval(timer);
  }, [playing]);
  useEffect(() => {
    if (!aboutOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const handle = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAboutOpen(false);
      if (event.key === 'Tab') {
        const controls = document.querySelector('[role=dialog]')?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!controls?.length) return;
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handle);
    return () => { document.removeEventListener('keydown', handle); previous?.focus(); };
  }, [aboutOpen]);
  const active = sites.find(site => site.id === selected);
  const filtered = sites.filter(site => `${site.name} ${site.province}`.toLowerCase().includes(search.toLowerCase()));
  function choose(id: string) { setSelected(id); setTab('overview'); setSidebarOpen(true); }
  function go(region: 'java' | 'indonesia') { setFocus(region); setFocusKey(k => k + 1); }
  return <main className="atlas">
    <header className="header">
      <a href="/" className="brand" aria-label="Nusantara beranda"><Image src="/brand/nusantara-symbol.svg" alt="" aria-hidden="true" width={44} height={44} className="brand-icon"/><span>Nusantara<span className="brand-sub">ATLAS SEJARAH INDONESIA</span></span></a>
      <nav aria-label="Navigasi utama"><button className="nav-active" onClick={() => setAboutOpen(false)}>Jelajahi peta</button><button onClick={() => { setTab('sources'); setSidebarOpen(true); }}>Sumber & catatan <ExternalLink size={12}/></button></nav>
      <div className="header-end"><span className="edition">EDISI PERDANA</span><button className="about-button" onClick={() => setAboutOpen(true)}><Info size={15}/> Tentang atlas</button></div>
    </header>
    <div className="workspace">
      <aside className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
        <div className="sidebar-top"><span className="eyebrow"><span className="live-dot"/> JELAJAHI NUSANTARA</span><button className="mobile-close icon-button" aria-label="Tutup panel" onClick={() => setSidebarOpen(false)}><X size={18}/></button>
          <h1>Setiap tempat,<br/><em>menyimpan cerita.</em></h1><p>Telusuri jejak masa lalu Indonesia,<br/>satu tempat, satu waktu.</p>
          <label className="search"><Search size={17}/><input placeholder="Cari situs atau wilayah…" aria-label="Cari situs atau wilayah" value={search} onChange={e => setSearch(e.target.value)}/><span>⌕</span></label>
        </div>
        <div className="side-tabs" role="tablist" aria-label="Informasi atlas"><button role="tab" aria-selected={tab==='overview'} className={tab==='overview'?'active':''} onClick={() => setTab('overview')}>Ringkasan</button><button role="tab" aria-selected={tab==='sources'} className={tab==='sources'?'active':''} onClick={() => setTab('sources')}>Sumber & catatan <span>↗</span></button></div>
        <div className="side-scroll">
          {tab === 'overview' ? <>
            <div className="section-heading"><span>SITUS DI PETA</span><span className="count">{loading ? '…' : filtered.length}</span></div>
            {error && <div role="alert" className="data-error">{error}<button onClick={() => setRetry(r=>r+1)}>Coba lagi</button></div>}
            {!loading && !error && filtered.length===0 && <p className="empty">Belum ada situs untuk pencarian atau tahun ini. Coba tahun lain.</p>}
            <div className="site-list" aria-busy={loading}>{filtered.map(site => <button key={site.id} onClick={() => choose(site.id)} className={`site-row ${selected===site.id?'active':''}`}><span className="site-row-icon">{site.kind==='Pusat perkotaan'?<Flag size={17}/>:<MapPin size={17}/>}</span><span><strong>{site.name}</strong><small>{site.province} <i>·</i> {site.kind}</small></span><ChevronRight size={15}/></button>)}</div>
            {active && <article className="site-detail"><div className="detail-ornament"><span>✦</span><div/><span>JEJAK SEJARAH</span></div><span className="eyebrow">{active.province.toUpperCase()}</span><h2>{active.name}</h2><p className="detail-subtitle">{active.title}</p><p>{active.description}</p><div className="detail-facts"><span><MapPin size={13}/> {Math.abs(active.latitude).toFixed(3)}° LS · {active.longitude.toFixed(3)}° BT</span><span>Lokasi {active.confidence} · tanggal belum terverifikasi</span></div><button className="source-link" onClick={() => setTab('sources')}>Baca sumber & catatan <ArrowRight size={15}/></button></article>}
          </> : <div className="sources"><span className="eyebrow">TRANSPARANSI DATA</span><h2>Sejarah punya sumber.</h2><p>Dataset awal untuk menguji atlas. Koordinat bersifat perkiraan; rentang tahun adalah filter ilustratif dan belum membuktikan penggunaan aktif situs.</p>{active && <div className="source-card"><BookOpen size={20}/><strong>{active.name}</strong><a href={active.sourceUrl} target="_blank" rel="noreferrer">{active.sourceTitle}<ExternalLink size={14}/></a><small>{active.curationStatus}. Referensi umum belum memvalidasi seluruh klaim per objek.</small></div>}<h3>Peta dasar</h3><p>Geometri Indonesia modern dari Natural Earth, skala 1:10 juta, domain publik. Garis pantai ini bukan rekonstruksi masa lampau.</p><a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noreferrer">Natural Earth <ExternalLink size={13}/></a><h3>Tentang wilayah kerajaan</h3><p>Batas kerajaan belum ditampilkan. Wilayah kekuasaan langsung, upeti, dan pengaruh memerlukan sumber serta layer tersendiri.</p></div>}
        </div>
        <div className="sidebar-foot"><BookOpen size={16}/><span>Disusun dengan rasa ingin tahu.<br/><strong>Dibaca dengan pikiran terbuka.</strong></span><ArrowDown size={16}/></div>
      </aside>
      <section className="map-area" aria-label="Peta interaktif sejarah Indonesia">
        <Map sites={filtered} selected={selected} onSelect={choose} showSites={showSites} focus={focus} focusKey={focusKey}/>
        <div className="map-top"><div className="breadcrumbs"><Globe2 size={15}/><button onClick={() => go('indonesia')}>Indonesia</button><ChevronRight size={13}/><button onClick={() => go('java')}>Pulau Jawa</button><span className="tiny-pill">EKSPLORASI AWAL</span></div><button className={`layer-button ${layersOpen?'chosen':''}`} onClick={() => setLayersOpen(!layersOpen)} aria-expanded={layersOpen}><Layers3 size={17}/> Layer peta <ChevronDown size={13}/></button></div>
        {!sidebarOpen && <button className="open-panel" onClick={() => setSidebarOpen(true)}><BookOpen size={16}/> Jelajahi situs</button>}
        {layersOpen && <div className="layers-popover"><strong>Tampilan peta</strong><label><input type="checkbox" checked={showSites} onChange={e => setShowSites(e.target.checked)}/> Situs sejarah</label><div><Check size={14}/> Geografi Indonesia</div><p>Wilayah kerajaan belum dikurasi.</p><button onClick={() => { go('indonesia'); setLayersOpen(false); }}>Lihat seluruh Indonesia <ArrowRight size={14}/></button></div>}
        <div className="map-intro"><span className="eyebrow">MENELUSURI RUANG & WAKTU</span><h2>Jawa, dalam lintasan sejarah.</h2><p>Geser peta untuk menjelajah. Gulir untuk mendekat.</p></div>
        <div className="map-bottom"><div className="legend"><span><i className="legend-site"/> Situs sejarah</span><span><i className="legend-land"/> Daratan Indonesia</span><button aria-label="Penjelasan data peta" onClick={() => {setTab('sources');setSidebarOpen(true);}}><Info size={14}/></button></div></div>
        <div className="timeline">
          <div className="timeline-header"><div><span className="eyebrow">MESIN WAKTU</span><span className="timeline-prompt">Pilih tahun, temukan jejaknya.</span></div><div className="year-display">{year}<span>Masehi</span></div><button className="era-button" onClick={() => {setYear(1350);setPlaying(false);}}>Era Majapahit <span>1293–1527</span><ChevronDown size={14}/></button></div>
          <div className="timeline-track"><button className="play-button" aria-label={playing?'Jeda linimasa':'Putar linimasa'} onClick={() => setPlaying(!playing)}>{playing?<Pause size={17} fill="currentColor"/>:<Play size={17} fill="currentColor"/>}</button><div className="range-wrap"><input type="range" aria-label="Tahun peta" min="700" max="1600" step="1" value={year} onChange={e=>{setYear(Number(e.target.value));setPlaying(false);}} style={{'--progress': `${(year-700)/9}%`} as React.CSSProperties}/><div className="year-ticks">{[700,800,900,1000,1100,1200,1300,1400,1500,1600].map(y=><button key={y} onClick={()=>{setYear(y);setPlaying(false);}}>{y}</button>)}</div></div><button className="year-next" aria-label="Tahun berikutnya" onClick={()=>setYear(y=>Math.min(1600,y+10))}><ArrowRight size={18}/></button></div>
          <div className="timeline-note"><Info size={12}/><span>Rentang tahun ilustratif · Situs yang ditampilkan bukan bukti aktivitas pada tahun terpilih.</span><span className="coverage">CAKUPAN DATA: JAWA</span></div>
        </div>
      </section>
    </div>
    {aboutOpen && <div className="modal-backdrop" onClick={()=>setAboutOpen(false)}><section role="dialog" aria-modal="true" aria-labelledby="about-title" className="about-modal" onClick={e=>e.stopPropagation()}><button autoFocus className="icon-button" aria-label="Tutup tentang atlas" onClick={()=>setAboutOpen(false)}><X size={20}/></button><Image src="/brand/nusantara-symbol.svg" alt="" aria-hidden="true" width={52} height={52} className="brand-icon"/><span className="eyebrow">ATLAS SEJARAH INDONESIA</span><h2 id="about-title">Mengenal masa lalu,<br/>melalui tempat.</h2><p>Nusantara adalah atlas eksplorasi sejarah Indonesia. Edisi perdana dimulai dari situs-situs di Jawa, dengan peta yang bisa digeser ke seluruh Indonesia.</p><p>Delapan situs awal adalah dataset demonstrasi yang masih memerlukan kurasi. Atlas ini belum menampilkan batas kerajaan atau kondisi geografis historis.</p><button className="primary-button" onClick={()=>setAboutOpen(false)}>Mulai menjelajah <ArrowRight size={16}/></button></section></div>}
  </main>;
}
