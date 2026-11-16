import { HISTORIC_TRADE_ROUTES, HISTORIC_FORTIFICATIONS } from '../data/routes';
export { HISTORIC_TRADE_ROUTES, HISTORIC_FORTIFICATIONS } from '../data/routes';

/**
 * Historical trade routes, maritime spice highways, and fortifications (Walls & Forts)
 * across the Indonesian archipelago.
 */

export interface TradeRoute {
  id: string;
  name: string;
  kind: 'maritime' | 'terrestrial';
  startYear: number;
  endYear: number;
  coordinates: [number, number][]; // [longitude, latitude][]
  commodity: string;
  description: string;
}

export interface HistoricFortification {
  id: string;
  name: string;
  builtYear: number;
  coordinates: [number, number]; // [longitude, latitude]
  builder: string;
  description: string;
}

export function getActiveRoutes(year: number): TradeRoute[] {
  return HISTORIC_TRADE_ROUTES.filter((r) => year >= r.startYear && year <= r.endYear);
}

export function getActiveFortifications(year: number): HistoricFortification[] {
  return HISTORIC_FORTIFICATIONS.filter((f) => year >= f.builtYear);
}
