import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerBaseComponent } from './controller-base.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { JamendoControllerComponent } from '../../components/jamendo-controller/jamendo-controller.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ControllerBaseComponent, JamendoControllerComponent],
  imports: [CommonModule, SharedUiModule, FormsModule],
  exports: [ControllerBaseComponent],
})
export class ControllerBaseModule {}
