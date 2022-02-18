import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [LandingContainerComponent],
  imports: [CommonModule, ComponentsModule, SharedUiModule],
})
export class ContainersModule {}
