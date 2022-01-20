import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyComponent } from './spotify.component';
import { RouterModule } from '@angular/router';
import { PlayerBaseModule } from '../../components/player-base/player-base.module';

@NgModule({
  declarations: [SpotifyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SpotifyComponent,
      },
    ]),
    PlayerBaseModule,
  ],
})
export class SpotifyModule {}
