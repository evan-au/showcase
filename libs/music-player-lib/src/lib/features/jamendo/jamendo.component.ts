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
  public selectorPlayerType$ = this._musicPlayerFacade.jamendoPlayerType$;

  public selectorTrack$ = this._musicPlayerFacade.jamendoTrack$;

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

  public actionSetPlayingStatus(status: boolean): void {
    this._musicPlayerFacade.setJamendoTrackPlayingStatus(status);
  }

  public actionSelectTrack(track: JamendoTrack): void {
    this._musicPlayerFacade.selectJamendoTrack(track);
  }

  public actionSkipTrack(skipStatus: boolean): void {
    this._musicPlayerFacade.skipJamendoTrack(skipStatus);
  }

  public actionHideController() {
    this._musicPlayerFacade.hideJamendoController();
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
