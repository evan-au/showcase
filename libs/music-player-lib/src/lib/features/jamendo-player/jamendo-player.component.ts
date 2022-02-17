import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  JamendoTrack,
  MusicPlayerFacade,
} from '@showcase-ws/music-player-data';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  templateUrl: './jamendo-player.component.html',
  styleUrls: ['./jamendo-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JamendoPlayerComponent implements OnInit {
  public isLoading$ = this._musicPlayerFacade.isLoading$;
  public selectorControllerSize$ = this._musicPlayerFacade.controllerSize$;
  public selectorPlatform$ = this._musicPlayerFacade.platform$;
  public selectorVolume$ = this._musicPlayerFacade.volume$;

  public selectorTrackDuration$ = this._musicPlayerFacade.trackDuration$;
  public selectorActiveTrack$ = this._musicPlayerFacade.activeTrack$;
  public selectorTrackProgress$ = this._musicPlayerFacade.trackProgress$;

  public selectorDisplayNextButton$ =
    this._musicPlayerFacade.displayNextButton$;

  public selectorDisplayPreviousButton$ =
    this._musicPlayerFacade.displayPreviousButton$;

  public selectorSearchField$ = this._musicPlayerFacade.searchField$;

  public selectorIsTrackPlaying$ = this._musicPlayerFacade.isTrackPlaying$;

  public selectorTrackList$ = this._musicPlayerFacade.trackList$;

  public selectorIsTrackSelected$ = this._musicPlayerFacade.isTrackSelected$;

  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._musicPlayerFacade.searchTracks().subscribe();
  }

  public actionClearSearchQuery(): void {
    this._musicPlayerFacade.clearTrackList();
  }

  public actionPlayPauseTrack(): void {
    this._musicPlayerFacade.playPauseTrack();
  }
  public actionSeekTrack(sliderValue: number): void {
    this._musicPlayerFacade.seekTrack(sliderValue);
  }

  public actionSelectTrack(track: JamendoTrack): void {
    this._musicPlayerFacade.selectTrack(track);
  }

  public actionSkipTrack(skipStatus: boolean): void {
    this._musicPlayerFacade.skipTrack(skipStatus);
  }

  public actionCloseController() {
    this._musicPlayerFacade.closeController();
  }
  public actionMinimiseController() {
    this._musicPlayerFacade.minimiseController();
  }
  public actionMaximiseController() {
    this._musicPlayerFacade.maximiseController();
  }
}
