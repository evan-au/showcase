import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutComponent } from './ui-layout/ui-layout.component';
import { UiProductsLayoutComponent } from './ui-products-layout/ui-products-layout.component';
import { UtilsModule } from '@showcase-ws/utils';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { UiCartComponent } from './ui-cart/ui-cart.component';

@NgModule({
  declarations: [UiLayoutComponent, UiProductsLayoutComponent, UiCartComponent],
  imports: [CommonModule, UtilsModule, SharedUiModule],
  exports: [UiLayoutComponent, UiProductsLayoutComponent, UiCartComponent],
})
export class UiModule {}
