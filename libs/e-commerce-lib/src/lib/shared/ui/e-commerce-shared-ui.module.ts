import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { SharedUiModule } from '@showcase-ws/shared-ui';

// Components
import { SharedProductCardComponent } from './shared-product-card/shared-product-card.component';
import { SharedSnackbarComponent } from './shared-snackbar/shared-snackbar.component';

@NgModule({
  declarations: [SharedProductCardComponent, SharedSnackbarComponent],
  imports: [CommonModule, SharedUiModule, RouterModule],
  exports: [SharedProductCardComponent],
})
export class EcommerceSharedUiModule {}
