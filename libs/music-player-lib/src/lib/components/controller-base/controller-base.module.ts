import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerBaseComponent } from './controller-base.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { JamendoControllerComponent } from '../jamendo-controller/jamendo-controller.component';
import { LocalControllerComponent } from '../local-controller/local-controller.component';

@NgModule({
  declarations: [
    ControllerBaseComponent,
    JamendoControllerComponent,
    LocalControllerComponent,
  ],
  imports: [CommonModule, SharedUiModule],
  exports: [ControllerBaseComponent],
})
export class ControllerBaseModule {}
