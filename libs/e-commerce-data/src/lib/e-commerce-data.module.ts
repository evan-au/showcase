import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceFacade } from './application/e-commerce.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './application/+state/products/products.effects';
import * as fromProductsStore from './application/+state/products/products.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromProductsStore.PRODUCTS_FEATURE_KEY,
      fromProductsStore.reducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers: [ECommerceFacade],
})
export class ECommerceDataModule {}
