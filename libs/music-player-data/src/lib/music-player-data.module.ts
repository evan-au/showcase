import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerFacade } from './application/music-player.facade';
import { HttpClientModule } from '@angular/common/http';
import { JamendoDataService } from './services/jamendo-data.service';
import { JamendoStoreService } from './application/jamendo.store.service';
import { LocalDataService } from './services/local-data.service';
import { LocalStoreService } from './application/local.store.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    MusicPlayerFacade,
    JamendoDataService,
    JamendoStoreService,
    LocalDataService,
    LocalStoreService,
  ],
})
export class MusicPlayerDataModule {}
