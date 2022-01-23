import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerFacade } from './application/music-player.facade';
import { HttpClientModule } from '@angular/common/http';
import { MusicPlayerDataService } from './services/music-player-data.service';
import { MusicPlayerStoreService } from './application/music-player.store.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    MusicPlayerFacade,
    MusicPlayerDataService,
    MusicPlayerStoreService,
  ],
})
export class MusicPlayerDataModule {}
