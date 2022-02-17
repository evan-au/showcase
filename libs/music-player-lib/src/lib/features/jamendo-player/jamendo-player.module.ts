import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules

import { SharedUiModule } from '@showcase-ws/shared-ui';

// Components
import { JamendoPlayerComponent } from './jamendo-player.component';
import { ContainersModule } from '../../containers/containers.module';

@NgModule({
  declarations: [JamendoPlayerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: JamendoPlayerComponent,
      },
    ]),

    ContainersModule,
    SharedUiModule,
  ],
})
export class JamendoModule {}
