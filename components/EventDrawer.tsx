'use client';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import {
  Activity,
  BookOpen,
  Calendar,
  Search,
  ChevronRight,
  ExternalLink,
  Flag,
  Landmark,
  MapPin,
  ShieldAlert,
  Waves,
  X,
} from 'lucide-react';
import { getEventColor, TIMELINE_EVENTS, TimelineEvent } from '../lib/events';
import { matchesEventFilter, searchEvents, type EventFilter } from '../lib/event-filters';
import { resolveEventLocation } from '../lib/event-locations';

interface EventDrawerProps {
  currentYear: number;
  onSelectYear: (year: number) => void;
  selectedEventId?: string | null;
  onSelectEvent?: (event: TimelineEvent) => void;
  isOpen: boolean;
  onClose: () => void;
}

const evidenceLabels = {
  documented: 'Terdokumentasi',
  approximate: 'Tanggal perkiraan',
  contested: 'Diperdebatkan',
  reconstruction: 'Rekonstruksi ilmiah',
};

function formatExactDate(date: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

function formatEventYear(year: number): string {
  if (year < 0) {
    const abs = Math.abs(year);
    if (abs >= 1000) {
      return `${(abs / 1000).toLocaleString('id-ID', { maximumFractionDigits: 1 })}rb SM`;
    }
    return `${abs} SM`;
  }
  return `${year} M`;
}

function getCategoryBadge(category: string): { label: string; className: string } {
  switch (category) {
    case 'disaster':
      return { label: 'Bencana Alam', className: 'category-disaster' };
    case 'disease':
      return { label: 'Wabah & Penyakit', className: 'category-disease' };
    case 'politics':
      return { label: 'Politik & Masyarakat', className: 'category-war' };
    case 'culture':
      return { label: 'Budaya & Organisasi', className: 'category-kingdom' };
    case 'violence':
      return { label: 'Kekerasan & Teror', className: 'category-war' };
    case 'war':
      return { label: 'Perang & Militer', className: 'category-war' };
    case 'kingdom':
      return { label: 'Kerajaan', className: 'category-kingdom' };
    case 'colonial':
      return { label: 'Kolonial', className: 'category-war' };
    case 'independence':
      return { label: 'Kemerdekaan', className: 'category-independence' };
    case 'diplomacy':
      return { label: 'Diplomasi', className: 'category-independence' };
    case 'figure':
      return { label: 'Tokoh', className: 'category-kingdom' };
    case 'sea-level':
      return { label: 'Muka Laut', className: 'category-sea-level' };
    case 'climate':
      return { label: 'Iklim Purba', className: 'category-climate' };
    case 'geology':
      return { label: 'Geologi', className: 'category-geology' };
    default:
      return { label: 'Peristiwa', className: 'category-geology' };
  }
}

export default function EventDrawer({
  currentYear,
  onSelectYear,
  selectedEventId,
  onSelectEvent,
  isOpen,
  onClose,
}: EventDrawerProps) {
  const [filter, setFilter] = useState<EventFilter>('recorded');
  const [query, setQuery] = useState('');
  const activeCardRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const lastSelectedEventIdRef = useRef<string | null>(null);

  const count = (value: EventFilter) =>
    TIMELINE_EVENTS.filter((event) => matchesEventFilter(event, value)).length;
  const filteredEvents = searchEvents(TIMELINE_EVENTS, filter, query);

  useEffect(() => {
    if (lastSelectedEventIdRef.current === selectedEventId) return;
    lastSelectedEventIdRef.current = selectedEventId ?? null;
    if (!selectedEventId) return;

    const selectedEvent = TIMELINE_EVENTS.find((event) => event.id === selectedEventId);
    if (selectedEvent && !searchEvents([selectedEvent], filter, query).length) {
      setFilter('all');
      setQuery('');
    }
  }, [selectedEventId, filter, query]);

  // Find active event closest to current year
  const activeEvent =
    filteredEvents.find((event) => event.id === selectedEventId) ??
    filteredEvents.reduce<TimelineEvent | null>((closest, event) => {
      if (!closest) return event;
      return Math.abs(currentYear - event.year) < Math.abs(currentYear - closest.year)
        ? event
        : closest;
    }, null);
  const activeId = activeEvent?.id;

  // Smooth scroll active card into view
  useEffect(() => {
    if (isOpen && activeCardRef.current) {
      activeCardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeId, isOpen]);

  if (!isOpen) return null;

  return (
    <aside className="event-drawer" aria-label="Linimasa Peristiwa Sejarah dan Geologis">
      <div className="event-drawer-header">
        <div className="event-drawer-title">
          <Calendar size={16} className="event-header-icon" />
          <div>
            <h2>Peristiwa Nusantara</h2>
            <span className="event-subtitle">Kejadian tercatat, tanggal, dan sumber detail</span>
          </div>
        </div>
        <button
          className="icon-button event-close-button"
          aria-label="Tutup panel peristiwa"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>

      <label className="event-search">
        <Search size={14} aria-hidden="true" />
        <input
          type="search"
          aria-label="Cari peristiwa"
          placeholder="Cari kejadian, tokoh, wilayah, atau sumber…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      <div className="event-filters" role="tablist" aria-label="Kategori peristiwa">
        <button
          role="tab"
          aria-selected={filter === 'recorded'}
          className={filter === 'recorded' ? 'active' : ''}
          onClick={() => setFilter('recorded')}
        >
          <BookOpen size={12} /> Rekaman sejarah ({count('recorded')})
        </button>
        <button
          role="tab"
          aria-selected={filter === 'disease'}
          className={filter === 'disease' ? 'active' : ''}
          onClick={() => setFilter('disease')}
        >
          <Activity size={12} /> Wabah ({count('disease')})
        </button>
        <button
          role="tab"
          aria-selected={filter === 'all'}
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Semua ({TIMELINE_EVENTS.length})
        </button>
        <button
          role="tab"
          aria-selected={filter === 'geology'}
          className={filter === 'geology' ? 'active' : ''}
          onClick={() => setFilter('geology')}
        >
          <Waves size={12} /> Bencana &amp; Geologi ({count('geology')})
        </button>
        <button
          role="tab"
          aria-selected={filter === 'kingdom'}
          className={filter === 'kingdom' ? 'active' : ''}
          onClick={() => setFilter('kingdom')}
        >
          <Landmark size={12} /> Kerajaan ({count('kingdom')})
        </button>
        <button
          role="tab"
          aria-selected={filter === 'colonial-war'}
          className={filter === 'colonial-war' ? 'active' : ''}
          onClick={() => setFilter('colonial-war')}
        >
          <ShieldAlert size={12} /> Kolonial &amp; Perang ({count('colonial-war')})
        </button>
        <button
          role="tab"
          aria-selected={filter === 'independence'}
          className={filter === 'independence' ? 'active' : ''}
          onClick={() => setFilter('independence')}
        >
          <Flag size={12} /> Kemerdekaan &amp; Republik ({count('independence')})
        </button>
      </div>

      <p className="event-result-count" role="status">
        {filteredEvents.length} peristiwa cocok · rekonstruksi prasejarah tersedia di tab
        Semua/Geologi.
      </p>
      <div className="event-list" ref={listRef} role="feed">
        {filteredEvents.length === 0 && (
          <p className="event-empty">
            Tidak ada peristiwa yang cocok. Ubah kata pencarian atau kategori.
          </p>
        )}
        {filteredEvents.map((event) => {
          const isActive = activeId === event.id;
          const badge = getCategoryBadge(event.category);
          const location = resolveEventLocation(event);
          const selectEvent = () =>
            onSelectEvent ? onSelectEvent(event) : onSelectYear(event.year);

          return (
            <div
              key={event.id}
              ref={isActive ? activeCardRef : null}
              className={`event-card ${isActive ? 'active' : ''}`}
              style={{ '--event-color': getEventColor(event.id) } as CSSProperties}
              onClick={selectEvent}
              role="article"
              aria-label={`Pilih peristiwa ${event.title}${location ? `, lokasi ${location.name}` : ''}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.target !== e.currentTarget) return;
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  selectEvent();
                }
              }}
            >
              <div className="event-card-left">
                <span className="event-year-badge">
                  <i className="event-marker-swatch" aria-hidden="true" />
                  {formatEventYear(event.year)}
                  {event.endYear && event.endYear !== event.year
                    ? `–${formatEventYear(event.endYear)}`
                    : ''}
                </span>
                <span className={`event-category-badge ${badge.className}`}>{badge.label}</span>
                {event.region && <span className="event-region-badge">{event.region}</span>}
                {event.seaLevelMeters !== undefined && (
                  <span className="event-sea-tag">
                    {event.seaLevelMeters > 0
                      ? `+${event.seaLevelMeters}m`
                      : `${event.seaLevelMeters}m`}
                  </span>
                )}
              </div>

              <div className="event-card-body">
                <div className="event-card-top">
                  <h3 className="event-title">{event.title}</h3>
                  <ChevronRight size={14} className="event-arrow" />
                </div>
                {event.subtitle && <div className="event-sub">{event.subtitle}</div>}
                {event.date && (
                  <time className="event-exact-date" dateTime={event.date}>
                    {formatExactDate(event.date)}
                  </time>
                )}
                {location && (
                  <div
                    className="event-location-line"
                    title={
                      location.precision === 'place'
                        ? 'Lokasi peristiwa yang disebut sumber'
                        : 'Lokasi perkiraan berdasarkan wilayah peristiwa'
                    }
                  >
                    <MapPin size={10} />
                    <span>{location.name}</span>
                    {location.precision !== 'place' && <small>perkiraan</small>}
                  </div>
                )}
                {event.evidence && (
                  <span className={`event-evidence evidence-${event.evidence}`}>
                    {evidenceLabels[event.evidence]}
                  </span>
                )}
                {event.dateNote && <p className="event-date-note">{event.dateNote}</p>}
                <p className="event-summary">{event.summary}</p>
                <div className="event-impact">
                  <strong>Dampak:</strong> {event.impact}
                </div>

                {event.sources && event.sources.length > 0 && (
                  <div className="event-sources">
                    <span className="event-sources-label">
                      <BookOpen size={11} /> Sumber &amp; bacaan detail:
                    </span>
                    <div className="event-sources-list">
                      {event.sources.map((s, idx) => (
                        <a
                          key={idx}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="event-source-link"
                          onClick={(e) => e.stopPropagation()}
                          title={`${s.title} (${s.sourceName || 'Rujukan'})`}
                        >
                          <span>
                            {s.title}
                            {s.sourceName ? <small>{s.sourceName}</small> : null}
                          </span>
                          <ExternalLink size={10} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="event-tags">
                  {event.tags.map((t) => (
                    <span key={t} className="event-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="event-drawer-footer">
        <small>
          Klik peristiwa untuk memilih tahun. Link sumber membuka bacaan detail; tanggal perkiraan
          dan perdebatan ditandai.
        </small>
      </div>
    </aside>
  );
}
