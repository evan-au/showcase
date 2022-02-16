import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, distinctUntilChanged } from 'rxjs';

class ProductsState {
  products: string[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class ECommerceStoreService {
  private _state = new ProductsState();
  private _productsStore = new BehaviorSubject<ProductsState>(this._state);
  private _productsState$: Observable<ProductsState> =
    this._productsStore.asObservable();

  public storeProducts$ = this._productsState$.pipe(
    map((state) => state.products),
    distinctUntilChanged()
  );

  public saveProducts(products: string[]) {
    this._productsStore.next((this._state = { ...this._state, products }));
  }
}
