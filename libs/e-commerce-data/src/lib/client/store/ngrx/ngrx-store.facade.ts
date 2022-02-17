import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

// Interfaces
import { ProductInterface } from '../../interfaces/product.interface';

// Store
import { Store } from '@ngrx/store';
import { ProductsActions, ProductsSelectors } from '../ngrx';

@Injectable({
  providedIn: 'root',
})
export class NgRxStoreFacade {
  // Store selectors
  public products$: Observable<ProductInterface[] | null> =
    this._ngrxStore.select(ProductsSelectors.getAllProducts);

  public menClothing$: Observable<ProductInterface[] | undefined> =
    this._ngrxStore
      .select(ProductsSelectors.getAllProducts)
      .pipe(
        map((products) =>
          products?.filter((product) => product.category === "men's clothing")
        )
      );

  public womenClothing$: Observable<ProductInterface[] | undefined> =
    this._ngrxStore
      .select(ProductsSelectors.getAllProducts)
      .pipe(
        map((products) =>
          products?.filter((product) => product.category === "women's clothing")
        )
      );

  public jewelery$: Observable<ProductInterface[] | undefined> = this._ngrxStore
    .select(ProductsSelectors.getAllProducts)
    .pipe(
      map((products) =>
        products?.filter((product) => product.category === 'jewelery')
      )
    );

  public electronics$: Observable<ProductInterface[] | undefined> =
    this._ngrxStore
      .select(ProductsSelectors.getAllProducts)
      .pipe(
        map((products) =>
          products?.filter((product) => product.category === 'electronics')
        )
      );

  public isLoading$: Observable<boolean | null> = this._ngrxStore.select(
    ProductsSelectors.getIsLoading
  );

  constructor(private _ngrxStore: Store) {}

  // Actions
  public loadProducts(): void {
    this._ngrxStore.dispatch(ProductsActions.initAction());
  }
}
