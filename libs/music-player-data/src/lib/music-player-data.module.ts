import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerFacade } from './application/music-player.facade';
import { HttpClientModule } from '@angular/common/http';
import { MusicPlayerDataService } from './services/music-player-data.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [MusicPlayerFacade, MusicPlayerDataService],
})
export class MusicPlayerDataModule {}
