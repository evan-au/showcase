import { Injectable } from '@angular/core';
import { ECommerceDataService } from '../services/e-commerce-data.service';
import { ECommerceStoreService } from './e-commerce.store.service';

@Injectable({
  providedIn: 'any',
})
export class ECommerceFacade {
  public products$ = this._eCommerceStoreService.storeProducts$;

  constructor(
    private _eCommerceDataService: ECommerceDataService,
    private _eCommerceStoreService: ECommerceStoreService
  ) {}

  public loadProducts() {
    this._eCommerceDataService.loadData().subscribe((products) => {
      this._eCommerceStoreService.saveProducts(products);
    });
  }
}
