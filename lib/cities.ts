import { CITIES_DATA } from '../data/cities';
export { CITIES_DATA } from '../data/cities';

/**
 * Historic cities and ancient settlements of Nusantara and Indonesia.
 * Spans from Sebelum Masehi (BCE / SM) through Classical, Sultanates,
 * Colonial, to Modern Eras (2026).
 */

export type CityType =
  | 'ancient-settlement'
  | 'capital'
  | 'trading-port'
  | 'colonial-city'
  | 'modern-city';

export interface HistoricalCityName {
  startYear: number;
  endYear: number;
  name: string;
  status?: string;
}

export interface City {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  startYear: number;
  endYear: number;
  province: string;
  type: CityType;
  description: string;
  source: string;
  historicalNames?: HistoricalCityName[];
}

/**
 * Returns cities active in a given timeline year.
 * An active city has startYear <= year <= endYear.
 */
export function getActiveCities(
  year: number,
  options?: {
    filterType?: CityType;
    searchQuery?: string;
  },
): Array<City & { currentHistoricalName: string; currentStatus?: string }> {
  const query = options?.searchQuery?.toLowerCase().trim();

  return CITIES_DATA.filter((city) => {
    if (city.startYear > year || city.endYear < year) return false;
    if (options?.filterType && city.type !== options.filterType) return false;
    if (query) {
      const matchName = city.name.toLowerCase().includes(query);
      const matchProv = city.province.toLowerCase().includes(query);
      const matchDesc = city.description.toLowerCase().includes(query);
      if (!matchName && !matchProv && !matchDesc) return false;
    }
    return true;
  }).map((city) => {
    let currentHistoricalName = city.name;
    let currentStatus: string | undefined;

    if (city.historicalNames?.length) {
      const matched = city.historicalNames.find((hn) => year >= hn.startYear && year <= hn.endYear);
      if (matched) {
        currentHistoricalName = matched.name;
        currentStatus = matched.status;
      }
    }

    return {
      ...city,
      currentHistoricalName,
      currentStatus,
    };
  });
}
