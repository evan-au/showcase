import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  JamendoTrack,
  MusicPlayerFacade,
} from '@showcase-ws/music-player-data';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './jamendo.component.html',
  styleUrls: ['./jamendo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JamendoComponent implements OnInit, OnDestroy {
  private _subscription!: Subscription;

  public selectorControllerSize$ =
    this._musicPlayerFacade.jamendoControllerSize$;
  public selectorPlatform$ = this._musicPlayerFacade.jamendoPlatform$;

  public selectorTrackDuration$ = this._musicPlayerFacade.jamendoTrackDuration$;
  public selectorActiveTrack$ = this._musicPlayerFacade.jamendoActiveTrack$;
  public selectorTrackProgress$ = this._musicPlayerFacade.jamendoTrackProgress$;

  public selectorDisplayNextButton$ =
    this._musicPlayerFacade.jamendoDisplayNextButton$;

  public selectorDisplayPreviousButton$ =
    this._musicPlayerFacade.jamendoDisplayPreviousButton$;

  public selectorSearchField$ = this._musicPlayerFacade.jamendoSearchField$;

  public selectorIsTrackPlaying$ =
    this._musicPlayerFacade.jamendoIsTrackPlaying$;

  public selectorTrackList$ = this._musicPlayerFacade.jamendoTrackList$;

  public selectorIsTrackSelected$ =
    this._musicPlayerFacade.jamendoIsTrackSelected$;

  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._subscription = this._musicPlayerFacade
      .searchJamendoTracks()
      .subscribe();
  }

  public actionClearSearchQuery(): void {
    this._musicPlayerFacade.clearJamendoTrackList();
  }

  public actionPlayPauseTrack(): void {
    this._musicPlayerFacade.playPauseJamendoTrack();
  }
  public actionSeekTrack(sliderValue: number): void {
    this._musicPlayerFacade.seekJamendoTrack(sliderValue);
  }

  public actionSelectTrack(track: JamendoTrack): void {
    this._musicPlayerFacade.selectJamendoTrack(track);
  }

  public actionSkipTrack(skipStatus: boolean): void {
    this._musicPlayerFacade.skipJamendoTrack(skipStatus);
  }

  public actionCloseController() {
    this._musicPlayerFacade.closeJamendoController();
  }
  public actionMinimiseController() {
    this._musicPlayerFacade.minimiseJamendoController();
  }
  public actionMaximiseController() {
    this._musicPlayerFacade.maximiseJamendoController();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
