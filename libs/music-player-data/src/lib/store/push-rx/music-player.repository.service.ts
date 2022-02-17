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
} from 'rxjs';
import { Howl } from 'howler';
import { JamendoTrack } from '../../interfaces/jamendo-track';
import { JamendoDataService } from '../../services/jamendo-data.service';
import { UntilDestroy } from '@ngneat/until-destroy';
import { MusicPlayerState } from '../../state/music-player.state';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class MusicPlayerRepositoryService {
  private _howlPlayer!: Howl;

  private _state = new MusicPlayerState();
  private _playerStore = new BehaviorSubject<MusicPlayerState>(this._state);
  private _playerStore$: Observable<MusicPlayerState> =
    this._playerStore.asObservable();

  constructor(private _jamendoDataService: JamendoDataService) {}

  // Up-stream
  public volume$ = this._playerStore$.pipe(
    map((state) => state.volume),
    distinctUntilChanged()
  );
  public controllerSize$ = this._playerStore$.pipe(
    map((state) => state.controllerSize),
    distinctUntilChanged()
  );
  public activeTrack$ = this._playerStore$.pipe(
    map((state) => state.activeTrack),
    distinctUntilChanged()
  );
  public trackDuration$ = this._playerStore$.pipe(
    map((state) => state.trackDuration),
    distinctUntilChanged()
  );
  public trackProgress$ = this._playerStore$.pipe(
    map((state) => state.trackProgress),
    distinctUntilChanged()
  );
  public isTrackPlaying$ = this._playerStore$.pipe(
    map((state) => state.isTrackPlaying),
    distinctUntilChanged()
  );
  public isTrackSelected$ = this._playerStore$.pipe(
    map((state) => state.isTrackSelected),
    distinctUntilChanged()
  );
  public searchField$ = this._playerStore$.pipe(
    map((state) => state.searchField),
    distinctUntilChanged()
  );
  public platform$ = this._playerStore$.pipe(
    map((state) => state.platform),
    distinctUntilChanged()
  );
  public track$ = this._playerStore$.pipe(
    map((state) => state.track),
    distinctUntilChanged()
  );
  public trackList$ = this._playerStore$.pipe(
    map((state) => state.trackList),
    distinctUntilChanged()
  );
  public hasPreviousButton$ = this._playerStore$.pipe(
    map((state) => state.hasPreviousButton),
    distinctUntilChanged()
  );
  public hasNextButton$ = this._playerStore$.pipe(
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
        } else {
          this._startTrack(trackList[0]);
        }
      } else {
        // Skip to previous
        const index = trackList.indexOf(track);

        if (index > 0) {
          this._startTrack(trackList[index - 1]);
        } else {
          this._startTrack(trackList[trackList.length - 1]);
        }
      }
    }
  }

  public playPauseTrack() {
    this.isTrackPlaying$
      .pipe(
        first(),
        map((isTrackPlaying) => {
          isTrackPlaying = !isTrackPlaying;

          if (isTrackPlaying) {
            this._howlPlayer.play();
            this._playerStore.next(
              (this._state = { ...this._state, isTrackPlaying: true })
            );
          } else {
            this._howlPlayer.pause();

            this._playerStore.next(
              (this._state = { ...this._state, isTrackPlaying: false })
            );
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
    timer(0, 1000)
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
    timer(0, 1000)
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
    } else {
      this._howlPlayer.stop();
    }
  }
}
