export interface Site {
  id: string;
  name: string;
  kind: string;
  province: string;
  longitude: number;
  latitude: number;
  startYear: number;
  endYear: number;
  title: string;
  description: string;
  sourceUrl: string;
  sourceTitle: string;
  confidence: string;
  curationStatus: string;
}
export interface KingdomProperties {
  id: string;
  name: string;
  color: string;
  description: string;
  wikipediaTitle?: string;
  wikidataId?: string;
  startYear: number;
  endYear: number;
  sourceUrl: string;
  sourceRevision: string;
  license: string;
  attribution: string;
  notes: string;
  relationship: string;
}
export type KingdomCollection = import('geojson').FeatureCollection<
  import('geojson').Polygon | import('geojson').MultiPolygon,
  KingdomProperties
>;
export interface KingdomTimeline {
  id: string;
  name: string;
  color: string;
  start_year: number;
  end_year: number;
  periods: { startYear: number; endYear: number }[];
}

export type PaleoshorelineCollection = import('geojson').FeatureCollection<
  import('geojson').Polygon | import('geojson').MultiPolygon,
  { name: string; type: 'shelf' | 'land'; depth: number }
>;
