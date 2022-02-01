import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, map, BehaviorSubject, catchError, of } from 'rxjs';
import { JamendoResponse } from '../model/jamendo-response';
import { JamendoTrack } from '../model/jamendo-track';

@Injectable({
  providedIn: 'root',
})
export class JamendoDataService {
  private _trackListSubject = new BehaviorSubject<JamendoTrack[]>([]);
  public trackList$ = this._trackListSubject.asObservable();

  private _baseApi = 'https://api.jamendo.com/v3.0/';
  private _collection = 'tracks/';
  private _clientId = '039ea31c';
  private _limit = '20';
  private _groupBy = 'artist_id';

  constructor(private _http: HttpClient) {}

  public searchByTrack(track: string) {
    this._http
      .get<JamendoResponse>(
        `${this._baseApi}${this._collection}?client_id=${this._clientId}&name=${track}&format=jsonpretty&limit=${this._limit}&groupby=${this._groupBy}`
      )
      .pipe(
        map(({ results }) => this._trackListSubject.next(results)),
        catchError((error) => of(error)),
        shareReplay()
      )
      .subscribe();
  }
}
