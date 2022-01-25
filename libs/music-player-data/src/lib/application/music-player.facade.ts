import { Injectable } from '@angular/core';

import { LocalTrack } from '../model/local-track';
import { SpotifyTrack } from '../model/spotify-track';

import { LocalStoreService } from './local.store.service';
import { SpotifyStoreService } from './spotify.store.service';

@Injectable({
  providedIn: 'any',
})
export class MusicPlayerFacade {
  // Spotify upstream
  public spotifySearchField$ = this._spotifyStore.searchField$;
  public spotifyTrackList$ = this._spotifyStore.trackList$;
  public spotifyTrack$ = this._spotifyStore.track$;
  public isSpotifyTrackPlaying$ = this._spotifyStore.isSpotifyTrackPlaying$;

  // Local upstream
  public localSearchField$ = this._localStore.searchField$;
  public localTrackList$ = this._localStore.trackList$;
  public localTrack$ = this._localStore.track$;
  public isLocalTrackPlaying$ = this._localStore.isLocalTrackPlaying$;

  constructor(
    private _spotifyStore: SpotifyStoreService,
    private _localStore: LocalStoreService
  ) {}

  // Spotify
  public setSpotifyTrackPlayingStatus(playingStatus: boolean) {
    this._spotifyStore.saveSpotifyTrackStatus(playingStatus);
  }

  public getAllSpotifyTracks() {
    this._spotifyStore.getAllTracks();
  }

  public clearSpotifyTrackList() {
    this._spotifyStore.clearTrackList();
  }

  public selectSpotifyTrack(track: SpotifyTrack) {
    this._spotifyStore.saveSelectedTrack(track);
  }

  // Local
  public setLocalTrackPlayingStatus(playingStatus: boolean) {
    this._localStore.saveLocalTrackStatus(playingStatus);
  }

  public getAllLocalTracks() {
    this._localStore.getAllTracks();
  }

  public clearLocalTrackList() {
    this._localStore.clearTrackList();
  }

  public selectLocalTrack(track: LocalTrack) {
    this._localStore.saveSelectedTrack(track);
  }
}
