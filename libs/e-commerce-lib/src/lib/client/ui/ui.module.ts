import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { UtilsModule } from '@showcase-ws/utils';
import { SharedUiModule } from '@showcase-ws/shared-ui';

// Components
import { UiLayoutComponent } from './ui-layout/ui-layout.component';
import { UiProductsLayoutComponent } from './ui-products-layout/ui-products-layout.component';
import { UiCartComponent } from './ui-cart/ui-cart.component';

@NgModule({
  declarations: [UiLayoutComponent, UiProductsLayoutComponent, UiCartComponent],
  imports: [CommonModule, RouterModule, UtilsModule, SharedUiModule],
  exports: [UiLayoutComponent, UiProductsLayoutComponent, UiCartComponent],
})
export class UiModule {}
