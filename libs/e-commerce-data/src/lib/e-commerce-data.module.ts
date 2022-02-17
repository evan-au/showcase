import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Client store
import { ProductsEffects } from './client/store/ngrx/products/products.effects';
import * as fromProductsStore from './client/store/ngrx/products/products.reducer';

// Facades
import { ClientFacade } from './client/client.facade';

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
  providers: [ClientFacade],
})
export class ECommerceDataModule {}
