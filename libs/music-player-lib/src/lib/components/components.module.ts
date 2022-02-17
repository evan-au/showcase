import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { TrackListComponent } from './track-list/track-list.component';
import { PlayerControllerComponent } from './player-controller/player-controller.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { UtilsModule } from '@showcase-ws/utils';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingComponent,
    MenuComponent,
    TrackListComponent,
    PlayerControllerComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    UtilsModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    LandingComponent,
    MenuComponent,
    TrackListComponent,
    PlayerControllerComponent,
  ],
})
export class ComponentsModule {}
