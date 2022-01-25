import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalMusicComponent } from './local-music.component';
import { RouterModule } from '@angular/router';
import { PlayerBaseModule } from '../../components/player-base/player-base.module';
import { ControlsModule } from '../../components/controls/controls.module';
import { TrackListModule } from '../../components/track-list/track-list.module';
import { SharedUiModule } from '@showcase-ws/shared-ui';

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
    TrackListModule,
    SharedUiModule,
  ],
})
export class LocalMusicModule {}
