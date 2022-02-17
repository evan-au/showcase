import { Injectable } from '@angular/core';

import { JamendoTrack } from './interfaces/jamendo-track';
import { MusicPlayerRepositoryService } from './store/push-rx/music-player.repository.service';

@Injectable({
  providedIn: 'any',
})
export class MusicPlayerFacade {
  public activeTrack$ = this._store.activeTrack$;
  public volume$ = this._store.volume$;
  public trackDuration$ = this._store.trackDuration$;
  public trackProgress$ = this._store.trackProgress$;
  public controllerSize$ = this._store.controllerSize$;
  public searchField$ = this._store.searchField$;
  public isTrackSelected$ = this._store.isTrackSelected$;
  public platform$ = this._store.platform$;
  public trackList$ = this._store.trackList$;
  public track$ = this._store.track$;
  public displayNextButton$ = this._store.hasNextButton$;
  public displayPreviousButton$ = this._store.hasPreviousButton$;
  public isTrackPlaying$ = this._store.isTrackPlaying$;
  public isLoading$ = this._store.isLoading$;

  constructor(private _store: MusicPlayerRepositoryService) {}

  public playPauseTrack() {
    this._store.playPauseTrack();
  }
  public seekTrack(sliderValue: number) {
    this._store.seekTrack(sliderValue);
  }

  public searchTracks() {
    return this._store.searchByTrack();
  }

  public clearTrackList() {
    this._store.clearTrackList();
  }
  public closeController() {
    this._store.closeController();
  }

  public minimiseController() {
    this._store.minimiseController();
  }

  public maximiseController() {
    this._store.maximiseController();
  }

  public selectTrack(track: JamendoTrack) {
    this._store.setSelectedTrack(track);
  }
  public skipTrack(skipStatus: boolean) {
    this._store.skipTrack(skipStatus);
  }
}
