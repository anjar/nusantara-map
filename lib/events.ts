import { BASE_EVENTS } from '../data/events/base';
import { RESEARCHED_EVENTS } from './events-researched';

/**
 * Historical and geological timeline events for the Nusantara Atlas.
 * Encompasses the transition from the Last Glacial Maximum (LGM),
 * deglaciation, meltwater pulses, the drowning of Sundaland/Sahul,
 * major geological catastrophes (Toba, Samalas, Tambora, Krakatau, Aceh Tsunami),
 * founding of classical Hindu-Buddhist and Islamic kingdoms,
 * early European contact & VOC establishment, colonial wars, national awakening,
 * proclamation of independence, physical revolution, and sovereignty recognition.
 */

export interface EventSourceLink {
  title: string;
  url: string;
  sourceName?: string; // e.g. "Wikipedia", "Historia.id", "Arsip Nasional RI", "Nationaal Archief", "UNESCO", "BNPB", "Kemdikbud", "Delpher"
}

export interface EventLocation {
  /** Human-readable place shown on the event card and map marker. */
  name: string;
  /** MapLibre longitude/latitude order. */
  coordinates: [number, number];
  /** Approximate locations are explicitly labeled in the interface. */
  precision?: 'place' | 'approximate' | 'region';
}

export type EventPeriod =
  | 'glaciation'
  | 'deglaciation'
  | 'post-glacial'
  | 'holocene'
  | 'kingdom'
  | 'colonial'
  | 'independence'
  | 'republic';

export type EventCategory =
  | 'sea-level'
  | 'climate'
  | 'geology'
  | 'disaster'
  | 'kingdom'
  | 'war'
  | 'diplomacy'
  | 'figure'
  | 'colonial'
  | 'independence'
  | 'disease'
  | 'politics'
  | 'culture'
  | 'violence';

export interface TimelineEvent {
  id: string;
  year: number; // Astronomical convention: negative = SM / BCE
  period: EventPeriod;
  category: EventCategory;
  region?: 'Sunda' | 'Sahul' | 'Jawa' | 'Sumatera' | 'Kalimantan' | 'Sulawesi' | 'Bali' | 'Maluku' | 'Papua' | 'Nusa Tenggara' | 'Nasional';
  /** Set when the source identifies a specific event location. */
  location?: EventLocation;
  title: string;
  subtitle?: string;
  seaLevelMeters?: number;
  summary: string;
  impact: string;
  tags: string[];
  sources?: EventSourceLink[];
  /** Exact date only when supported by the linked source; year remains the map selector. */
  date?: string;
  endYear?: number;
  dateNote?: string;
  evidence?: 'documented' | 'approximate' | 'contested' | 'reconstruction';
  researchedAt?: string;
}



// Stable year sorting preserves established selection behavior for events in the same year.
export const TIMELINE_EVENTS: TimelineEvent[] = [...BASE_EVENTS, ...RESEARCHED_EVENTS]
  .sort((a, b) => a.year - b.year);

const eventColorById = new Map(
  TIMELINE_EVENTS.map((event, index) => [event.id, `hsl(${(index * 137.508) % 360} 66% 42%)`])
);

/** Stable, distinct color shared by an event's card and map marker. */
export function getEventColor(eventId: string): string {
  return eventColorById.get(eventId) || '#b75c39';
}

/**
 * Finds the event closest to the given year.
 */
export function findClosestEvent(year: number): TimelineEvent {
  let closest = TIMELINE_EVENTS[0];
  let minDiff = Math.abs(year - closest.year);
  for (const event of TIMELINE_EVENTS) {
    const diff = Math.abs(year - event.year);
    if (diff < minDiff) {
      minDiff = diff;
      closest = event;
    }
  }
  return closest;
}
