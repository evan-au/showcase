import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { PlayerBaseModule } from '../../components/player-base/player-base.module';
import { ControllerBaseModule } from '../../components/controller-base/controller-base.module';
import { TrackListModule } from '../../components/track-list/track-list.module';
import { SharedUiModule } from '@showcase-ws/shared-ui';

// Components
import { JamendoComponent } from './jamendo.component';

@NgModule({
  declarations: [JamendoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: JamendoComponent,
      },
    ]),
    PlayerBaseModule,
    ControllerBaseModule,
    TrackListModule,
    SharedUiModule,
  ],
})
export class JamendoModule {}
