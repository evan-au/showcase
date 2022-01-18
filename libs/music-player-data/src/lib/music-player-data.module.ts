import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerFacade } from './application/music-player.facade';

@NgModule({
  imports: [CommonModule],
  providers: [MusicPlayerFacade],
})
export class MusicPlayerDataModule {}
