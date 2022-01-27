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
  isTrackPlaying = false;
  isTrackSelected = !true;
  searchField = new FormControl('');
  playerType = 'local';
  track!: LocalTrack;
  trackList: LocalTrack[] = [];
  hasNextButton = true;
  hasPreviousButton = true;
  controllerSize = 'full';
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
  // Up-stream
  public controllerSize$ = this._playerState$.pipe(
    map((state) => state.controllerSize),
    distinctUntilChanged()
  );
  public isTrackPlaying$ = this._playerState$.pipe(
    map((state) => state.isTrackPlaying),
    distinctUntilChanged()
  );
  public isTrackSelected$ = this._playerState$.pipe(
    map((state) => state.isTrackSelected),
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
  public hasPreviousButton$ = this._playerState$.pipe(
    map((state) => state.hasPreviousButton),
    distinctUntilChanged()
  );
  public hasNextButton$ = this._playerState$.pipe(
    map((state) => state.hasNextButton),
    distinctUntilChanged()
  );

  public playPauseTrack(isTrackPlaying: boolean) {
    if (isTrackPlaying) {
      console.log(isTrackPlaying, 'Playing track in local store');
    } else {
      console.log(isTrackPlaying, 'Pausing track in local store');
    }

    this._playerStore.next((this._state = { ...this._state, isTrackPlaying }));
  }

  public setSelectedTrack(track: LocalTrack) {
    this._playerStore.next(
      (this._state = { ...this._state, isTrackSelected: true })
    );
    this._playerStore.next((this._state = { ...this._state, track }));
    this._playerStore.next(
      (this._state = { ...this._state, controllerSize: 'full' })
    );
    this._playerStore.next(
      (this._state = { ...this._state, isTrackPlaying: false })
    );
  }

  public clearTrackList() {
    this._playerStore.next((this._state = { ...this._state, trackList: [] }));
  }

  public hideController() {
    this._playerStore.next(
      (this._state = { ...this._state, isTrackSelected: false })
    );
    this._playerStore.next(
      (this._state = { ...this._state, isTrackPlaying: false })
    );
  }

  public minimiseController() {
    this._playerStore.next(
      (this._state = { ...this._state, controllerSize: 'mini' })
    );
  }

  public maximiseController() {
    this._playerStore.next(
      (this._state = { ...this._state, controllerSize: 'full' })
    );
  }

  private _findTracksBySearch() {
    const search$ = this._manipulateSearchField();
    const trackList$ = this._localDataService.trackList$;

    return search$.pipe(
      switchMap((filteredQuery) =>
        trackList$.pipe(
          map((tracks) =>
            tracks.filter((track: LocalTrack) => {
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
      ),
      map((trackList) => {
        this._playerStore.next((this._state = { ...this._state, trackList }));
      })
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
    return this._findTracksBySearch();
  }

  public skipTrack(skipStatus: boolean) {
    console.log(skipStatus, 'Skipping track in Local store');
  }
}
