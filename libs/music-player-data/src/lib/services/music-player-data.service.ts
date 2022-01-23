import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Track } from '../model/track';

@Injectable({
  providedIn: 'root',
})
export class MusicPlayerDataService {
  private _api_Endpoint = 'https://fakestoreapi.com/products';
  public trackList$!: Observable<Track[]>;

  constructor(private _http: HttpClient) {}

  public getAllTracks() {
    this.trackList$ = this._http
      .get<Track[]>(this._api_Endpoint)
      .pipe(shareReplay());
  }
}
