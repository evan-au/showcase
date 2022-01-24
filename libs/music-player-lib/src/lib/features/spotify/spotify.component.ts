import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MusicPlayerFacade,
  SpotifyTrack,
} from '@showcase-ws/music-player-data';
// import { fadeSlideInOutAnimation } from '@showcase-ws/utils';

@Component({
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
  // animations: [fadeSlideInOutAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpotifyComponent implements OnInit {
  public defaultSearchTerm = new FormControl();
  public selectorTrack$ = this._musicPlayerFacade.spotifyTrack$;
  public selectorSearchField$ = this._musicPlayerFacade.spotifySearchField$;
  public selectorIsTrackPlaying$ =
    this._musicPlayerFacade.isSpotifyTrackPlaying$;
  public selectorTrackList$ = this._musicPlayerFacade.spotifyTrackList$;

  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._musicPlayerFacade.getAllSpotifyTracks();
  }

  public actionClearSearchQuery(): void {
    this._musicPlayerFacade.clearSpotifyTrackList();
  }

  public actionSetPlayingStatus(status: boolean): void {
    this._musicPlayerFacade.setSpotifyTrackPlayingStatus(status);
  }

  public actionSelectTrack(track: SpotifyTrack): void {
    this._musicPlayerFacade.selectTrack(track);
  }
}
