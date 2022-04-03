import { Injectable } from '@angular/core';
import { Actions } from '@ngneat/effects-ng';

// Components
import { MatSnackBar } from '@angular/material/snack-bar';
import { UiAddSnackbarComponent } from '../admin/ui/ui-add-snackbar/ui-add-snackbar.component';

// Interfaces
import { ProductInterface } from './interfaces/product.interface';

// Actions
import {
  loadAllProducts,
  loadAllBrands,
  loadAllCategories,
  addProduct,
  deleteProduct,
  updateProduct,
} from './store/store.actions';

// Store
import { StoreRepository } from './store/store.repository';
import { Router } from '@angular/router';
import { UiDeleteSnackbarComponent } from '../admin/ui/ui-delete-snackbar/ui-delete-snackbar.component';
import { UntilDestroy } from '@ngneat/until-destroy';
import { UiUpdateSnackbarComponent } from '../admin/ui/ui-update-snackbar/ui-update-snackbar.component';
@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class AdminFacade {
  // Streams
  allProducts$ = this._repo.allProducts$;
  productsStatusState$ = this._repo.productsStatusState$;
  allBrands$ = this._repo.allBrands$;
  allCategories$ = this._repo.allCategories$;
  isPending$ = this._repo.isPending$;

  constructor(
    private _repo: StoreRepository,
    private _actions: Actions,
    private _snackbar: MatSnackBar,
    private _router: Router
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
    this.triggerAddProductSnackbar();
  }

  deleteProduct(payload: ProductInterface['id']) {
    this._actions.dispatch(deleteProduct({ id: payload }));
    this.triggerDeleteProductSnackbar()
      .afterDismissed()
      .subscribe(() =>
        this._router.navigate(['e-commerce-app/admin/dashboard'])
      );
  }

  updateProduct(payload: {
    id: ProductInterface['id'];
    product: Partial<ProductInterface>;
  }) {
    this._actions.dispatch(updateProduct(payload));
    this.triggerUpdateProductSnackbar();
    // .afterDismissed()
    // .subscribe(() =>
    //   this._router.navigate(['e-commerce-app/admin/dashboard'])
    // );
  }

  triggerAddProductSnackbar() {
    this._snackbar.openFromComponent(UiAddSnackbarComponent, {
      panelClass: 'e-commerce-snackbar',
      duration: 5000,
    });
  }

  triggerDeleteProductSnackbar() {
    return this._snackbar.openFromComponent(UiDeleteSnackbarComponent, {
      panelClass: 'e-commerce-snackbar',
      duration: 3500,
    });
  }

  triggerUpdateProductSnackbar() {
    return this._snackbar.openFromComponent(UiUpdateSnackbarComponent, {
      panelClass: 'e-commerce-snackbar',
      duration: 3500,
    });
  }
}
