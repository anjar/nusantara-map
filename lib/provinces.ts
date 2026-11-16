import { MODERN_PROVINCES, HISTORICAL_ADMIN_DIVISIONS } from '../data/provinces';
export { MODERN_PROVINCES, HISTORICAL_ADMIN_DIVISIONS } from '../data/provinces';

/**
 * Province datasets of Indonesia:
 * - 38 Modern Provinces (with capital, region, coordinates, formedYear)
 * - Historical Administrative Divisions (Admin Divisions) across eras:
 *   - Prehistoric / BCE cultural zones
 *   - Classical / Majapahit Mandala & Bhumi
 *   - Dutch East Indies Gouvernements (1800-1942)
 *   - 1945 First 8 Provinces of the Republic of Indonesia
 *   - Modern 38 Provinces (2022 - present)
 */

export interface ModernProvince {
  id: string;
  name: string;
  capital: string;
  islandGroup:
    | 'Sumatera'
    | 'Jawa'
    | 'Bali & Nusa Tenggara'
    | 'Kalimantan'
    | 'Sulawesi'
    | 'Maluku'
    | 'Papua';
  coordinates: [number, number]; // [longitude, latitude] for centroid label
  formedYear: number;
  historicalBackground: string;
}

export interface HistoricalAdminDivision {
  id: string;
  name: string;
  category:
    | 'mancanagara'
    | 'gouvernement'
    | 'provinsi-1945'
    | 'prehistoric-zone'
    | 'province-modern';
  startYear: number;
  endYear: number;
  coordinates: [number, number];
  capitalOrCenter: string;
  context: string;
}

/**
 * Returns active administrative divisions or provinces based on timeline year.
 */
export function getActiveProvinces(year: number) {
  if (year >= 1950) {
    // Return modern provinces formed on or before this year
    return MODERN_PROVINCES.filter((p) => year >= p.formedYear);
  }
  // Return historical administrative divisions for earlier periods
  return HISTORICAL_ADMIN_DIVISIONS.filter((h) => year >= h.startYear && year <= h.endYear);
}
