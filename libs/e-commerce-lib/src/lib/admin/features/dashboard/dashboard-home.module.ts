import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../../ui/ui.module';

const routes: Routes = [{ path: '', component: DashboardHomeComponent }];

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
})
export class DashboardHomeModule {}
