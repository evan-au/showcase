import { JamendoTrack } from './jamendo-track';

export interface JamendoResponse {
  headers: unknown;
  results: JamendoTrack[];
}
