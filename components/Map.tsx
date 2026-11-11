'use client';
import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { Plus, Minus, Compass, X } from 'lucide-react';
import type { Site, KingdomCollection, PaleoshorelineCollection } from './types';
import { getActiveRegionLabels } from '../lib/region-names';
import { getActiveCities, City } from '../lib/cities';
import { getActiveProvinces } from '../lib/provinces';
import { getActiveFortifications } from '../lib/routes';
import { getEventColor, type TimelineEvent } from '../lib/events';
import { resolveEventLocation } from '../lib/event-locations';

const NO_EVENT_MARKERS: TimelineEvent[] = [];

interface Props {
  sites: Site[];
  selected: string | null;
  onSelect: (id: string) => void;
  showSites: boolean;
  focus: 'java' | 'indonesia';
  focusKey: number;
  historical?: boolean;
  kingdoms?: KingdomCollection;
  kingdomSelected?: string | null;
  onKingdomSelect?: (id: string) => void;
  paleoshoreline?: PaleoshorelineCollection | null;
  showRivers?: boolean;
  showMountains?: boolean;
  year?: number;
  // Dynamic layer toggles from LayerControl
  showRealms?: boolean;
  showAdminDivisions?: boolean;
  showCities?: boolean;
  showRoutesAndWalls?: boolean;
  showTerrainAndRivers?: boolean;
  showProvinces?: boolean;
  showProvinceNames?: boolean;
  eventMarkers?: TimelineEvent[];
  selectedEventId?: string | null;
  eventFocusKey?: number;
  onEventSelect?: (id: string) => void;
}

export default function Map({
  sites,
  selected,
  onSelect,
  showSites,
  focus,
  focusKey,
  historical = false,
  kingdoms,
  kingdomSelected,
  onKingdomSelect,
  paleoshoreline,
  showRivers = true,
  showMountains = true,
  year = 1350,
  showRealms = true,
  showAdminDivisions = true,
  showCities = true,
  showRoutesAndWalls = true,
  showTerrainAndRivers = true,
  showProvinces = true,
  showProvinceNames = true,
  eventMarkers = NO_EVENT_MARKERS,
  selectedEventId = null,
  eventFocusKey = 0,
  onEventSelect
}: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markers = useRef<maplibregl.Marker[]>([]);
  const kingdomLabels = useRef<maplibregl.Marker[]>([]);
  const paleoLabels = useRef<maplibregl.Marker[]>([]);
  const mountainMarkers = useRef<maplibregl.Marker[]>([]);
  const geoLabels = useRef<maplibregl.Marker[]>([]);
  const cityMarkers = useRef<maplibregl.Marker[]>([]);
  const provinceLabelMarkers = useRef<maplibregl.Marker[]>([]);
  const adminDivisionMarkers = useRef<maplibregl.Marker[]>([]);
  const fortMarkers = useRef<maplibregl.Marker[]>([]);
  const eventMapMarkers = useRef<maplibregl.Marker[]>([]);

  const [activeCity, setActiveCity] = useState<(City & { currentHistoricalName: string; currentStatus?: string }) | null>(null);

  const kingdomCallback = useRef(onKingdomSelect);
  kingdomCallback.current = onKingdomSelect;
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [zoom, setZoom] = useState(6);
  const callback = useRef(onSelect);
  callback.current = onSelect;
  const eventCallback = useRef(onEventSelect);
  eventCallback.current = onEventSelect;

  useEffect(() => {
    if (!el.current) return;
    let instance: maplibregl.Map;
    let resizeObserver: ResizeObserver | undefined;

    try {
      instance = new maplibregl.Map({
        container: el.current,
        center: historical ? [118, -3] : [110.6, -7.35],
        zoom: historical ? 3.4 : 6.35,
        minZoom: historical ? 1.8 : 3.4,
        maxZoom: 12,
        maxBounds: historical ? undefined : [[92, -16], [144, 12]],
        renderWorldCopies: false,
        attributionControl: false,
        style: {
          version: 8,
          sources: {
            territories: {
              type: 'geojson',
              data: { type: 'FeatureCollection', features: [] }
            },
            indonesia: {
              type: 'geojson',
              data: '/data/indonesia.geojson'
            },
            neighbors: {
              type: 'geojson',
              data: '/data/neighbors.geojson'
            },
            paleoshoreline: {
              type: 'geojson',
              data: { type: 'FeatureCollection', features: [] }
            },
            rivers: {
              type: 'geojson',
              data: '/data/rivers.geojson'
            },
            provinces: {
              type: 'geojson',
              data: '/data/provinces.geojson'
            },
            routes: {
              type: 'geojson',
              data: '/data/routes-and-walls.geojson'
            }
          },
          layers: [
            {
              id: 'sea',
              type: 'background',
              paint: { 'background-color': historical ? '#d8dfd7' : '#213d40' }
            },
            {
              id: 'paleo-land',
              type: 'fill',
              source: 'paleoshoreline',
              paint: { 'fill-color': '#d4cbb8', 'fill-opacity': 0.58 }
            },
            {
              id: 'paleo-coast',
              type: 'line',
              source: 'paleoshoreline',
              paint: {
                'line-color': '#a09880',
                'line-width': 1.2,
                'line-dasharray': [4, 3],
                'line-opacity': 0.7
              }
            },
            {
              id: 'coast-glow',
              type: 'line',
              source: 'indonesia',
              paint: {
                'line-color': '#718b7e',
                'line-width': 10,
                'line-opacity': 0.12
              }
            },
            // Base lands: Indonesia (warm parchment)
            {
              id: 'land',
              type: 'fill',
              source: 'indonesia',
              paint: {
                'fill-color': historical ? '#ebe4d3' : '#b8b69a',
                'fill-opacity': 0.88
              }
            },
            {
              id: 'coast',
              type: 'line',
              source: 'indonesia',
              paint: {
                'line-color': historical ? '#afb49d' : '#d0c9aa',
                'line-width': 1
              }
            },
            // Neighbor lands: Malaysia, Brunei, Singapore, Timor-Leste, PNG
            {
              id: 'neighbor-land',
              type: 'fill',
              source: 'neighbors',
              paint: {
                'fill-color': ['get', 'color'],
                'fill-opacity': historical ? 0.88 : 0.85
              }
            },
            {
              id: 'neighbor-coast',
              type: 'line',
              source: 'neighbors',
              paint: {
                'line-color': ['get', 'stroke'],
                'line-width': 1
              }
            },
            // Rivers: ancient & modern
            {
              id: 'rivers-ancient',
              type: 'line',
              source: 'rivers',
              filter: ['==', ['get', 'era'], 'ancient'],
              paint: {
                'line-color': '#426972',
                'line-width': 1.5,
                'line-dasharray': [3, 2],
                'line-opacity': 0.75
              }
            },
            {
              id: 'rivers-modern',
              type: 'line',
              source: 'rivers',
              filter: ['==', ['get', 'era'], 'modern'],
              paint: {
                'line-color': '#3a626a',
                'line-width': 1.3,
                'line-opacity': 0.82
              }
            },
            // Provinces Layer: modern borders & fills
            {
              id: 'provinces-fill',
              type: 'fill',
              source: 'provinces',
              paint: {
                'fill-color': '#bba891',
                'fill-opacity': 0.04
              }
            },
            {
              id: 'provinces-line',
              type: 'line',
              source: 'provinces',
              paint: {
                'line-color': '#9e8c78',
                'line-width': 1.1,
                'line-dasharray': [4, 3],
                'line-opacity': 0.65
              }
            },
            // Trade Routes & Spice Highways
            {
              id: 'routes-glow',
              type: 'line',
              source: 'routes',
              filter: ['==', ['get', 'kind'], 'trade-route'],
              paint: {
                'line-color': '#c45b41',
                'line-width': 4.5,
                'line-opacity': 0.22
              }
            },
            {
              id: 'routes-line',
              type: 'line',
              source: 'routes',
              filter: ['==', ['get', 'kind'], 'trade-route'],
              paint: {
                'line-color': '#a8462b',
                'line-width': 1.8,
                'line-dasharray': [4, 3],
                'line-opacity': 0.85
              }
            },
            // Kingdoms on top of regional basemap
            {
              id: 'kingdom-fill',
              type: 'fill',
              source: 'territories',
              paint: {
                'fill-color': ['get', 'color'],
                'fill-opacity': 0.16
              }
            },
            {
              id: 'kingdom-outline',
              type: 'line',
              source: 'territories',
              paint: {
                'line-color': ['get', 'color'],
                'line-width': 1,
                'line-opacity': 0.8
              }
            }
          ]
        }
      });

      instance.addControl(
        new maplibregl.ScaleControl({ maxWidth: 100, unit: 'metric' }),
        'bottom-right'
      );
      instance.on('load', () => {
        setReady(true);
        // Load mountain peaks
        fetch('/data/mountains.geojson')
          .then(r => r.json())
          .then((fc: GeoJSON.FeatureCollection) => {
            fc.features.forEach(f => {
              const geom = f.geometry as GeoJSON.Point;
              const p = f.properties as {
                id: string;
                name: string;
                elevation_m: number;
                region: string;
                kind: string;
              };
              if (!geom?.coordinates) return;

              const markerEl = document.createElement('div');
              markerEl.className = 'mountain-marker';
              markerEl.style.display = showMountains && showTerrainAndRivers ? 'flex' : 'none';
              markerEl.setAttribute('title', `${p.name} (${p.elevation_m}m) - ${p.region}`);
              markerEl.innerHTML = `<span class="mountain-symbol">▲</span><span class="mountain-label">${p.name.replace('Gunung ', 'Gn. ')} <small>${p.elevation_m}m</small></span>`;

              const marker = new maplibregl.Marker({ element: markerEl, anchor: 'bottom' })
                .setLngLat([geom.coordinates[0], geom.coordinates[1]])
                .addTo(instance);

              mountainMarkers.current.push(marker);
            });
          })
          .catch(() => {});
      });

      instance.on('click', 'kingdom-fill', event => {
        const id = event.features?.[0]?.properties?.id;
        if (typeof id === 'string') kingdomCallback.current?.(id);
      });

      instance.on('mouseenter', 'kingdom-fill', () => {
        instance.getCanvas().style.cursor = 'pointer';
      });

      instance.on('mouseleave', 'kingdom-fill', () => {
        instance.getCanvas().style.cursor = '';
      });

      instance.on('zoomend', () => setZoom(instance.getZoom()));

      instance.on('error', () => setError(true));
      map.current = instance;

      if (historical) {
        resizeObserver = new ResizeObserver(() => {
          instance.resize();
          instance.fitBounds([[94, -11], [141, 6]], {
            padding: { top: 150, bottom: 240, left: 24, right: 24 },
            duration: 0
          });
        });
        resizeObserver.observe(el.current);
      }
    } catch {
      setError(true);
    }

    return () => {
      resizeObserver?.disconnect();
      mountainMarkers.current.forEach(m => m.remove());
      mountainMarkers.current = [];
      geoLabels.current.forEach(m => m.remove());
      geoLabels.current = [];
      cityMarkers.current.forEach(m => m.remove());
      cityMarkers.current = [];
      provinceLabelMarkers.current.forEach(m => m.remove());
      provinceLabelMarkers.current = [];
      adminDivisionMarkers.current.forEach(m => m.remove());
      adminDivisionMarkers.current = [];
      fortMarkers.current.forEach(m => m.remove());
      fortMarkers.current = [];
      eventMapMarkers.current.forEach(m => m.remove());
      eventMapMarkers.current = [];
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Dynamic regional labels according to the timeline year
  useEffect(() => {
    if (!map.current || !ready) return;
    geoLabels.current.forEach(m => m.remove());
    geoLabels.current = [];

    const labels = getActiveRegionLabels(year);
    for (const item of labels) {
      const el = document.createElement('div');
      el.className = `geo-label ${item.kind}`;
      if (item.context) {
        el.setAttribute('title', `${item.text} (${item.context})`);
      }
      el.innerHTML = `<span>${item.text}</span>${
        item.context ? `<small class="geo-sub">${item.context}</small>` : ''
      }`;
      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([item.longitude, item.latitude])
        .addTo(map.current);
      geoLabels.current.push(marker);
    }

    return () => {
      geoLabels.current.forEach(m => m.remove());
    };
  }, [year, ready]);

  // Sync kingdom territory polygons
  useEffect(() => {
    if (!map.current || !ready) return;
    (map.current.getSource('territories') as maplibregl.GeoJSONSource).setData(
      kingdoms || { type: 'FeatureCollection', features: [] }
    );
    map.current.setPaintProperty('kingdom-outline', 'line-width', year >= 1945 ? 0 : [
      'case',
      ['==', ['get', 'id'], kingdomSelected || ''],
      1.8,
      ['==', ['get', 'id'], 'republic-of-indonesia'],
      1.2,
      0.8
    ]);
    map.current.setPaintProperty('kingdom-fill', 'fill-opacity', year >= 1945 ? 0 : [
      'case',
      ['==', ['get', 'id'], kingdomSelected || ''],
      0.24,
      ['==', ['get', 'id'], 'republic-of-indonesia'],
      0.20,
      0.16
    ]);
    map.current.setPaintProperty('neighbor-land', 'fill-color', year >= 1945
      ? ['match', ['get', 'id'],
          'malaysia', '#b6c8aa',
          'singapore', '#dfb9a7',
          'brunei', '#d9c38d',
          'timor-leste', '#d5b38e',
          'papua-new-guinea', '#b8becd',
          ['get', 'color']]
      : ['get', 'color']);
    kingdomLabels.current.forEach(m => m.remove());
    kingdomLabels.current = [];
    if (!showRealms) return;

    const seen = new Set<string>();
    for (const feature of kingdoms?.features || []) {
      const p = feature.properties;
      if (seen.has(p.id)) continue;
      seen.add(p.id);
      const polygons =
        feature.geometry.type === 'Polygon'
          ? [feature.geometry.coordinates]
          : feature.geometry.coordinates;
      const rings = polygons.map(poly => poly[0]);
      const ring = rings.sort((a, b) => {
        const area = (r: number[][]) =>
          Math.abs(
            r.reduce(
              (sum, c, i) => {
                const n = r[(i + 1) % r.length];
                return sum + c[0] * n[1] - n[0] * c[1];
              },
              0
            )
          );
        return area(b) - area(a);
      })[0];
      if (!ring?.length) continue;
      const xs = ring.map(c => c[0]),
        ys = ring.map(c => c[1]);
      const minX = Math.min(...xs),
        maxX = Math.max(...xs),
        minY = Math.min(...ys),
        maxY = Math.max(...ys);
      const lngLat: [number, number] = [(minX + maxX) / 2, (minY + maxY) / 2];
      const button = document.createElement('button');
      button.className = `kingdom-label-marker ${p.id === kingdomSelected ? 'selected' : ''}`;
      button.textContent = p.name;
      button.setAttribute('aria-label', `Pilih ${p.name}`);
      button.onclick = () => kingdomCallback.current?.(p.id);
      kingdomLabels.current.push(
        new maplibregl.Marker({ element: button })
          .setLngLat(lngLat)
          .addTo(map.current)
      );
    }
    return () => {
      kingdomLabels.current.forEach(m => m.remove());
    };
  }, [kingdoms, kingdomSelected, ready, showRealms, year]);

  // Sync paleoshoreline
  useEffect(() => {
    if (!map.current || !ready) return;
    const source = map.current.getSource('paleoshoreline') as maplibregl.GeoJSONSource | undefined;
    source?.setData(paleoshoreline || { type: 'FeatureCollection', features: [] });
    paleoLabels.current.forEach(m => m.remove());
    paleoLabels.current = [];
    if (!paleoshoreline?.features?.length || !showTerrainAndRivers) return;
    for (const feature of paleoshoreline.features) {
      const p = feature.properties;
      const polygons =
        feature.geometry.type === 'Polygon'
          ? [feature.geometry.coordinates]
          : feature.geometry.coordinates;
      const rings = polygons.map(poly => poly[0]);
      const ring = rings.sort((a, b) => {
        const area = (r: number[][]) =>
          Math.abs(
            r.reduce(
              (sum, c, i) => {
                const n = r[(i + 1) % r.length];
                return sum + c[0] * n[1] - n[0] * c[1];
              },
              0
            )
          );
        return area(b) - area(a);
      })[0];
      if (!ring?.length) continue;
      const xs = ring.map(c => c[0]),
        ys = ring.map(c => c[1]);
      const centerLng = (Math.min(...xs) + Math.max(...xs)) / 2;
      const centerLat = (Math.min(...ys) + Math.max(...ys)) / 2;
      const label = document.createElement('div');
      label.className = 'geo-label paleo-label-marker';
      label.textContent = p.name.toUpperCase();
      const marker = new maplibregl.Marker({ element: label })
        .setLngLat([centerLng, centerLat])
        .addTo(map.current);
      paleoLabels.current.push(marker);
    }
    return () => {
      paleoLabels.current.forEach(m => m.remove());
    };
  }, [paleoshoreline, ready, showTerrainAndRivers]);

  // Sync Layer Visibilities from LayerControl
  useEffect(() => {
    if (!map.current || !ready) return;

    // Realms
    if (map.current.getLayer('kingdom-fill')) {
      map.current.setLayoutProperty(
        'kingdom-fill',
        'visibility',
        showRealms ? 'visible' : 'none'
      );
    }
    if (map.current.getLayer('kingdom-outline')) {
      map.current.setLayoutProperty(
        'kingdom-outline',
        'visibility',
        showRealms ? 'visible' : 'none'
      );
    }

    // Provinces (Batas Provinsi Modern)
    if (map.current.getLayer('provinces-fill')) {
      map.current.setLayoutProperty(
        'provinces-fill',
        'visibility',
        showProvinces ? 'visible' : 'none'
      );
    }
    if (map.current.getLayer('provinces-line')) {
      map.current.setLayoutProperty(
        'provinces-line',
        'visibility',
        showProvinces ? 'visible' : 'none'
      );
    }
    // Routes & Walls
    if (map.current.getLayer('routes-line')) {
      map.current.setLayoutProperty(
        'routes-line',
        'visibility',
        showRoutesAndWalls ? 'visible' : 'none'
      );
    }
    if (map.current.getLayer('routes-glow')) {
      map.current.setLayoutProperty(
        'routes-glow',
        'visibility',
        showRoutesAndWalls ? 'visible' : 'none'
      );
    }

    // Terrain & Rivers
    if (map.current.getLayer('rivers-modern')) {
      map.current.setLayoutProperty(
        'rivers-modern',
        'visibility',
        showRivers && showTerrainAndRivers ? 'visible' : 'none'
      );
    }
    if (map.current.getLayer('rivers-ancient')) {
      const showAncient = showRivers && showTerrainAndRivers && Boolean(paleoshoreline);
      map.current.setLayoutProperty(
        'rivers-ancient',
        'visibility',
        showAncient ? 'visible' : 'none'
      );
    }
    if (map.current.getLayer('paleo-land')) {
      map.current.setLayoutProperty(
        'paleo-land',
        'visibility',
        showTerrainAndRivers ? 'visible' : 'none'
      );
    }
    if (map.current.getLayer('paleo-coast')) {
      map.current.setLayoutProperty(
        'paleo-coast',
        'visibility',
        showTerrainAndRivers ? 'visible' : 'none'
      );
    }

    mountainMarkers.current.forEach(m => {
      m.getElement().style.display = (showMountains && showTerrainAndRivers) ? 'flex' : 'none';
    });
  }, [
    showRealms,
    showProvinces,
    showRoutesAndWalls,
    showTerrainAndRivers,
    showRivers,
    showMountains,
    paleoshoreline,
    ready
  ]);

  // Cities Markers (Sebelum Masehi s/d Modern)
  useEffect(() => {
    if (!map.current || !ready) return;
    cityMarkers.current.forEach(m => m.remove());
    cityMarkers.current = [];
    if (!showCities) return;

    const activeCities = getActiveCities(year);
    for (const c of activeCities) {
      const btn = document.createElement('button');
      btn.className = `city-marker-pin ${c.type} ${c.type === 'capital' ? 'is-capital' : ''}`;
      btn.setAttribute('aria-label', `${c.currentHistoricalName} (${c.province})`);
      btn.setAttribute('title', `${c.currentHistoricalName} · ${c.province} (${c.currentStatus || c.type})`);

      const dot = document.createElement('span');
      dot.className = 'city-dot';
      const label = document.createElement('span');
      label.className = 'city-label';
      label.textContent = c.currentHistoricalName;

      btn.append(dot, label);
      btn.onclick = (e) => {
        e.stopPropagation();
        setActiveCity(c);
      };

      const marker = new maplibregl.Marker({ element: btn, anchor: 'left', offset: [-3.5, 0] })
        .setLngLat(c.coordinates)
        .addTo(map.current);
      cityMarkers.current.push(marker);
    }

    return () => {
      cityMarkers.current.forEach(m => m.remove());
      cityMarkers.current = [];
    };
  }, [year, showCities, ready]);

  // Keep province names anchored to their map coordinates, inside their regions.
  useEffect(() => {
    if (!map.current || !ready) return;
    provinceLabelMarkers.current.forEach(marker => marker.remove());
    provinceLabelMarkers.current = [];
    if (!showProvinceNames) return;

    const activeProvinces = getActiveProvinces(year).filter(province =>
      !('category' in province) || province.category === 'provinsi-1945'
    );
    for (const province of activeProvinces) {
      const label = document.createElement('div');
      label.className = 'province-label-marker';
      label.textContent = province.name.toUpperCase();
      label.setAttribute('title', `Provinsi ${province.name}`);

      provinceLabelMarkers.current.push(
        new maplibregl.Marker({ element: label, anchor: 'center' })
          .setLngLat(province.coordinates)
          .addTo(map.current)
      );
    }

    return () => {
      provinceLabelMarkers.current.forEach(marker => marker.remove());
      provinceLabelMarkers.current = [];
    };
  }, [year, showProvinceNames, ready]);

  // Historical Admin Divisions Markers (Mancanagara, Gouvernements, PPKI 1945)
  useEffect(() => {
    if (!map.current || !ready) return;
    adminDivisionMarkers.current.forEach(m => m.remove());
    adminDivisionMarkers.current = [];
    if (!showAdminDivisions) return;

    const divisions = getActiveProvinces(year);
    for (const d of divisions) {
      if (!('category' in d)) continue;
      const el = document.createElement('div');
      el.className = `admin-division-marker ${d.category}`;
      el.innerHTML = `<span class="admin-div-badge">${d.name}</span><small class="admin-div-sub">${d.capitalOrCenter}</small>`;
      el.setAttribute('title', `${d.name}: ${d.context}`);

      const marker = new maplibregl.Marker({ element: el, anchor: 'center' })
        .setLngLat(d.coordinates)
        .addTo(map.current);
      adminDivisionMarkers.current.push(marker);
    }

    return () => {
      adminDivisionMarkers.current.forEach(m => m.remove());
      adminDivisionMarkers.current = [];
    };
  }, [year, showAdminDivisions, ready]);

  // Historic Fortifications Markers (Under Routes & Walls)
  useEffect(() => {
    if (!map.current || !ready) return;
    fortMarkers.current.forEach(m => m.remove());
    fortMarkers.current = [];
    if (!showRoutesAndWalls) return;

    const forts = getActiveFortifications(year);
    for (const f of forts) {
      const el = document.createElement('div');
      el.className = 'fort-marker';
      el.setAttribute('title', `${f.name} (Didirikan ${f.builtYear} M oleh ${f.builder}) - ${f.description}`);
      el.innerHTML = `<span class="fort-icon">🛡</span><span class="fort-name">${f.name} <small>${f.builtYear} M</small></span>`;

      const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat(f.coordinates)
        .addTo(map.current);
      fortMarkers.current.push(marker);
    }

    return () => {
      fortMarkers.current.forEach(m => m.remove());
      fortMarkers.current = [];
    };
  }, [year, showRoutesAndWalls, ready]);

  // Sites markers for /sites atlas
  useEffect(() => {
    if (!map.current || !ready) return;
    markers.current.forEach(marker => marker.remove());
    markers.current = [];
    if (!showSites) return;
    const visible: Site[] = [];
    const ordered = [...sites].sort((a, b) => Number(b.id === selected) - Number(a.id === selected));
    for (const site of ordered) {
      if (
        zoom < 9 &&
        visible.some(
          other => Math.hypot(site.longitude - other.longitude, site.latitude - other.latitude) < 0.18
        )
      )
        continue;
      visible.push(site);
      const button = document.createElement('button');
      button.className = `site-marker ${site.id === selected ? 'selected' : ''}`;
      button.setAttribute('aria-label', `Lihat ${site.name}`);
      const dot = document.createElement('span');
      dot.className = 'marker-dot';
      const label = document.createElement('span');
      label.textContent = site.name;
      button.append(dot, label);
      button.onclick = () => callback.current(site.id);
      markers.current.push(
        new maplibregl.Marker({ element: button, anchor: 'left' })
          .setLngLat([site.longitude, site.latitude])
          .addTo(map.current)
      );
    }
    return () => {
      markers.current.forEach(marker => marker.remove());
    };
  }, [sites, selected, showSites, ready, zoom]);

  // Show the selected event and same-year events with stable, event-specific colors.
  useEffect(() => {
    if (!map.current || !ready) return;
    eventMapMarkers.current.forEach(marker => marker.remove());
    eventMapMarkers.current = [];

    for (const event of eventMarkers) {
      const location = resolveEventLocation(event);
      if (!location) continue;
      const isSelected = event.id === selectedEventId;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `event-map-marker ${isSelected ? 'selected' : ''} ${location.precision === 'place' ? '' : 'approximate'}`;
      button.style.setProperty('--event-color', getEventColor(event.id));
      button.setAttribute('aria-label', `${event.title}; lokasi ${location.name}${location.precision === 'place' ? '' : ', perkiraan wilayah'}`);
      button.title = `${event.title} · ${location.name}${location.precision === 'place' ? '' : ' (perkiraan)'}`;

      if (isSelected) {
        const label = document.createElement('span');
        label.className = 'event-map-label';
        label.textContent = event.title;
        button.append(label);
      }

      const pin = document.createElement('span');
      pin.className = 'event-map-dot';
      pin.textContent = String(eventMarkers.indexOf(event) + 1);
      button.append(pin);

      button.onclick = click => {
        click.stopPropagation();
        eventCallback.current?.(event.id);
      };

      const markerIndex = eventMarkers.indexOf(event);
      eventMapMarkers.current.push(
        new maplibregl.Marker({
          element: button,
          anchor: 'bottom',
          offset: isSelected ? [0, 0] : [14 * (markerIndex + 1), 0]
        })
          .setLngLat(location.coordinates)
          .addTo(map.current)
      );
    }

    return () => {
      eventMapMarkers.current.forEach(marker => marker.remove());
      eventMapMarkers.current = [];
    };
  }, [eventMarkers, selectedEventId, ready]);

  useEffect(() => {
    if (!ready) return;
    if (focus === 'java')
      map.current?.fitBounds([[104.8, -9.4], [115.3, -5.3]], { padding: 60, duration: 1000 });
    else
      map.current?.fitBounds(
        [[94, -11], [141, 6]],
        historical
          ? { padding: { top: 150, bottom: 240, left: 24, right: 24 }, duration: 0 }
          : { padding: 45, duration: 1000 }
      );
  }, [focus, focusKey, ready]);

  useEffect(() => {
    const site = sites.find(s => s.id === selected);
    if (site && ready) map.current?.easeTo({ center: [site.longitude, site.latitude], duration: 650 });
  }, [selected, ready]);

  useEffect(() => {
    const event = eventMarkers.find(candidate => candidate.id === selectedEventId);
    const location = event ? resolveEventLocation(event) : undefined;
    if (!location || !ready) return;
    map.current?.easeTo({
      center: location.coordinates,
      zoom: location.precision === 'place' ? 7.2 : 5.1,
      duration: 850
    });
  }, [selectedEventId, eventFocusKey, eventMarkers, ready]);

  return (
    <div className="map-wrap">
      <div ref={el} className="map-canvas" data-testid="map" />
      <div className="compass">
        <Compass size={30} strokeWidth={1} />
        <span>U</span>
      </div>
      <div className="map-controls">
        <button aria-label="Perbesar peta" onClick={() => map.current?.zoomIn()}>
          <Plus size={20} />
        </button>
        <button aria-label="Perkecil peta" onClick={() => map.current?.zoomOut()}>
          <Minus size={20} />
        </button>
      </div>

      {activeCity && (
        <div className="city-popup-card" role="dialog" aria-label={`Detail kota ${activeCity.name}`}>
          <div className="city-popup-head">
            <div>
              <span className="city-popup-badge">
                {activeCity.currentStatus || (activeCity.type === 'capital' ? 'Pusat Pemerintahan' : activeCity.type === 'ancient-settlement' ? 'Permukiman Purba' : activeCity.type === 'trading-port' ? 'Bandar Niaga' : 'Kota')}
              </span>
              <h3 className="city-popup-title">{activeCity.currentHistoricalName}</h3>
              {activeCity.currentHistoricalName !== activeCity.name && (
                <small className="city-popup-alt">Nama masa kini: {activeCity.name}</small>
              )}
            </div>
            <button
              type="button"
              className="city-popup-close"
              onClick={() => setActiveCity(null)}
              aria-label="Tutup jendela info"
            >
              <X size={15} />
            </button>
          </div>
          <div className="city-popup-content">
            <div className="city-popup-meta">
              <span>Provinsi: <strong>{activeCity.province}</strong></span>
              <span>Rentang: <strong>{activeCity.startYear < 0 ? `${Math.abs(activeCity.startYear)} SM` : `${activeCity.startYear} M`} – {activeCity.endYear >= 2026 ? 'Sekarang' : `${activeCity.endYear} M`}</strong></span>
            </div>
            <p className="city-popup-desc">{activeCity.description}</p>
            <div className="city-popup-foot">
              <small>Sumber rujukan: {activeCity.source}</small>
            </div>
          </div>
        </div>
      )}

      {!ready && !error && <div className="map-status">Menyiapkan peta Indonesia…</div>}
      {error && (
        <div role="alert" className="map-status">
          Peta gagal dimuat. Pastikan browser mendukung WebGL, lalu muat ulang.
        </div>
      )}
      <div className="map-credit">
        {historical
          ? 'Poligon: Cliopatria · CC BY 4.0 | Geografi: Natural Earth'
          : 'Geografi modern · © Natural Earth · Domain publik'}
      </div>
    </div>
  );
}
