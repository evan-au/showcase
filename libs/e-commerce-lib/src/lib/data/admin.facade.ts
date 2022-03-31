import { Injectable } from '@angular/core';
import { Actions } from '@ngneat/effects-ng';

// Interfaces
import { AddProductInterface } from './interfaces/add-product.interface';

// Actions
import {
  loadAllProducts,
  loadAllBrands,
  loadAllCategories,
  addProduct,
} from './store/store.actions';

// Store
import { StoreRepository } from './store/store.repository';

@Injectable({
  providedIn: 'root',
})
export class AdminFacade {
  // Streams
  allProducts$ = this._repo.allProducts$;
  allBrands$ = this._repo.allBrands$;
  allCategories$ = this._repo.allCategories$;
  isPending$ = this._repo.isPending$;

  constructor(private _repo: StoreRepository, private _actions: Actions) {}

  // Actions
  loadAllProducts() {
    this._actions.dispatch(loadAllProducts());
  }

  loadAllBrands() {
    this._actions.dispatch(loadAllBrands());
  }
  loadAllCategories() {
    this._actions.dispatch(loadAllCategories());
  }
  addProduct(payload: AddProductInterface) {
    this._actions.dispatch(addProduct({ product: payload }));
  }
}
