import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { UiModule } from '../../ui/ui.module';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { UtilsModule } from '@showcase-ws/utils';

// Components
import { DashboardHomeComponent } from './dashboard-home.component';
import { EcommerceSharedUiModule } from '../../../shared/ui/e-commerce-shared-ui.module';

const routes: Routes = [{ path: '', component: DashboardHomeComponent }];
@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    EcommerceSharedUiModule,
    SharedUiModule,
    UtilsModule,
  ],
})
export class DashboardHomeModule {}
