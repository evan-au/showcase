import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { UiModule } from '../../../ui/ui.module';

// Components
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [{ path: '', component: SignUpComponent }];

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
})
export class SignUpModule {}
