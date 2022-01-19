import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MusicPlayerDataModule } from '@showcase-ws/music-player-data';
import { MusicPlayerRoutingModule } from './music-player-routing.module';
import { SharedUiModule } from '@showcase-ws/shared-ui';

// Components
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MusicPlayerDataModule,
    MusicPlayerRoutingModule,
    SharedUiModule,
  ],
})
export class MusicPlayerLibModule {}
