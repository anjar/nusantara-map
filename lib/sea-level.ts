/**
 * Paleoshoreline sea-level utility.
 *
 * Simplified eustatic sea-level curve based on Lambeck et al. (2014)
 * and Yokoyama et al. (2000). Provides approximate global mean sea
 * level for prehistoric years and selects the matching paleoshoreline
 * GeoJSON threshold.
 */

// Key data points from the sea level curve (years in astronomical/ISO convention,
// negative = BCE). Linear interpolation between points.
const CURVE: [year: number, meters: number][] = [
  [-20000, -125],
  [-18000, -120],
  [-14000, -100],
  [-12000, -60],
  [-10000, -50],
  [-8000, -25],
  [-6000, -5],
  [-4000, 0],
];

/** Available GeoJSON depth thresholds (meters below present). */
export const THRESHOLDS = [120, 75, 50, 25] as const;
export type Threshold = (typeof THRESHOLDS)[number];

/**
 * Returns approximate global mean sea level (meters relative to present)
 * for the given year. Returns 0 for years >= -4000.
 */
export function getSeaLevel(year: number): number {
  if (year >= CURVE[CURVE.length - 1][0]) return 0;
  if (year <= CURVE[0][0]) return CURVE[0][1];
  for (let i = 1; i < CURVE.length; i++) {
    const [y1, m1] = CURVE[i - 1];
    const [y2, m2] = CURVE[i];
    if (year <= y2) {
      const t = (year - y1) / (y2 - y1);
      return m1 + t * (m2 - m1);
    }
  }
  return 0;
}

/**
 * Returns the paleoshoreline GeoJSON threshold that best matches the
 * given sea level, or null if sea level is near modern (> -10m).
 */
export function getThreshold(seaLevel: number): Threshold | null {
  if (seaLevel > -10) return null;
  if (seaLevel <= -100) return 120;
  if (seaLevel <= -60) return 75;
  if (seaLevel <= -35) return 50;
  return 25;
}

/**
 * Returns a human-readable geological era label for the given year.
 */
export function getEraLabel(year: number): string | null {
  if (year > -4000) return null;
  if (year <= -20000) return 'Puncak Zaman Es (Last Glacial Maximum)';
  if (year <= -14000) return 'Akhir Zaman Es — deglasiation awal';
  if (year <= -10000) return 'Pasca-glasial — laut naik cepat';
  if (year <= -6000) return 'Holosen awal — paparan menyusut';
  return 'Holosen — mendekati garis pantai modern';
}

/**
 * Returns the static path for the given threshold's GeoJSON file.
 */
export function paleoshorelinePath(threshold: Threshold): string {
  return `/data/paleoshoreline-${threshold}m.geojson`;
}
