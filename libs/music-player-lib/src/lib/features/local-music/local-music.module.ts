import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalMusicComponent } from './local-music.component';
import { RouterModule } from '@angular/router';
import { PlayerBaseModule } from '../../components/player-base/player-base.module';
import { ControlsModule } from '../../components/controls/controls.module';

@NgModule({
  declarations: [LocalMusicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LocalMusicComponent,
      },
    ]),
    PlayerBaseModule,
    ControlsModule,
  ],
})
export class LocalMusicModule {}