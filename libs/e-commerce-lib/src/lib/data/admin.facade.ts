import { Injectable } from '@angular/core';
import { Actions } from '@ngneat/effects-ng';

// Components
import { MatSnackBar } from '@angular/material/snack-bar';
import { UiSnackbarComponent } from '../admin/ui/ui-snackbar/ui-snackbar.component';

// Interfaces
import { ProductInterface } from './interfaces/product.interface';

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
  productsStatusState$ = this._repo.productsStatusState$;
  errorsStatusState$ = this._repo.errorsStatusState$;
  allBrands$ = this._repo.allBrands$;
  allCategories$ = this._repo.allCategories$;
  isPending$ = this._repo.isPending$;

  constructor(
    private _repo: StoreRepository,
    private _actions: Actions,
    private _snackbar: MatSnackBar
  ) {}

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
  addProduct(payload: ProductInterface) {
    this._actions.dispatch(addProduct({ product: payload }));
    this.triggerSnackbar();
  }

  triggerSnackbar() {
    this._snackbar.openFromComponent(UiSnackbarComponent, {
      panelClass: 'e-commerce-snackbar',
      duration: 5000,
    });
  }
}
