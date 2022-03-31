import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { UiModule } from '../../../ui/ui.module';

// Components
import { SignInComponent } from './sign-in.component';

const routes: Routes = [{ path: '', component: SignInComponent }];

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
})
export class SignInModule {}
