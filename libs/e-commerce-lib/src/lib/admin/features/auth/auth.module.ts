import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { UiModule } from '../../ui/ui.module';

const routes: Routes = [{ path: '', component: AuthComponent }];
@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollingModule,
    UiModule,
  ],
})
export class AuthModule {}
