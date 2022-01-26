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
import { LocalTrack } from '../model/local-track';
import { LocalDataService } from '../services/local-data.service';

class LocalPlayerState {
  isLocalTrackPlaying = false;
  searchField = new FormControl('');
  playerType = 'local';
  track!: LocalTrack;
  trackList: LocalTrack[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  private _state = new LocalPlayerState();
  private _playerStore = new BehaviorSubject<LocalPlayerState>(this._state);
  private _playerState$: Observable<LocalPlayerState> =
    this._playerStore.asObservable();

  constructor(private _localDataService: LocalDataService) {}

  public isLocalTrackPlaying$ = this._playerState$.pipe(
    map((state) => state.isLocalTrackPlaying),
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

  public saveLocalTrackStatus(isLocalTrackPlaying: boolean) {
    this._playerStore.next(
      (this._state = { ...this._state, isLocalTrackPlaying })
    );
  }
  public saveSelectedTrack(track: LocalTrack) {
    this._playerStore.next((this._state = { ...this._state, track }));
  }

  public clearTrackList() {
    this._playerStore.next((this._state = { ...this._state, trackList: [] }));
  }

  private _findTracksBySearch() {
    const search$ = this._manipulateSearchField();
    const trackList$ = this._localDataService.trackList$;

    search$
      .pipe(
        switchMap((filteredQuery) =>
          trackList$.pipe(
            map((tracks) =>
              tracks.filter((track) => {
                if (filteredQuery) {
                  return (
                    track.name
                      .toLowerCase()
                      .indexOf(filteredQuery.toLowerCase()) !== -1
                  );
                } else {
                  return track.name.toLowerCase();
                }
              })
            )
          )
        )
      )
      .subscribe((trackList) =>
        this._playerStore.next((this._state = { ...this._state, trackList }))
      );
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
          debounceTime(300),
          distinctUntilChanged()
        )
      )
    );
  }

  public getAllTracks() {
    this._localDataService.getAllTracks();
    this._findTracksBySearch();
  }
}
