import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerFacade } from './application/music-player.facade';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyDataService } from './services/spotify-data.service';
import { SpotifyStoreService } from './application/spotify.store.service';
import { LocalDataService } from './services/local-data.service';
import { LocalStoreService } from './application/local.store.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    MusicPlayerFacade,
    SpotifyDataService,
    SpotifyStoreService,
    LocalDataService,
    LocalStoreService,
  ],
})
export class MusicPlayerDataModule {}
