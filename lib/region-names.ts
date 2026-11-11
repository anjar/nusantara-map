import { DYNAMIC_REGION_LABELS } from '../data/region-names';
export { DYNAMIC_REGION_LABELS } from '../data/region-names';

/**
 * Dynamic historical regional and toponym names for the Nusantara Atlas.
 * Labels change organically according to historical and geological eras:
 * - Prehistory / Ice Age (<= -4000): Sundaland, Sahul, Wallacea
 * - Ancient / Classical Hindu-Buddhist (-4000 to 1300 M): Swarnabhumi, Yawadwipa, Warunadwipa, Hujung Medini
 * - Majapahit Golden Age (1300 to 1500 M): Bhumi Malayu, Jawa Dwipa, Tanjungpura, Barune
 * - Sultanates & Maritime Age (1500 to 1800 M): Pulau Perca, Tanah Jawa, Borneo, Kesultanan Brunei
 * - Colonial Era (1800 to 1945 M): Nederlandsch-Indië, British Malaya, British North Borneo
 * - Modern Era (1945+ / 1963+ M): Indonesia, Malaysia, Brunei Darussalam, Singapura
 */

export interface DynamicRegionLabel {
  id: string;
  longitude: number;
  latitude: number;
  kind: 'island' | 'water' | 'region' | 'shelf';
  getName: (year: number) => {
    primary: string;
    historicalContext?: string;
  };
}



/**
 * Returns active labels for the given year.
 */
export function getActiveRegionLabels(year: number) {
  return DYNAMIC_REGION_LABELS.map(r => {
    const { primary, historicalContext } = r.getName(year);
    return {
      id: r.id,
      longitude: r.longitude,
      latitude: r.latitude,
      kind: r.kind,
      text: primary,
      context: historicalContext
    };
  });
}
