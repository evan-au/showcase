import { Injectable } from '@angular/core';

import { JamendoTrack } from '../model/jamendo-track';

import { JamendoStoreService } from './jamendo/jamendo.store.service';

@Injectable({
  providedIn: 'any',
})
export class MusicPlayerFacade {
  public jamendoActiveTrack$ = this._jamendoStore.activeTrack$;
  public jamendoVolume$ = this._jamendoStore.volume$;
  public jamendoTrackDuration$ = this._jamendoStore.trackDuration$;
  public jamendoTrackProgress$ = this._jamendoStore.trackProgress$;
  public jamendoControllerSize$ = this._jamendoStore.controllerSize$;
  public jamendoSearchField$ = this._jamendoStore.searchField$;
  public jamendoIsTrackSelected$ = this._jamendoStore.isTrackSelected$;
  public jamendoPlatform$ = this._jamendoStore.platform$;
  public jamendoTrackList$ = this._jamendoStore.trackList$;
  public jamendoTrack$ = this._jamendoStore.track$;
  public jamendoDisplayNextButton$ = this._jamendoStore.hasNextButton$;
  public jamendoDisplayPreviousButton$ = this._jamendoStore.hasPreviousButton$;
  public jamendoIsTrackPlaying$ = this._jamendoStore.isTrackPlaying$;

  constructor(private _jamendoStore: JamendoStoreService) {}

  public playPauseJamendoTrack() {
    this._jamendoStore.playPauseTrack();
  }
  public seekJamendoTrack(sliderValue: number) {
    this._jamendoStore.seekTrack(sliderValue);
  }

  public searchJamendoTracks() {
    return this._jamendoStore.searchByTrack();
  }

  public clearJamendoTrackList() {
    this._jamendoStore.clearTrackList();
  }
  public closeJamendoController() {
    this._jamendoStore.closeController();
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
}
