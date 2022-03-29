import { Injectable } from '@angular/core';
import { Actions } from '@ngneat/effects-ng';
import { BrandInterface } from '../../backend/interfaces/brand.interface';
import { CategoryInterface } from '../../backend/interfaces/category.interface';
import {
  loadAllProducts,
  loadAllCategories,
  loadAllBrands,
} from './store/client-store.actions';
import { ClientStoreRepository } from './store/client-store.repository';

@Injectable({
  providedIn: 'root',
})
export class ClientFacade {
  // Streams
  allProducts$ = this._clientRepo.allProducts$;
  visibleProducts$ = this._clientRepo.visibleProducts$;
  brands$ = this._clientRepo.allBrands$;
  categories$ = this._clientRepo.allCategories$;
  isPending$ = this._clientRepo.isPending$;

  constructor(
    private _clientRepo: ClientStoreRepository,
    private _actions: Actions
  ) {}

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
    this._clientRepo.updateFilterBrands(payload);
  }

  updateFilterCategories(payload: CategoryInterface['name']) {
    this._clientRepo.updateFilterCategories(payload);
  }

  updateFilterAll() {
    this._clientRepo.updateFilterAll();
  }
}
