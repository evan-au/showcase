import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MusicPlayerDataModule } from '@showcase-ws/music-player-data';
import { MusicPlayerRoutingModule } from './music-player-routing.module';

@NgModule({
  imports: [CommonModule, MusicPlayerDataModule, MusicPlayerRoutingModule],
})
export class MusicPlayerLibModule {}
