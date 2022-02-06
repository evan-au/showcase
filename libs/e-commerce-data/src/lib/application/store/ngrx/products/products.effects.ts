import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ErrorInterface } from '../../../../interfaces/error.interface';
import { ProductInterface } from '../../../../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, concatMap, map, of, tap } from 'rxjs';
import { ProductsActions } from '../index';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ProductsEffects {
  init$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(ProductsActions.initAction),

      concatMap(() =>
        this._http
          .get<ProductInterface[]>('https://fakestoreapi.com/products')
          .pipe(
            map((data) =>
              ProductsActions.loadProductsSuccessAction({ products: data })
            ),
            catchError((error: ErrorInterface) =>
              of(ProductsActions.loadProductsFailureAction({ error })).pipe(
                tap((error) => {
                  if (error.error.status === 404) {
                    const errorMessage = `A ${error.error.status} error occurred. Contact the support team if problem persists.`;
                    this._snackBar.open(errorMessage, 'Dismiss', {
                      panelClass: 'error-snackbar',
                      horizontalPosition: 'right',
                      verticalPosition: 'bottom',
                    });
                  } else {
                    const errorMessage = `Technical issue. We are currently working on the problem.`;
                    this._snackBar.open(errorMessage, 'Dismiss', {
                      panelClass: 'error-snackbar',
                      horizontalPosition: 'right',
                      verticalPosition: 'bottom',
                    });
                  }
                })
              )
            )
          )
      )
    );
  });

  constructor(
    private readonly _actions$: Actions,
    private _http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}
}
