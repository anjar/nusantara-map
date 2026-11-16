'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { BookOpen, Calendar, ChevronRight, ExternalLink, Search, X } from 'lucide-react';
import type { KingdomCollection, KingdomTimeline, PaleoshorelineCollection } from './types';
import {
  getSeaLevel,
  getThreshold,
  getEraLabel,
  paleoshorelinePath,
  Threshold,
} from '../lib/sea-level';
import Timeline from './Timeline';
import EventDrawer from './EventDrawer';
import LayerControl, { type LayerSettings } from './LayerControl';
import { TIMELINE_EVENTS, type TimelineEvent } from '../lib/events';
import { resolveEventLocation } from '../lib/event-locations';

const TerritoryMap = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <div className="map-loading">Membuka peta kerajaan…</div>,
});

const EMPTY: KingdomCollection = { type: 'FeatureCollection', features: [] };
const paleoCache = new Map<Threshold, PaleoshorelineCollection>();
const relationships: Record<string, string> = {
  unspecified: 'belum dibedakan',
  control: 'kekuasaan langsung',
  influence: 'pengaruh',
  tributary: 'upeti',
};
const yearLabel = (year: number) =>
  year < 0 ? `${Math.abs(year).toLocaleString('id-ID')} SM` : `${year} M`;
const SLIDER_MIN = -20000;

export default function KingdomAtlas() {
  const [year, setYear] = useState(1350);
  const [currentYear, setCurrentYear] = useState(new Date().getUTCFullYear());
  const [data, setData] = useState<KingdomCollection>(EMPTY);
  const [timeline, setTimeline] = useState<KingdomTimeline[]>([]);
  const [selected, setSelected] = useState<string | null>('majapahit');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [showBorders, setShowBorders] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [focusKey, setFocusKey] = useState(0);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [eventFocusKey, setEventFocusKey] = useState(0);
  const [urlInitialized, setUrlInitialized] = useState(false);
  const [paleoshoreline, setPaleoshoreline] = useState<PaleoshorelineCollection | null>(null);

  // Geological feature toggles
  const [eventsOpen, setEventsOpen] = useState(true);

  // Layers Popover Settings
  const [layers, setLayers] = useState<LayerSettings>({
    realms: true,
    cities: true,
    events: true,
    provinceNames: true,
  });

  const seaLevel = getSeaLevel(year);
  const threshold = getThreshold(seaLevel);
  const eraLabel = getEraLabel(year);

  const handleLayerChange = (next: LayerSettings) => {
    setLayers(next);
    if (next.events !== layers.events) {
      setEventsOpen(next.events);
    }
    if (next.realms !== layers.realms) {
      setShowBorders(next.realms);
    }
  };

  useEffect(() => {
    if (!threshold) {
      setPaleoshoreline(null);
      return;
    }
    if (paleoCache.has(threshold)) {
      setPaleoshoreline(paleoCache.get(threshold)!);
      return;
    }
    const path = paleoshorelinePath(threshold);
    fetch(path)
      .then(async (r) => {
        if (!r.ok) throw new Error();
        const json = await r.json();
        paleoCache.set(threshold, json);
        setPaleoshoreline(json);
      })
      .catch(() => setPaleoshoreline(null));
  }, [threshold]);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/kingdoms/timeline', { signal: controller.signal })
      .then(async (r) => {
        if (!r.ok) throw Error();
        const result = await r.json();
        setTimeline(result.kingdoms);
        setCurrentYear(result.currentYear);
      })
      .catch((e) => {
        if (e.name !== 'AbortError')
          setError('Linimasa belum tersedia. Periksa API dan impor data kerajaan.');
      });
    return () => controller.abort();
  }, [retry]);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');
    if (year < -3400) {
      setData(EMPTY);
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      fetch(`/api/kingdoms?year=${year}`, { signal: controller.signal })
        .then(async (r) => {
          if (!r.ok) throw Error();
          const next = await r.json();
          setData(next);
          setLoading(false);
        })
        .catch((e) => {
          if (e.name !== 'AbortError') {
            setError('Data wilayah gagal dimuat. Periksa layanan API dan impor poligon.');
            setData(EMPTY);
            setLoading(false);
          }
        });
    }, 120);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [year, retry]);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setYear((y) => {
        if (y >= currentYear) {
          setPlaying(false);
          return currentYear;
        }
        const step = y < -1000 ? 500 : y < 0 ? 100 : 10;
        return Math.min(currentYear, y + step);
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, currentYear]);

  const kingdoms = [...new Map(data.features.map((f) => [f.properties.id, f.properties])).values()];
  const filtered = kingdoms.filter((k) =>
    k.name.toLocaleLowerCase('id').includes(search.toLocaleLowerCase('id')),
  );
  const active = kingdoms.find((k) => k.id === selected);
  const extentEnd = timeline.length ? Math.max(...timeline.map((k) => k.end_year)) : null;

  function choose(id: string) {
    setSelected(id);
    setSidebarOpen(true);
  }

  const changeYear = useCallback(
    (y: number) => {
      const nextYear = y === 0 ? 1 : Math.max(SLIDER_MIN, Math.min(currentYear, y));
      setSelectedEventId(null);
      setYear((previousYear) => (previousYear === nextYear ? previousYear : nextYear));
      setPlaying(false);
    },
    [currentYear],
  );

  const selectEvent = useCallback(
    (event: TimelineEvent) => {
      const nextYear =
        event.year === 0 ? 1 : Math.max(SLIDER_MIN, Math.min(currentYear, event.year));
      setSelectedEventId(event.id);
      setYear((previousYear) => (previousYear === nextYear ? previousYear : nextYear));
      setEventFocusKey((key) => key + 1);
      setPlaying(false);
    },
    [currentYear],
  );

  const selectedEvent = selectedEventId
    ? (TIMELINE_EVENTS.find((event) => event.id === selectedEventId) ?? null)
    : null;
  const eventMarkers = useMemo(() => {
    if (!eventsOpen || !selectedEvent) return [];
    const sameYear = TIMELINE_EVENTS.filter((event) => event.year === selectedEvent.year);
    return [...new Map([...sameYear, selectedEvent].map((event) => [event.id, event])).values()];
  }, [eventsOpen, selectedEvent]);

  useEffect(() => {
    const applySharedState = () => {
      const params = new URLSearchParams(window.location.search);
      const eventId = params.get('event');
      const sharedEvent = eventId
        ? (TIMELINE_EVENTS.find((event) => event.id === eventId) ?? null)
        : null;
      const yearParam = params.get('year');
      const parsedYear = yearParam ? Number(yearParam) : Number.NaN;
      const requestedYear = sharedEvent?.year ?? (Number.isInteger(parsedYear) ? parsedYear : 1350);
      const nextYear =
        requestedYear === 0 ? 1 : Math.max(SLIDER_MIN, Math.min(currentYear, requestedYear));

      setYear(nextYear);
      setSelectedEventId(sharedEvent?.id ?? null);
      setPlaying(false);
      if (sharedEvent) setEventFocusKey((key) => key + 1);
    };

    applySharedState();
    window.addEventListener('popstate', applySharedState);
    setUrlInitialized(true);
    return () => window.removeEventListener('popstate', applySharedState);
  }, [currentYear]);

  useEffect(() => {
    if (!urlInitialized) return;

    const url = new URL(window.location.href);
    url.searchParams.set('year', String(year));
    if (selectedEvent) {
      url.searchParams.set('event', selectedEvent.id);
      const location = resolveEventLocation(selectedEvent);
      if (location) {
        url.searchParams.set(
          'trace',
          `${location.coordinates[0].toFixed(3)},${location.coordinates[1].toFixed(3)}`,
        );
      }
    } else {
      url.searchParams.delete('event');
      url.searchParams.delete('trace');
    }

    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (nextUrl !== currentUrl) {
      window.history.replaceState(window.history.state, '', nextUrl);
    }
  }, [year, selectedEvent, urlInitialized]);

  return (
    <main className="atlas kingdom-atlas">
      <header className="header">
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
          <Link href="/" className="nav-active" aria-current="page">
            Peta kerajaan
          </Link>
          <Link href="/sources">Sumber &amp; kredit</Link>
        </nav>

        <div className="header-end">
          <LayerControl layers={layers} onChange={handleLayerChange} />

          <a
            href="https://github.com/anjar/nusantara-map"
            target="_blank"
            rel="noreferrer"
            className="header-pill-btn star-btn"
            title="Buka repositori dan bintang GitHub"
          >
            <span>⭐ Star</span>
          </a>
        </div>
      </header>

      <div className="workspace">
        <aside className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
          <div className="sidebar-top">
            <button
              className="mobile-close icon-button"
              aria-label="Tutup panel"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={18} />
            </button>
            <span className="eyebrow">KERAJAAN NUSANTARA</span>
            <h1>
              Wilayah berubah.
              <br />
              Sejarah berlanjut.
            </h1>
            <p>Telusuri kerajaan dan kesultanan melalui rekonstruksi wilayah per periode.</p>
            <label className="search">
              <Search size={17} />
              <input
                aria-label="Cari kerajaan"
                placeholder="Cari kerajaan pada tahun ini…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </div>

          <div className="side-tabs">
            <span className="side-tab-label">Kerajaan · {yearLabel(year)}</span>
          </div>

          <div className="side-scroll">
            {error && (
              <div role="alert" className="data-error">
                {error}
                <button onClick={() => setRetry((r) => r + 1)}>Coba lagi</button>
              </div>
            )}
            <div className="section-heading">
              <span>WILAYAH PADA TAHUN INI</span>
              <span className="count">{loading ? '…' : filtered.length}</span>
            </div>
            {!loading && !error && !filtered.length && (
              <div className="kingdom-empty">
                <h2>
                  {year <= -4000 ? 'Era Prasejarah & Geologis' : 'Belum ada wilayah tercatat.'}
                </h2>
                <p>
                  {year <= -4000
                    ? `Pada ${yearLabel(year)}, peradaban kerajaan terorganisir belum tercatat di Nusantara. Peta menampilkan rekonstruksi geologis daratan Paparan Sunda dan Sahul pada Zaman Es ketika permukaan laut lebih rendah.`
                    : extentEnd && year > extentEnd
                      ? `Subset poligon kerajaan saat ini berakhir pada ${yearLabel(extentEnd)}. Ini tidak membuktikan kerajaan atau institusinya berhenti pada tahun itu.`
                      : 'Belum ada poligon bersumber yang cocok dengan tahun atau pencarian ini.'}
                </p>
                <button onClick={() => changeYear(1350)}>Lihat era Majapahit (1350 M)</button>
              </div>
            )}
            <div className="site-list" aria-busy={loading}>
              {filtered.map((k) => (
                <button
                  key={k.id}
                  onClick={() => choose(k.id)}
                  className={`site-row ${selected === k.id ? 'active' : ''}`}
                >
                  <span className="kingdom-swatch" style={{ background: k.color }} />
                  <span>
                    <strong>{k.name}</strong>
                    <small>
                      Snapshot {yearLabel(k.startYear)}–{yearLabel(k.endYear)}
                    </small>
                  </span>
                  <ChevronRight size={15} />
                </button>
              ))}
            </div>
            {active && (
              <article className="site-detail">
                <span className="eyebrow">REKONSTRUKSI WILAYAH</span>
                <h2>{active.name}</h2>
                {active.description && <p>{active.description}</p>}
                <p>
                  Poligon berlaku pada rentang snapshot {yearLabel(active.startYear)}–
                  {yearLabel(active.endYear)} menurut sumber, bukan tanggal pasti berdiri/runtuh.
                </p>
                <p className="kingdom-caveat">{active.notes}</p>
                <div className="source-card">
                  <a href={active.sourceUrl} target="_blank" rel="noreferrer">
                    Sumber geometri <ExternalLink size={13} />
                  </a>
                  <small>{active.attribution}</small>
                  <small>
                    Hubungan wilayah: {relationships[active.relationship] || active.relationship}
                  </small>
                  {active.wikipediaTitle && (
                    <a
                      href={`https://id.wikipedia.org/wiki/${encodeURIComponent(
                        active.wikipediaTitle.replaceAll(' ', '_'),
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Profil &amp; sejarah <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </article>
            )}
          </div>
          <div className="sidebar-foot">
            <BookOpen size={16} />
            <span>
              Batas adalah rekonstruksi.
              <br />
              <Link href="/sources" className="sidebar-source-link">
                Sumber, kredit &amp; metode →
              </Link>
            </span>
          </div>
        </aside>

        <section className="map-area" aria-label="Peta wilayah kerajaan Nusantara">
          <TerritoryMap
            historical
            sites={[]}
            selected={null}
            showSites={false}
            onSelect={() => {}}
            focus="indonesia"
            focusKey={focusKey}
            eventMarkers={eventMarkers}
            selectedEventId={selectedEventId}
            eventFocusKey={eventFocusKey}
            onEventSelect={(id) => {
              const event = TIMELINE_EVENTS.find((candidate) => candidate.id === id);
              if (event) selectEvent(event);
            }}
            kingdoms={layers.realms ? (showBorders ? data : EMPTY) : EMPTY}
            kingdomSelected={selected}
            onKingdomSelect={choose}
            paleoshoreline={paleoshoreline}
            showRivers={false}
            showMountains={false}
            year={year}
            showRealms={layers.realms}
            showAdminDivisions={false}
            showCities={layers.cities}
            showRoutesAndWalls={false}
            showTerrainAndRivers={true}
            showProvinces={false}
            showProvinceNames={layers.provinceNames}
          />

          <div className="map-top">
            <div className="breadcrumbs">
              <button onClick={() => setFocusKey((v) => v + 1)}>Nusantara</button>
              <ChevronRight size={13} />
              <span>{yearLabel(year)}</span>
            </div>

            <div className="map-top-actions">
              <LayerControl layers={layers} onChange={handleLayerChange} />

              <button
                className={`events-toggle-btn ${eventsOpen ? 'chosen' : ''}`}
                onClick={() => {
                  const next = !eventsOpen;
                  setEventsOpen(next);
                  setLayers((prev) => ({ ...prev, events: next }));
                }}
                title="Buka daftar kronologi peristiwa"
              >
                <Calendar size={14} /> Peristiwa ({TIMELINE_EVENTS.length})
              </button>
            </div>
          </div>

          {!sidebarOpen && (
            <button className="open-panel" onClick={() => setSidebarOpen(true)}>
              <BookOpen size={16} /> Daftar kerajaan
            </button>
          )}
          {!eventsOpen && (
            <button
              className="open-events-btn"
              onClick={() => {
                setEventsOpen(true);
                setLayers((prev) => ({ ...prev, events: true }));
              }}
            >
              <Calendar size={14} /> Linimasa Peristiwa
            </button>
          )}

          <div className="kingdom-map-note">
            <span className="eyebrow">{yearLabel(year)}</span>
            <strong>Kerajaan &amp; kesultanan Nusantara</strong>
            <span>Rekonstruksi sumber · toponim dinamis SM–sekarang</span>
          </div>

          <div className="kingdom-legend" aria-label="Legenda kerajaan">
            {paleoshoreline && (
              <div className="paleo-legend-item">
                <i className="paleo-legend-swatch" />
                <span>Paparan Sunda &amp; Sahul (Daratan Purba)</span>
              </div>
            )}
            {layers.realms &&
              kingdoms.map((k) => (
                <button key={k.id} onClick={() => choose(k.id)} aria-pressed={selected === k.id}>
                  <i style={{ background: k.color }} />
                  {k.name}
                </button>
              ))}
            {!kingdoms.length && !paleoshoreline && (
              <span>Tidak ada snapshot wilayah pada tahun ini.</span>
            )}
          </div>

          <div className="kingdom-timeline-wrap">
            <Timeline
              currentYear={year}
              onYearChange={changeYear}
              isPlaying={playing}
              onTogglePlay={() => {
                const nextPlaying = !playing;
                setPlaying(nextPlaying);
                if (nextPlaying) setSelectedEventId(null);
              }}
              maxYear={currentYear}
            />
            <div className="timeline-sub-bar">
              <details className="kingdom-periods">
                <summary>Cakupan poligon tiap kerajaan ({timeline.length})</summary>
                <div>
                  {timeline.map((k) => (
                    <button
                      key={k.id}
                      onClick={() => {
                        changeYear(k.start_year);
                        setSelected(k.id);
                      }}
                    >
                      <i style={{ background: k.color }} />
                      <strong>{k.name}</strong>
                      <span>
                        {k.start_year}–{k.end_year}
                      </span>
                    </button>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </section>

        <EventDrawer
          currentYear={year}
          onSelectYear={changeYear}
          selectedEventId={selectedEventId}
          onSelectEvent={selectEvent}
          isOpen={eventsOpen}
          onClose={() => {
            setSelectedEventId(null);
            setEventsOpen(false);
            setLayers((prev) => ({ ...prev, events: false }));
          }}
        />
      </div>
    </main>
  );
}
