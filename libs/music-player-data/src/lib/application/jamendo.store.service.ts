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
  concatMap,
} from 'rxjs';
import { JamendoTrack } from '../model/jamendo-track';
import { JamendoDataService } from '../services/jamendo-data.service';

class JamendoPlayerState {
  isTrackPlaying = false;
  isTrackSelected = true;
  searchField = new FormControl('');
  playerType = 'jamendo';
  track!: JamendoTrack;
  trackList: JamendoTrack[] = [];
  hasNextButton = false;
  hasPreviousButton = false;
  controllerSize = 'full';
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
      console.log(isTrackPlaying, 'Playing track in Jamendo store');
    } else {
      console.log(isTrackPlaying, 'Pausing track in Jamendo store');
    }

    this._playerStore.next((this._state = { ...this._state, isTrackPlaying }));
  }

  public setSelectedTrack(track: JamendoTrack) {
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

    return search$.pipe(
      map((query) => {
        this._jamendoDataService.searchByTrack(query);
      }),
      concatMap(() =>
        trackList$.pipe(
          map((trackList) =>
            this._playerStore.next(
              (this._state = { ...this._state, trackList })
            )
          )
        )
      )
    );
  }

  public skipTrack(skipStatus: boolean) {
    console.log(skipStatus, 'Skipping track in Jamendo store');
  }
}
