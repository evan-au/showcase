import { Injectable } from '@angular/core';

import { LocalTrack } from '../model/local-track';
import { JamendoTrack } from '../model/jamendo-track';

import { LocalStoreService } from './local.store.service';
import { JamendoStoreService } from './jamendo.store.service';

@Injectable({
  providedIn: 'any',
})
export class MusicPlayerFacade {
  // Jamendo upstream
  public jamendoSearchField$ = this._jamendoStore.searchField$;
  public jamendoPlayerType$ = this._jamendoStore.playerType$;
  public jamendoTrackList$ = this._jamendoStore.trackList$;
  public jamendoTrack$ = this._jamendoStore.track$;
  public isJamendoTrackPlaying$ = this._jamendoStore.isJamendoTrackPlaying$;

  // Local upstream
  public localSearchField$ = this._localStore.searchField$;
  public localPlayerType$ = this._localStore.playerType$;
  public localTrackList$ = this._localStore.trackList$;
  public localTrack$ = this._localStore.track$;
  public isLocalTrackPlaying$ = this._localStore.isLocalTrackPlaying$;

  constructor(
    private _jamendoStore: JamendoStoreService,
    private _localStore: LocalStoreService
  ) {}

  // Jamendo
  public setJamendoTrackPlayingStatus(playingStatus: boolean) {
    this._jamendoStore.saveJamendoTrackStatus(playingStatus);
  }

  public searchJamendoTracks() {
    // this._jamendoStore.getAllTracks();
    return this._jamendoStore.searchByTrack();
  }

  public clearJamendoTrackList() {
    this._jamendoStore.clearTrackList();
  }

  public selectJamendoTrack(track: JamendoTrack) {
    this._jamendoStore.saveSelectedTrack(track);
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
