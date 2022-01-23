import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MusicPlayerFacade } from '@showcase-ws/music-player-data';

@Component({
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpotifyComponent implements OnInit {
  public defaultSearchTerm = new FormControl();
  public selectorTrackName$ = this._musicPlayerFacade.trackName$;
  public selectorSearchField$ = this._musicPlayerFacade.searchField$;
  public selectorIsTrackPlaying$ =
    this._musicPlayerFacade.isSpotifyTrackPlaying$;
  public selectorTrackList$ = this._musicPlayerFacade.trackList$;

  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._musicPlayerFacade.getAllTracks();
  }

  public actionClearSearchQuery(): void {
    this._musicPlayerFacade.clearTrackList();
  }

  public actionSetPlayingStatus(status: boolean): void {
    this._musicPlayerFacade.setSpotifyTrackPlayingStatus(status);
  }

  public actionDisplaySelectedTrack(trackName: string): void {
    this._musicPlayerFacade.addTrackName(trackName);
  }
}
