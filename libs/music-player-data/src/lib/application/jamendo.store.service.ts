import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  map,
  distinctUntilChanged,
  switchMap,
  filter,
  debounceTime,
} from 'rxjs';
import { JamendoTrack } from '../model/jamendo-track';
import { JamendoDataService } from '../services/jamendo-data.service';

class JamendoPlayerState {
  isJamendoTrackPlaying = false;
  searchField = new FormControl('');
  playerType = 'jamendo';
  track!: JamendoTrack;
  trackList: JamendoTrack[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class JamendoStoreService {
  query!: string;
  private _state = new JamendoPlayerState();
  private _playerStore = new BehaviorSubject<JamendoPlayerState>(this._state);
  private _playerState$: Observable<JamendoPlayerState> =
    this._playerStore.asObservable();

  constructor(private _jamendoDataService: JamendoDataService) {}

  public isJamendoTrackPlaying$ = this._playerState$.pipe(
    map((state) => state.isJamendoTrackPlaying),
    distinctUntilChanged()
  );

  public searchField$ = this._playerState$.pipe(
    map((state) => state.searchField),
    distinctUntilChanged()
  );
  public playerType$ = this._playerState$.pipe(
    map((state) => state.playerType),
    distinctUntilChanged()
  );
  public track$ = this._playerState$.pipe(
    map((state) => state.track),
    distinctUntilChanged()
  );
  public trackList$ = this._playerState$.pipe(
    map((state) => state.trackList),
    distinctUntilChanged()
  );

  public saveJamendoTrackStatus(isJamendoTrackPlaying: boolean) {
    this._playerStore.next(
      (this._state = { ...this._state, isJamendoTrackPlaying })
    );
  }

  public saveSelectedTrack(track: JamendoTrack) {
    this._playerStore.next((this._state = { ...this._state, track }));
  }

  public initTrackList() {
    this._jamendoDataService.trackList$.subscribe((trackList) =>
      this._playerStore.next((this._state = { ...this._state, trackList }))
    );
  }
  public clearTrackList() {
    this._playerStore.next((this._state = { ...this._state, trackList: [] }));
  }

  private _manipulateSearchField() {
    return this.searchField$.pipe(
      switchMap((searchField) =>
        searchField.valueChanges.pipe(
          filter((query: string) => {
            if (query.length < 2) {
              this.clearTrackList();
              return false;
            } else {
              return !query || query.length > 2;
            }
          }),
          debounceTime(700),
          distinctUntilChanged()
        )
      )
    );
  }

  public searchByTrack() {
    const search$ = this._manipulateSearchField();
    const trackList$ = this._jamendoDataService.trackList$;

    search$
      .pipe(
        map((query) => {
          this._jamendoDataService.searchByTrack(query);
        })
      )
      .subscribe();

    trackList$
      .pipe(
        map((trackList) =>
          this._playerStore.next((this._state = { ...this._state, trackList }))
        )
      )
      .subscribe();
  }
}
