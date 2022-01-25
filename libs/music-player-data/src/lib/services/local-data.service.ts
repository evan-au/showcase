import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { LocalTrack } from '../model/local-track';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  private _api_Endpoint = 'http://localhost:4200/api';

  public trackList$!: Observable<LocalTrack[]>;

  constructor(private _http: HttpClient) {}
  public getAllTracks() {
    this.trackList$ = this._http
      .get<LocalTrack[]>(this._api_Endpoint)
      .pipe(shareReplay());
  }
}
