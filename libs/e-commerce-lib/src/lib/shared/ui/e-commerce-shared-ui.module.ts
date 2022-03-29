import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedProductCardComponent } from './shared-product-card/shared-product-card.component';
import { SharedSnackbarComponent } from './shared-snackbar/shared-snackbar.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SharedProductCardComponent, SharedSnackbarComponent],
  imports: [CommonModule, SharedUiModule, RouterModule],
  exports: [SharedProductCardComponent],
})
export class EcommerceSharedUiModule {}
