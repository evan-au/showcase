import { Injectable } from '@angular/core';

import { MusicPlayerStoreService } from './music-player.store.service';

@Injectable({
  providedIn: 'any',
})
export class MusicPlayerFacade {
  public searchField$ = this._musicPlayerStore.searchField$;
  public trackList$ = this._musicPlayerStore.trackList$;
  public trackName$ = this._musicPlayerStore.trackName$;

  public isSpotifyTrackPlaying$ = this._musicPlayerStore.isSpotifyTrackPlaying$;
  public isLocalTrackPlaying$ = this._musicPlayerStore.isLocalTrackPlaying$;

  constructor(private _musicPlayerStore: MusicPlayerStoreService) {}

  public setSpotifyTrackPlayingStatus(playingStatus: boolean) {
    this._musicPlayerStore.saveSpotifyTrackStatus(playingStatus);
  }
  public setLocalTrackPlayingStatus(playingStatus: boolean) {
    this._musicPlayerStore.saveLocalTrackStatus(playingStatus);
  }

  public getAllTracks() {
    this._musicPlayerStore.getAllTracks();
  }

  public clearTrackList() {
    this._musicPlayerStore.clearTrackList();
  }
  public addTrackName(trackName: string) {
    this._musicPlayerStore.saveTrackName(trackName);
  }
}
