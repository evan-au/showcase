import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';

@NgModule({
  declarations: [ControlsComponent],
  imports: [CommonModule, SharedUiModule],
  exports: [ControlsComponent],
})
export class ControlsModule {}
