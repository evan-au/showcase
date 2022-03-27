import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { UtilsModule } from '@showcase-ws/utils';
import { SwiperModule } from 'swiper/angular';

// Components
import { UiLayoutComponent } from './ui-layout/ui-layout.component';
import { UiSignUpComponent } from './ui-sign-up/ui-sign-up.component';
import { UiSignInComponent } from './ui-sign-in/ui-sign-in.component';
import { UiDashboardLayoutComponent } from './ui-dashboard-layout/ui-dashboard-layout.component';
import { UiWelcomeComponent } from './ui-welcome/ui-welcome.component';
import { UiSnackbarComponent } from './ui-snackbar/ui-snackbar.component';

@NgModule({
  declarations: [
    UiLayoutComponent,
    UiSignUpComponent,
    UiSignInComponent,
    UiDashboardLayoutComponent,
    UiWelcomeComponent,
    UiSnackbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SwiperModule,
    SharedUiModule,
    UtilsModule,
  ],
  exports: [
    UiLayoutComponent,
    UiSignUpComponent,
    UiSignInComponent,
    UiDashboardLayoutComponent,
    UiWelcomeComponent,
  ],
})
export class UiModule {}
