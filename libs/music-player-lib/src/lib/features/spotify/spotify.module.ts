import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { PlayerBaseModule } from '../../components/player-base/player-base.module';
import { ControlsModule } from '../../components/controls/controls.module';
import { TrackListModule } from '../../components/track-list/track-list.module';

// Components
import { SpotifyComponent } from './spotify.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
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
    ControlsModule,
    TrackListModule,
    SharedUiModule,
  ],
})
export class SpotifyModule {}
