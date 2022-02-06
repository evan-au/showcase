import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';
import { ProductsActions, ProductsSelectors } from './store/ngrx';

@Injectable({
  providedIn: 'any',
})
export class ECommerceFacade {
  public products$: Observable<ProductInterface[] | null> =
    this._ngrxStore.select(ProductsSelectors.getAllProducts);

  public isLoading$: Observable<boolean | null> = this._ngrxStore.select(
    ProductsSelectors.getIsLoading
  );

  constructor(private _ngrxStore: Store) {}

  public loadProducts() {
    this._ngrxStore.dispatch(ProductsActions.initAction());
  }
}
