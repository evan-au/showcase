import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminSignUpComponent,
    AdminSignInComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [AdminLayoutComponent, AdminSignUpComponent, AdminSignInComponent],
})
export class UiModule {}
