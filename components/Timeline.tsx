'use client';

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TIMELINE_EVENTS, TimelineEvent, findClosestEvent } from '../lib/events';
import {
  getAnchors,
  yearToSliderPos,
  sliderPosToYear,
  SLIDER_MAX_STEPS,
} from '../lib/timeline-slider';

export interface EraSegment {
  id: string;
  name: string;
  shortName: string;
  startYear: number;
  endYear: number;
  color: string;
}

export const MAIN_ERAS: EraSegment[] = [
  {
    id: 'ice-age',
    name: 'Zaman Es (LGM)',
    shortName: 'Zaman Es',
    startYear: -20000,
    endYear: -11500,
    color: '#2d4b5a',
  },
  {
    id: 'post-glacial',
    name: 'Holosen & Austronesia',
    shortName: 'Holosen',
    startYear: -11500,
    endYear: 400,
    color: '#356353',
  },
  {
    id: 'early-kingdoms',
    name: 'Tarumanagara & Kutai',
    shortName: 'Kutai & Taruma',
    startYear: 400,
    endYear: 674,
    color: '#7b4f87',
  },
  {
    id: 'srivijaya',
    name: 'Kemaharajaan Sriwijaya',
    shortName: 'Sriwijaya',
    startYear: 674,
    endYear: 1000,
    color: '#3d7363',
  },
  {
    id: 'medang-kediri',
    name: 'Medang & Panjalu Kediri',
    shortName: 'Medang & Kediri',
    startYear: 1000,
    endYear: 1222,
    color: '#4a6797',
  },
  {
    id: 'singhasari',
    name: 'Kerajaan Singasari',
    shortName: 'Singasari',
    startYear: 1222,
    endYear: 1293,
    color: '#557e3f',
  },
  {
    id: 'majapahit',
    name: 'Kemaharajaan Majapahit',
    shortName: 'Majapahit',
    startYear: 1293,
    endYear: 1500,
    color: '#a7455f',
  },
  {
    id: 'sultanates',
    name: 'Kesultanan Demak & Islam',
    shortName: 'Kesultanan Islam',
    startYear: 1500,
    endYear: 1602,
    color: '#6d5591',
  },
  {
    id: 'voc-era',
    name: 'VOC & Dinasti Mataram',
    shortName: 'Era VOC',
    startYear: 1602,
    endYear: 1800,
    color: '#a26a2e',
  },
  {
    id: 'dutch-east-indies',
    name: 'Hindia Belanda (Pax Neerlandica)',
    shortName: 'Hindia Belanda',
    startYear: 1800,
    endYear: 1942,
    color: '#b57930',
  },
  {
    id: 'japan-occupation',
    name: 'Pendudukan Jepang',
    shortName: 'Jepang',
    startYear: 1942,
    endYear: 1945,
    color: '#7a5175',
  },
  {
    id: 'indonesia',
    name: 'Republik Indonesia',
    shortName: 'Indonesia 🇮🇩',
    startYear: 1945,
    endYear: 2026,
    color: '#c8102e',
  },
];

export interface RegionalKingdom {
  id: string;
  name: string;
  region: 'Jawa' | 'Sumatera' | 'Kalimantan' | 'Sulawesi' | 'Bali';
  startYear: number;
  endYear: number;
  color: string;
}

export const REGIONAL_KINGDOMS: RegionalKingdom[] = [
  // Kalimantan
  {
    id: 'kutai',
    name: 'Kutai Martapura',
    region: 'Kalimantan',
    startYear: 400,
    endYear: 1635,
    color: '#b64e40',
  },
  {
    id: 'kutai-kartanegara',
    name: 'Kutai Kartanegara',
    region: 'Kalimantan',
    startYear: 1300,
    endYear: 1845,
    color: '#608c98',
  },

  // Sumatera
  {
    id: 'srivijaya-reg',
    name: 'Sriwijaya',
    region: 'Sumatera',
    startYear: 674,
    endYear: 1293,
    color: '#518979',
  },
  {
    id: 'pasai-reg',
    name: 'Samudera Pasai',
    region: 'Sumatera',
    startYear: 1272,
    endYear: 1520,
    color: '#577995',
  },
  {
    id: 'aceh-reg',
    name: 'Kesultanan Aceh',
    region: 'Sumatera',
    startYear: 1516,
    endYear: 1913,
    color: '#a36c3e',
  },

  // Jawa
  {
    id: 'taruma-reg',
    name: 'Tarumanagara',
    region: 'Jawa',
    startYear: 367,
    endYear: 673,
    color: '#9364a0',
  },
  {
    id: 'sunda-reg',
    name: 'Kerajaan Sunda',
    region: 'Jawa',
    startYear: 674,
    endYear: 1578,
    color: '#ba8745',
  },
  {
    id: 'medang-reg',
    name: 'Medang / Mataram Kuno',
    region: 'Jawa',
    startYear: 741,
    endYear: 1009,
    color: '#637baf',
  },
  {
    id: 'kediri-reg',
    name: 'Kediri',
    region: 'Jawa',
    startYear: 1046,
    endYear: 1226,
    color: '#a47b58',
  },
  {
    id: 'singasari-reg',
    name: 'Singasari',
    region: 'Jawa',
    startYear: 1227,
    endYear: 1293,
    color: '#658b4e',
  },
  {
    id: 'majapahit-reg',
    name: 'Majapahit',
    region: 'Jawa',
    startYear: 1294,
    endYear: 1518,
    color: '#b85976',
  },
  {
    id: 'demak-reg',
    name: 'Demak',
    region: 'Jawa',
    startYear: 1475,
    endYear: 1551,
    color: '#7b69a2',
  },
  {
    id: 'banten-reg',
    name: 'Banten',
    region: 'Jawa',
    startYear: 1529,
    endYear: 1808,
    color: '#ad6d63',
  },
  {
    id: 'mataram-islam-reg',
    name: 'Mataram Islam',
    region: 'Jawa',
    startYear: 1588,
    endYear: 1743,
    color: '#5b8a74',
  },
  {
    id: 'yogyakarta-reg',
    name: 'Yogyakarta',
    region: 'Jawa',
    startYear: 1744,
    endYear: 1829,
    color: '#708653',
  },
  {
    id: 'surakarta-reg',
    name: 'Surakarta',
    region: 'Jawa',
    startYear: 1744,
    endYear: 1829,
    color: '#a87b48',
  },

  // Bali & Sulawesi
  {
    id: 'bali-reg',
    name: 'Kerajaan Bali',
    region: 'Bali',
    startYear: 922,
    endYear: 1907,
    color: '#8d796c',
  },
  {
    id: 'gowa-reg',
    name: 'Kesultanan Gowa',
    region: 'Sulawesi',
    startYear: 1512,
    endYear: 1669,
    color: '#a782b2',
  },
  {
    id: 'bone-reg',
    name: 'Kerajaan Bone',
    region: 'Sulawesi',
    startYear: 1512,
    endYear: 1858,
    color: '#b08d53',
  },
];

interface TimelineProps {
  currentYear: number;
  onYearChange: (year: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  maxYear?: number;
}

export default function Timeline({
  currentYear,
  onYearChange,
  isPlaying,
  onTogglePlay,
  maxYear = 2026,
}: TimelineProps) {
  const anchors = useMemo(() => getAnchors(maxYear), [maxYear]);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const currentYearRef = useRef(currentYear);
  const onYearChangeRef = useRef(onYearChange);
  const lastPointerYearRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hoverYear, setHoverYear] = useState<number | null>(null);
  const [speed, setSpeed] = useState<number>(1);

  currentYearRef.current = currentYear;
  onYearChangeRef.current = onYearChange;

  // Playhead percentage (0..100)
  const activePercent = (yearToSliderPos(currentYear, anchors) / SLIDER_MAX_STEPS) * 100;

  // Active Main Era
  const currentMainEra =
    MAIN_ERAS.find((e) => currentYear >= e.startYear && currentYear <= e.endYear) ||
    MAIN_ERAS[MAIN_ERAS.length - 1];

  // Active Closest Event
  const closestEvent = findClosestEvent(currentYear);

  // Active Concurrent Kingdoms in this year
  const activeKingdoms = REGIONAL_KINGDOMS.filter(
    (k) => currentYear >= k.startYear && currentYear <= k.endYear,
  );

  // Calculate year from mouse position
  const getYearFromEvent = useCallback(
    (e: React.MouseEvent | MouseEvent | TouchEvent): number => {
      if (!trackRef.current) return currentYearRef.current;
      const rect = trackRef.current.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clampedX = Math.max(0, Math.min(rect.width, clientX - rect.left));
      const ratio = clampedX / rect.width;
      const pos = Math.round(ratio * SLIDER_MAX_STEPS);
      return sliderPosToYear(pos, anchors);
    },
    [anchors],
  );

  const dispatchPointerYear = useCallback((year: number) => {
    if (lastPointerYearRef.current === year) return;
    lastPointerYearRef.current = year;
    onYearChangeRef.current(year);
  }, []);

  // Dragging handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastPointerYearRef.current = null;
    const newYear = getYearFromEvent(e);
    dispatchPointerYear(newYear);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newYear = getYearFromEvent(e);
        dispatchPointerYear(newYear);
      }
    };
    const handleMouseUp = () => {
      if (isDragging) {
        lastPointerYearRef.current = null;
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, getYearFromEvent, dispatchPointerYear]);

  // Track hover for preview
  const handleMouseMoveTrack = (e: React.MouseEvent) => {
    if (!isDragging) {
      setHoverYear(getYearFromEvent(e));
    }
  };

  const handleMouseLeaveTrack = () => {
    if (!isDragging) setHoverYear(null);
  };

  // Stepper controls
  const handlePrevEvent = () => {
    const prevEvents = TIMELINE_EVENTS.filter((e) => e.year < currentYear);
    if (prevEvents.length > 0) {
      const target = prevEvents[prevEvents.length - 1];
      onYearChange(target.year);
    } else {
      onYearChange(currentYear - 10);
    }
  };

  const handleNextEvent = () => {
    const nextEvents = TIMELINE_EVENTS.filter((e) => e.year > currentYear);
    if (nextEvents.length > 0) {
      const target = nextEvents[0];
      onYearChange(target.year);
    } else {
      onYearChange(Math.min(maxYear, currentYear + 10));
    }
  };

  const cycleSpeed = () => {
    setSpeed((s) => (s === 1 ? 2 : s === 2 ? 5 : 1));
  };

  const formatYearLabel = (y: number) => {
    if (y < 0) return `${Math.abs(y).toLocaleString('id-ID')} SM`;
    return `${y} M`;
  };

  return (
    <div className="timeline-bar" aria-label="Linimasa Interaktif Kerajaan & Era">
      {/* 1. Left Controls: Play/Pause, Speed */}
      <div className="js-controls-left">
        <button
          className={`js-btn-play ${isPlaying ? 'playing' : ''}`}
          onClick={onTogglePlay}
          aria-label={isPlaying ? 'Jeda linimasa' : 'Putar linimasa'}
          title={isPlaying ? 'Jeda' : 'Putar'}
        >
          {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
        </button>

        <button className="js-btn-speed" onClick={cycleSpeed} title="Kecepatan putar linimasa">
          {speed}x
        </button>
      </div>

      {/* 2. Center Timeline: Colored Ribbon, Multi-Lanes, Event Ticks, Draggable Playhead */}
      <div className="js-track-wrapper">
        {/* Floating Tooltip Pill right above active thumb */}
        <div className="js-floating-pill" style={{ left: `${activePercent}%` }}>
          <div className="js-pill-header">
            <strong>{formatYearLabel(currentYear)}</strong>
            <span className="js-pill-era">· {currentMainEra.shortName}</span>
          </div>
          <div className="js-pill-event">{closestEvent.title}</div>
          {activeKingdoms.length > 0 && (
            <div className="js-pill-kingdoms">
              {activeKingdoms.map((k) => (
                <span key={k.id} className="js-pill-badge" style={{ borderColor: k.color }}>
                  <i style={{ background: k.color }} />
                  {k.name} ({k.region})
                </span>
              ))}
            </div>
          )}
        </div>

        {/* The Main Ribbon Container */}
        <div
          ref={trackRef}
          className="js-ribbon-track"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMoveTrack}
          onMouseLeave={handleMouseLeaveTrack}
        >
          {/* Layer C: White Event Tick Marks (Dashes) */}
          <div className="js-event-ticks-row">
            {TIMELINE_EVENTS.map((event) => {
              const pos = (yearToSliderPos(event.year, anchors) / SLIDER_MAX_STEPS) * 100;
              const isClosest = closestEvent.id === event.id;

              return (
                <div
                  key={event.id}
                  className={`js-event-tick ${isClosest ? 'active-tick' : ''}`}
                  style={{ left: `${pos}%` }}
                  title={`${event.title} (${formatYearLabel(event.year)})`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onYearChange(event.year);
                  }}
                />
              );
            })}
          </div>

          {/* Layer D: Draggable Playhead Needle */}
          <div className="js-playhead-cursor" style={{ left: `${activePercent}%` }}>
            <div className="js-playhead-handle" />
          </div>
        </div>

        {/* Year Milestone Marks along bottom */}
        <div className="js-year-anchors-row">
          {anchors.map((y, idx) => {
            if (idx > 0 && y < 0) return null;
            const isFirst = idx === 0;
            const isLast = idx === anchors.length - 1;
            const pct = (yearToSliderPos(y, anchors) / SLIDER_MAX_STEPS) * 100;
            const formatStr =
              y === maxYear
                ? 'Kini'
                : y === 1945
                  ? '1945 🇮🇩'
                  : y <= -1000
                    ? `${(Math.abs(y) / 1000).toLocaleString('id-ID', { maximumFractionDigits: 1 })}rb SM`
                    : y < 0
                      ? `${Math.abs(y)} SM`
                      : String(y);

            return (
              <button
                key={y}
                className="js-anchor-btn"
                style={{
                  left: `${pct}%`,
                  transform: isFirst
                    ? 'translateX(0)'
                    : isLast
                      ? 'translateX(-100%)'
                      : 'translateX(-50%)',
                }}
                onClick={() => onYearChange(y)}
                title={`Lompat ke tahun ${formatYearLabel(y)}`}
              >
                {formatStr}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Right Controls: Steppers & Input */}
      <div className="js-controls-right">
        <button
          className="js-btn-stepper"
          onClick={handlePrevEvent}
          title="Peristiwa sebelumnya"
          aria-label="Peristiwa sebelumnya"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="js-year-input-wrap">
          <input
            type="number"
            value={currentYear}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (Number.isInteger(val)) onYearChange(val);
            }}
            className="js-year-input"
            aria-label="Tahun"
          />
          <span className="js-year-unit">{currentYear < 0 ? 'SM' : 'M'}</span>
        </div>

        <button
          className="js-btn-stepper"
          onClick={handleNextEvent}
          title="Peristiwa berikutnya"
          aria-label="Peristiwa berikutnya"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
