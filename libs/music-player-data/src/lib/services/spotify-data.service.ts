import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { SpotifyTrack } from '../model/spotify-track';

@Injectable({
  providedIn: 'root',
})
export class SpotifyDataService {
  private _api_Endpoint = 'https://fakestoreapi.com/products';
  public trackList$!: Observable<SpotifyTrack[]>;

  constructor(private _http: HttpClient) {}

  public getAllTracks() {
    this.trackList$ = this._http
      .get<SpotifyTrack[]>(this._api_Endpoint)
      .pipe(shareReplay());
  }
}
