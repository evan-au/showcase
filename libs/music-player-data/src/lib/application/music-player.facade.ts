import { Injectable } from '@angular/core';

import { LocalTrack } from '../model/local-track';
import { JamendoTrack } from '../model/jamendo-track';

import { LocalStoreService } from './local.store.service';
import { JamendoStoreService } from './jamendo.store.service';

@Injectable({
  providedIn: 'any',
})
export class MusicPlayerFacade {
  // Jamendo selectors
  public jamendoControllerSize$ = this._jamendoStore.controllerSize$;
  public jamendoSearchField$ = this._jamendoStore.searchField$;
  public jamendoIsTrackSelected$ = this._jamendoStore.isTrackSelected$;
  public jamendoPlayerType$ = this._jamendoStore.playerType$;
  public jamendoTrackList$ = this._jamendoStore.trackList$;
  public jamendoTrack$ = this._jamendoStore.track$;
  public jamendoDisplayNextButton$ = this._jamendoStore.hasNextButton$;
  public jamendoDisplayPreviousButton$ = this._jamendoStore.hasPreviousButton$;
  public jamendoIsTrackPlaying$ = this._jamendoStore.isTrackPlaying$;

  // Local selectors
  public localControllerSize$ = this._localStore.controllerSize$;
  public localSearchField$ = this._localStore.searchField$;
  public localIsTrackSelected$ = this._localStore.isTrackSelected$;
  public localPlayerType$ = this._localStore.playerType$;
  public localTrackList$ = this._localStore.trackList$;
  public localTrack$ = this._localStore.track$;
  public localDisplayNextButton$ = this._localStore.hasNextButton$;
  public localDisplayPreviousButton$ = this._localStore.hasPreviousButton$;
  public localIsTrackPlaying$ = this._localStore.isTrackPlaying$;

  constructor(
    private _jamendoStore: JamendoStoreService,
    private _localStore: LocalStoreService
  ) {}

  // Jamendo actions
  public setJamendoTrackPlayingStatus(playingStatus: boolean) {
    this._jamendoStore.playPauseTrack(playingStatus);
  }

  public searchJamendoTracks() {
    return this._jamendoStore.searchByTrack();
  }

  public clearJamendoTrackList() {
    this._jamendoStore.clearTrackList();
  }
  public hideJamendoController() {
    this._jamendoStore.hideController();
  }

  public minimiseJamendoController() {
    this._jamendoStore.minimiseController();
  }

  public maximiseJamendoController() {
    this._jamendoStore.maximiseController();
  }

  public selectJamendoTrack(track: JamendoTrack) {
    this._jamendoStore.setSelectedTrack(track);
  }
  public skipJamendoTrack(skipStatus: boolean) {
    this._jamendoStore.skipTrack(skipStatus);
  }

  // Local actions
  public playPauseLocalTrack(playingStatus: boolean) {
    this._localStore.playPauseTrack(playingStatus);
  }

  public getAllLocalTracks() {
    return this._localStore.getAllTracks();
  }

  public clearLocalTrackList() {
    this._localStore.clearTrackList();
  }

  public hideLocalController() {
    this._localStore.hideController();
  }

  public selectLocalTrack(track: LocalTrack) {
    this._localStore.setSelectedTrack(track);
  }

  public skipLocalTrack(skipStatus: boolean) {
    this._localStore.skipTrack(skipStatus);
  }

  public minimiseLocalController() {
    this._localStore.minimiseController();
  }
  public maximiseLocalController() {
    this._localStore.maximiseController();
  }
}
