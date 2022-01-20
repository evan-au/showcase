import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from './youtube.component';
import { RouterModule } from '@angular/router';
import { PlayerBaseModule } from '../../components/player-base/player-base.module';

@NgModule({
  declarations: [YoutubeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: YoutubeComponent,
      },
    ]),
    PlayerBaseModule,
  ],
})
export class YoutubeModule {}
