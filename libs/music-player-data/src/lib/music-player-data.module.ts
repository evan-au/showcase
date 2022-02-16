import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerFacade } from './music-player.facade';
import { HttpClientModule } from '@angular/common/http';
import { JamendoDataService } from './services/jamendo-data.service';
import { MusicPlayerRepositoryService } from './store/push-rx/music-player.repository.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    MusicPlayerFacade,
    JamendoDataService,
    MusicPlayerRepositoryService,
  ],
})
export class MusicPlayerDataModule {}
