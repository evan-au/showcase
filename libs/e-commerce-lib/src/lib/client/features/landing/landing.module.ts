import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../../containers/landing/landing.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, SharedUiModule],
})
export class LandingModule {}
