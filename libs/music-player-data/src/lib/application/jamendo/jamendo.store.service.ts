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
  first,
  timer,
  take,
  Subscription,
} from 'rxjs';
import { Howl } from 'howler';
import { JamendoTrack } from '../../model/jamendo-track';
import { JamendoDataService } from '../../services/jamendo-data.service';

class JamendoPlayerState {
  isTrackPlaying = false;
  isTrackSelected = false;
  trackDuration = 0;
  trackProgress = 0;
  activeTrack!: JamendoTrack;
  searchField = new FormControl('');
  platform = 'jamendo';
  track!: JamendoTrack;
  trackList: JamendoTrack[] = [];
  hasNextButton = true;
  hasPreviousButton = true;
  controllerSize = 'full';
  volume = 0;
}

@Injectable({
  providedIn: 'root',
})
export class JamendoStoreService {
  private _howlPlayer!: Howl;
  private _trackCountdownSubscription = new Subscription();
  private _progressSubscription = new Subscription();
  private _trackPlayingSubscription = new Subscription();
  private _state = new JamendoPlayerState();
  private _playerStore = new BehaviorSubject<JamendoPlayerState>(this._state);
  private _playerState$: Observable<JamendoPlayerState> =
    this._playerStore.asObservable();

  constructor(private _jamendoDataService: JamendoDataService) {}

  // Up-stream
  public volume$ = this._playerState$.pipe(
    map((state) => state.volume),
    distinctUntilChanged()
  );
  public controllerSize$ = this._playerState$.pipe(
    map((state) => state.controllerSize),
    distinctUntilChanged()
  );
  public activeTrack$ = this._playerState$.pipe(
    map((state) => state.activeTrack),
    distinctUntilChanged()
  );
  public trackDuration$ = this._playerState$.pipe(
    map((state) => state.trackDuration),
    distinctUntilChanged()
  );
  public trackProgress$ = this._playerState$.pipe(
    map((state) => state.trackProgress),
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
  public platform$ = this._playerState$.pipe(
    map((state) => state.platform),
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

  public clearTrackList() {
    this._playerStore.next((this._state = { ...this._state, trackList: [] }));
  }

  public closeController() {
    this._playerStore.next(
      (this._state = { ...this._state, isTrackSelected: false })
    );
    this._playerStore.next(
      (this._state = { ...this._state, isTrackPlaying: false })
    );
    this._playerStore.next(
      (this._state = { ...this._state, searchField: new FormControl('') })
    );

    this._howlPlayer.fade(1, 0, 1500);
    setTimeout(() => {
      this._howlPlayer.stop();
      this._trackCountdownSubscription.unsubscribe();
      this._progressSubscription.unsubscribe();
    }, 1000);
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

  public setSelectedTrack(track: JamendoTrack) {
    this.track$.pipe(first()).subscribe((value) => {
      if (value !== track || undefined) {
        this._startTrack(track);
        this._playerStore.next(
          (this._state = { ...this._state, isTrackSelected: true })
        );
      }
    });
    this._playerStore.next(
      (this._state = { ...this._state, controllerSize: 'full' })
    );
    this._trackCountdownSubscription.unsubscribe();
    this._progressSubscription.unsubscribe();
  }

  public skipTrack(skipStatus: boolean) {
    const state = this._playerStore.getValue();
    const trackList = state.trackList;
    const track = state.track;

    if (trackList.length > 0) {
      if (skipStatus) {
        // Skip to next
        const index = trackList.indexOf(track);
        if (index !== trackList.length - 1) {
          this._startTrack(trackList[index + 1]);

          this._trackPlayingSubscription.unsubscribe();
          this._trackCountdownSubscription.unsubscribe();
          this._progressSubscription.unsubscribe();
        } else {
          this._startTrack(trackList[0]);
        }
      } else {
        // Skip to previous
        const index = trackList.indexOf(track);

        if (index > 0) {
          this._startTrack(trackList[index - 1]);

          this._trackPlayingSubscription.unsubscribe();
          this._trackCountdownSubscription.unsubscribe();
          this._progressSubscription.unsubscribe();
        } else {
          this._startTrack(trackList[trackList.length - 1]);
        }
      }
    }
  }

  public playPauseTrack() {
    this._trackPlayingSubscription = this.isTrackPlaying$
      .pipe(
        first(),
        map((isTrackPlaying) => {
          isTrackPlaying = !isTrackPlaying;

          if (isTrackPlaying) {
            this._howlPlayer.play();
            this._playerStore.next(
              (this._state = { ...this._state, isTrackPlaying: true })
            );
            this._trackCountdownSubscription.unsubscribe();
            this._progressSubscription.unsubscribe();
          } else {
            this._howlPlayer.pause();

            this._playerStore.next(
              (this._state = { ...this._state, isTrackPlaying: false })
            );
            this._trackPlayingSubscription.unsubscribe();
            this._trackCountdownSubscription.unsubscribe();
            this._progressSubscription.unsubscribe();
          }
        })
      )
      .subscribe();
  }

  public seekTrack(sliderValue: number) {
    const duration = this._howlPlayer.duration();
    this._howlPlayer.seek(duration * (sliderValue / 100));
  }

  private _updateTrackTimer() {
    this._trackCountdownSubscription = timer(0, 1000)
      .pipe(
        switchMap(() => {
          const seek = this._howlPlayer.seek();
          const duration = this._howlPlayer.duration();

          const newTrackDuration = Math.round(duration - seek || 0);
          return this.trackDuration$.pipe(
            first(),
            map(() => {
              this._playerStore.next(
                (this._state = {
                  ...this._state,
                  trackDuration: newTrackDuration,
                })
              );
            }),
            take(1)
          );
        })
      )
      .subscribe();
  }

  private _updateProgressSlider() {
    this._progressSubscription = timer(0, 1000)
      .pipe(
        switchMap(() => {
          const seek = this._howlPlayer.seek();
          const duration = this._howlPlayer.duration();

          const newTrackProgress = Math.round((seek / duration) * 100 || 0);
          return this.trackProgress$.pipe(
            first(),
            map(() => {
              this._playerStore.next(
                (this._state = {
                  ...this._state,
                  trackProgress: newTrackProgress,
                })
              );
            }),
            take(1)
          );
        })
      )
      .subscribe();
  }

  private _startTrack(track: JamendoTrack) {
    if (this._howlPlayer) {
      this._howlPlayer.fade(1, 0, 1000);
    }

    this._howlPlayer = new Howl({
      src: [track.audio],
      html5: true,
      autoplay: false,
      onplay: () => this._onTrackPlay(track),
      onstop: () => this._onTrackStop(),
      onend: () => this._playNextSong(),
    });

    this._howlPlayer.play();
  }

  private _onTrackPlay(track: JamendoTrack) {
    this._playerStore.next(
      (this._state = { ...this._state, isTrackPlaying: true })
    );
    this._playerStore.next(
      (this._state = { ...this._state, isTrackSelected: true })
    );
    this._playerStore.next(
      (this._state = { ...this._state, activeTrack: track })
    );
    this._playerStore.next((this._state = { ...this._state, track }));
    this._trackCountdownSubscription.unsubscribe();
    this._progressSubscription.unsubscribe();
    this._updateTrackTimer();
    this._updateProgressSlider();
  }

  private _onTrackStop() {
    this._playerStore.next(
      (this._state = { ...this._state, isTrackPlaying: false })
    );

    this._playerStore.next(
      (this._state = { ...this._state, isTrackSelected: false })
    );

    this._playerStore.next((this._state = { ...this._state, trackList: [] }));
    this._trackPlayingSubscription.unsubscribe();
    this._trackCountdownSubscription.unsubscribe();
    this._progressSubscription.unsubscribe();
  }

  private _playNextSong() {
    const state = this._playerStore.getValue();
    const trackList = state.trackList;
    const track = state.track;

    if (trackList.length > 0) {
      const index = trackList.indexOf(track);
      if (index !== trackList.length - 1) {
        this._startTrack(trackList[index + 1]);
      } else {
        this._startTrack(trackList[0]);
      }

      this._trackCountdownSubscription.unsubscribe();
      this._progressSubscription.unsubscribe();
    } else {
      this._howlPlayer.stop();
      this._trackCountdownSubscription.unsubscribe();
      this._progressSubscription.unsubscribe();
    }
  }
}
