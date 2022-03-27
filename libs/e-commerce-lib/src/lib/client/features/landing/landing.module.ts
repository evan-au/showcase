import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceSharedUiModule } from '../../../shared/ui/e-commerce-shared-ui.module';
import { UiModule } from '../../ui/ui.module';

const routes: Routes = [{ path: '', component: LandingComponent }];
@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    SharedUiModule,
    EcommerceSharedUiModule,
  ],
})
export class LandingModule {}
