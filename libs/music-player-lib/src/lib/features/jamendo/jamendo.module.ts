import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { PlayerBaseModule } from '../../containers/player-base/player-base.module';
import { ControllerBaseModule } from '../../containers/controller-base/controller-base.module';
import { TrackListBaseModule } from '../../containers/track-list-base/track-list-base.module';
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
    TrackListBaseModule,
    SharedUiModule,
  ],
})
export class JamendoModule {}
