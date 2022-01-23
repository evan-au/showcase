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
  tap,
} from 'rxjs';
import { Track } from '../model/track';
import { MusicPlayerDataService } from '../services/music-player-data.service';

class PlayerState {
  isSpotifyTrackPlaying = false;
  isLocalTrackPlaying = false;
  searchField = new FormControl('');
  trackName = '';
  trackList: Track[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class MusicPlayerStoreService {
  private _state = new PlayerState();
  private _playerStore = new BehaviorSubject<PlayerState>(this._state);
  private _playerState$: Observable<PlayerState> =
    this._playerStore.asObservable();

  constructor(private _musicPlayerDataService: MusicPlayerDataService) {}

  // Selectors
  public isSpotifyTrackPlaying$ = this._playerState$.pipe(
    map((state) => state.isSpotifyTrackPlaying),
    distinctUntilChanged()
  );
  public isLocalTrackPlaying$ = this._playerState$.pipe(
    map((state) => state.isLocalTrackPlaying),
    distinctUntilChanged()
  );
  public searchField$ = this._playerState$.pipe(
    map((state) => state.searchField),
    distinctUntilChanged()
  );
  public trackName$ = this._playerState$.pipe(
    map((state) => state.trackName),
    distinctUntilChanged()
  );
  public trackList$ = this._playerState$.pipe(
    map((state) => state.trackList),
    distinctUntilChanged()
  );

  // Reducers
  public saveSpotifyTrackStatus(isSpotifyTrackPlaying: boolean) {
    this._playerStore.next(
      (this._state = { ...this._state, isSpotifyTrackPlaying })
    );
  }
  public saveLocalTrackStatus(isLocalTrackPlaying: boolean) {
    this._playerStore.next(
      (this._state = { ...this._state, isLocalTrackPlaying })
    );
  }
  public saveTrackName(trackName: string) {
    this._playerStore.next((this._state = { ...this._state, trackName }));
  }

  public clearTrackList() {
    this._playerStore.next((this._state = { ...this._state, trackList: [] }));
  }

  public findTracksBySearch() {
    const search$ = this._manipulateSearchField();
    const trackList$ = this._musicPlayerDataService.trackList$;

    search$
      .pipe(
        switchMap((filteredQuery) =>
          trackList$.pipe(
            map((tracks) =>
              tracks.filter((track) => {
                if (filteredQuery) {
                  return (
                    track.title
                      .toLowerCase()
                      .indexOf(filteredQuery.toLowerCase()) !== -1
                  );
                } else {
                  return track.title.toLowerCase();
                }
              })
            )
          )
        ),
        tap(console.log)
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
    this._musicPlayerDataService.getAllTracks();
    this.findTracksBySearch();
  }
}
