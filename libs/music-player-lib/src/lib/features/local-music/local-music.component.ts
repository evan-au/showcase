import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalTrack, MusicPlayerFacade } from '@showcase-ws/music-player-data';

@Component({
  templateUrl: './local-music.component.html',
  styleUrls: ['./local-music.component.scss'],
})
export class LocalMusicComponent implements OnInit {
  public defaultSearchTerm = new FormControl();
  public selectorPlayerType$ = this._musicPlayerFacade.localPlayerType$;
  public selectorTrack$ = this._musicPlayerFacade.localTrack$;
  public selectorSearchField$ = this._musicPlayerFacade.localSearchField$;
  public selectorIsTrackPlaying$ = this._musicPlayerFacade.isLocalTrackPlaying$;
  public selectorTrackList$ = this._musicPlayerFacade.localTrackList$;

  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._musicPlayerFacade.getAllLocalTracks();
  }

  public actionClearSearchQuery(): void {
    this._musicPlayerFacade.clearLocalTrackList();
  }

  public actionSetPlayingStatus(status: boolean): void {
    this._musicPlayerFacade.setLocalTrackPlayingStatus(status);
  }

  public actionSelectTrack(track: LocalTrack): void {
    this._musicPlayerFacade.selectLocalTrack(track);
  }
}
