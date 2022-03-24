import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
  shareReplay,
  map,
  BehaviorSubject,
  catchError,
  of,
  finalize,
} from 'rxjs';
import { JamendoResponse } from '../interfaces/jamendo-response';
import { JamendoTrack } from '../interfaces/jamendo-track';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class JamendoDataService {
  private _trackListSubject = new BehaviorSubject<JamendoTrack[]>([]);
  private _isLoadingSubject = new BehaviorSubject<boolean>(true);
  public trackList$ = this._trackListSubject.asObservable();
  public isLoading$ = this._isLoadingSubject.asObservable();

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
        finalize(() => {
          this._isLoadingSubject.next(false);
        }),
        catchError((error) => of(error)),
        shareReplay()
      )
      .subscribe();
  }
}
