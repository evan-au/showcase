import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { EcommerceSharedUiModule } from '../../../shared/ui/e-commerce-shared-ui.module';
import { UiModule } from '../../ui/ui.module';

// Components
import { LandingComponent } from './landing.component';

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
