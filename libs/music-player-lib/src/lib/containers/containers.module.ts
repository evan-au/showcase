import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerContainerComponent } from './controller-container/controller-container.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { TrackListContainerComponent } from './track-list-container/track-list-container.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { UtilsModule } from '@showcase-ws/utils';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    ControllerContainerComponent,
    PlayerContainerComponent,
    TrackListContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    UtilsModule,
    RouterModule,
    ComponentsModule,
  ],
  exports: [
    ControllerContainerComponent,
    PlayerContainerComponent,
    TrackListContainerComponent,
  ],
})
export class ContainersModule {}
