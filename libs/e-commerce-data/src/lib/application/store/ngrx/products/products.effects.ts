import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ErrorInterface } from '../../../../interfaces/error.interface';
import { ProductInterface } from '../../../../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, concatMap, map, of } from 'rxjs';
import { ProductsActions } from '../index';

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
              of(ProductsActions.loadProductsFailureAction({ error })).pipe()
            )
          )
      )
    );
  });

  constructor(private readonly _actions$: Actions, private _http: HttpClient) {}
}
