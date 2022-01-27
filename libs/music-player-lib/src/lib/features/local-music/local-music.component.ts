import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { LocalTrack, MusicPlayerFacade } from '@showcase-ws/music-player-data';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './local-music.component.html',
  styleUrls: ['./local-music.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalMusicComponent implements OnInit, OnDestroy {
  private _subscription!: Subscription;

  public selectorControllerSize$ = this._musicPlayerFacade.localControllerSize$;
  public selectorPlayerType$ = this._musicPlayerFacade.localPlayerType$;
  public selectorDisplayNextButton$ =
    this._musicPlayerFacade.localDisplayNextButton$;
  public selectorDisplayPreviousButton$ =
    this._musicPlayerFacade.localDisplayPreviousButton$;

  public selectorTrack$ = this._musicPlayerFacade.localTrack$;
  public selectorSearchField$ = this._musicPlayerFacade.localSearchField$;
  public selectorIsTrackPlaying$ = this._musicPlayerFacade.localIsTrackPlaying$;
  public selectorIsTrackSelected$ =
    this._musicPlayerFacade.localIsTrackSelected$;
  public selectorTrackList$ = this._musicPlayerFacade.localTrackList$;

  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._subscription = this._musicPlayerFacade
      .getAllLocalTracks()
      .subscribe();
  }

  public actionClearSearchQuery(): void {
    this._musicPlayerFacade.clearLocalTrackList();
  }

  public actionPlayPauseTrack(status: boolean): void {
    this._musicPlayerFacade.playPauseLocalTrack(status);
  }

  public actionSelectTrack(track: LocalTrack): void {
    this._musicPlayerFacade.selectLocalTrack(track);
  }
  public actionSkipTrack(skipStatus: boolean): void {
    this._musicPlayerFacade.skipLocalTrack(skipStatus);
  }

  public actionHideController() {
    this._musicPlayerFacade.hideLocalController();
  }

  public actionMinimiseController() {
    this._musicPlayerFacade.minimiseLocalController();
  }
  public actionMaximiseController() {
    this._musicPlayerFacade.maximiseLocalController();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
