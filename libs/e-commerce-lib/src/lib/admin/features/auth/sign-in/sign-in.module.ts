import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../../../ui/ui.module';

const routes: Routes = [{ path: '', component: SignInComponent }];

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
})
export class SignInModule {}
