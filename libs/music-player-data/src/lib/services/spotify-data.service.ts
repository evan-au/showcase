import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, tap, map } from 'rxjs';
import { SpotifyTrack } from '../model/spotify-track';

@Injectable({
  providedIn: 'root',
})
export class SpotifyDataService {
  private _api_Endpoint =
    'https://api.jamendo.com/v3.0/tracks/?client_id=039ea31c&format=jsonpretty&limit=8&groupby=artist_id';
  // private _api_Endpoint = 'https://fakestoreapi.com/products';
  public trackList$!: Observable<SpotifyTrack[]>;

  constructor(private _http: HttpClient) {}

  public getAllTracks() {
    this._http.get<SpotifyTrack[]>(this._api_Endpoint).pipe(
      tap(console.log),
      map(({ headers, results }) => {
        console.log(results);
      }),
      tap(console.log),
      shareReplay()
    );
  }
}
