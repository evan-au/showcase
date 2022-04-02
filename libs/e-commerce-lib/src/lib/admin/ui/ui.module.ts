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
import { UiOrderComponent } from './ui-order/ui-order.component';
import { UiAddProductComponent } from './ui-add-product/ui-add-product.component';
import { UiAddSnackbarComponent } from './ui-add-snackbar/ui-add-snackbar.component';
import { UiAuthSnackbarComponent } from './ui-auth-snackbar/ui-auth-snackbar.component';
import { UiDeleteDialogComponent } from './ui-delete-dialog/ui-delete-dialog.component';
import { UiDeleteSnackbarComponent } from './ui-delete-snackbar/ui-delete-snackbar.component';
import { UiUpdateSnackbarComponent } from './ui-update-snackbar/ui-update-snackbar.component';

@NgModule({
  declarations: [
    UiLayoutComponent,
    UiSignUpComponent,
    UiSignInComponent,
    UiDashboardLayoutComponent,
    UiWelcomeComponent,
    UiOrderComponent,
    UiAddProductComponent,
    UiAddSnackbarComponent,
    UiAuthSnackbarComponent,
    UiDeleteSnackbarComponent,
    UiUpdateSnackbarComponent,
    UiDeleteDialogComponent,
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
    UiOrderComponent,
    UiAddProductComponent,
  ],
})
export class UiModule {}
