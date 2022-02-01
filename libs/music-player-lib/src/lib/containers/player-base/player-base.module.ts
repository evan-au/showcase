import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { UtilsModule } from '@showcase-ws/utils';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { PlayerBaseComponent } from './player-base.component';

@NgModule({
  declarations: [PlayerBaseComponent, MenuComponent],
  imports: [CommonModule, SharedUiModule, UtilsModule, RouterModule],
  exports: [PlayerBaseComponent],
})
export class PlayerBaseModule {}
