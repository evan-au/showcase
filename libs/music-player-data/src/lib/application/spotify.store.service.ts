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
import { SpotifyTrack } from '../model/spotify-track';
import { SpotifyDataService } from '../services/spotify-data.service';

class SpotifyPlayerState {
  isSpotifyTrackPlaying = false;
  isLocalTrackPlaying = false;
  searchField = new FormControl('');
  track!: SpotifyTrack;
  trackList: SpotifyTrack[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class SpotifyStoreService {
  private _state = new SpotifyPlayerState();
  private _playerStore = new BehaviorSubject<SpotifyPlayerState>(this._state);
  private _playerState$: Observable<SpotifyPlayerState> =
    this._playerStore.asObservable();

  constructor(private _spotifyDataService: SpotifyDataService) {}

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
  public track$ = this._playerState$.pipe(
    map((state) => state.track),
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
  public saveSelectedTrack(track: SpotifyTrack) {
    this._playerStore.next((this._state = { ...this._state, track }));
  }

  public clearTrackList() {
    this._playerStore.next((this._state = { ...this._state, trackList: [] }));
  }

  private _findTracksBySearch() {
    const search$ = this._manipulateSearchField();
    const trackList$ = this._spotifyDataService.trackList$;

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
    this._spotifyDataService.getAllTracks();
    this._findTracksBySearch();
  }
}
