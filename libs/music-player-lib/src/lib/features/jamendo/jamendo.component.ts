import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  JamendoTrack,
  MusicPlayerFacade,
} from '@showcase-ws/music-player-data';

@Component({
  templateUrl: './jamendo.component.html',
  styleUrls: ['./jamendo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JamendoComponent implements OnInit {
  public defaultSearchTerm = new FormControl();
  public selectorPlayerType$ = this._musicPlayerFacade.jamendoPlayerType$;
  public selectorTrack$ = this._musicPlayerFacade.jamendoTrack$;
  public selectorSearchField$ = this._musicPlayerFacade.jamendoSearchField$;
  public selectorIsTrackPlaying$ =
    this._musicPlayerFacade.isJamendoTrackPlaying$;
  public selectorTrackList$ = this._musicPlayerFacade.jamendoTrackList$;

  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._musicPlayerFacade.searchJamendoTracks();
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
}
