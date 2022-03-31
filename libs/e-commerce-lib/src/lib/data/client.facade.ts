import { Injectable } from '@angular/core';
import { Actions } from '@ngneat/effects-ng';

// Interfaces
import { BrandInterface } from './interfaces/brand.interface';
import { CategoryInterface } from './interfaces/category.interface';

// Actions
import {
  loadAllBrands,
  loadAllCategories,
  loadAllProducts,
} from './store/store.actions';

// Store
import { StoreRepository } from './store/store.repository';

@Injectable({
  providedIn: 'root',
})
export class ClientFacade {
  // Streams
  allProducts$ = this._repo.allProducts$;
  visibleProducts$ = this._repo.visibleProducts$;
  brands$ = this._repo.allBrands$;
  categories$ = this._repo.allCategories$;
  isPending$ = this._repo.isPending$;

  constructor(private _repo: StoreRepository, private _actions: Actions) {}

  // Actions
  loadAllProducts() {
    this._actions.dispatch(loadAllProducts());
  }

  loadAllCategories() {
    this._actions.dispatch(loadAllCategories());
  }

  loadAllBrands() {
    this._actions.dispatch(loadAllBrands());
  }

  updateFilterBrands(payload: BrandInterface['name']) {
    this._repo.updateFilterBrands(payload);
  }

  updateFilterCategories(payload: CategoryInterface['name']) {
    this._repo.updateFilterCategories(payload);
  }

  updateFilterAll() {
    this._repo.updateFilterAll();
  }
}
