import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerBaseComponent } from './player-base.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { UtilsModule } from '@showcase-ws/utils';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  declarations: [PlayerBaseComponent, MenuComponent],
  imports: [CommonModule, SharedUiModule, UtilsModule, RouterModule],
  exports: [PlayerBaseComponent],
})
export class PlayerBaseModule {}
