import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';

@NgModule({
  declarations: [LandingContainerComponent],
  imports: [CommonModule, SharedUiModule],
})
export class ContainersModule {}
