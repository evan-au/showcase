import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { MusicPlayerDataModule } from '@showcase-ws/music-player-data';

// Components
import { FeatHomeComponent } from './features/feat-home/feat-home.component';

@NgModule({
  declarations: [FeatHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: FeatHomeComponent },
    ]),
    MusicPlayerDataModule,
  ],
})
export class MusicPlayerLibModule {}
