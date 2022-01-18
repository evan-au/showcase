import { Injectable } from '@angular/core';
import { MusicPlayerDataService } from '../services/music-player-data.service';
import { MusicPlayerStoreService } from './music-player.store.service';

@Injectable({
  providedIn: 'any',
})
export class MusicPlayerFacade {
  public music$ = this._musicPlayerStoreService.storeMusic$;

  constructor(
    private _musicPlayerDataService: MusicPlayerDataService,
    private _musicPlayerStoreService: MusicPlayerStoreService
  ) {}

  public loadMusic() {
    this._musicPlayerDataService.loadData().subscribe((music) => {
      this._musicPlayerStoreService.saveMusic(music);
    });
  }
}
