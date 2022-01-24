import { Injectable } from '@angular/core';
import { SpotifyTrack } from '../model/spotify-track';

import { SpotifyStoreService } from './spotify.store.service';

@Injectable({
  providedIn: 'any',
})
export class MusicPlayerFacade {
  public spotifySearchField$ = this._spotifyStore.searchField$;
  public spotifyTrackList$ = this._spotifyStore.trackList$;
  public spotifyTrack$ = this._spotifyStore.track$;

  public isSpotifyTrackPlaying$ = this._spotifyStore.isSpotifyTrackPlaying$;
  public isLocalTrackPlaying$ = this._spotifyStore.isLocalTrackPlaying$;

  constructor(private _spotifyStore: SpotifyStoreService) {}

  public setSpotifyTrackPlayingStatus(playingStatus: boolean) {
    this._spotifyStore.saveSpotifyTrackStatus(playingStatus);
  }
  public setLocalTrackPlayingStatus(playingStatus: boolean) {
    this._spotifyStore.saveLocalTrackStatus(playingStatus);
  }

  public getAllSpotifyTracks() {
    this._spotifyStore.getAllTracks();
  }

  public clearSpotifyTrackList() {
    this._spotifyStore.clearTrackList();
  }
  public selectTrack(track: SpotifyTrack) {
    this._spotifyStore.saveSelectedTrack(track);
  }
}
