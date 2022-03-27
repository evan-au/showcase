import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedProductCardComponent } from './shared-product-card/shared-product-card.component';
import { SharedSnackbarComponent } from './shared-snackbar/shared-snackbar.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';

@NgModule({
  declarations: [SharedProductCardComponent, SharedSnackbarComponent],
  imports: [CommonModule, SharedUiModule],
  exports: [SharedProductCardComponent],
})
export class EcommerceSharedUiModule {}
