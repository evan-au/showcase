import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  ErrorInterface,
  ProductInterface,
  ProductsActions,
} from '@showcase-ws/e-commerce-data';
import { HttpClient } from '@angular/common/http';
import { catchError, concatMap, map, of, shareReplay } from 'rxjs';

@Injectable()
export class ProductsEffects {
  init$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(ProductsActions.initAction),
      concatMap(() =>
        this._http
          .get<ProductInterface[]>('https://fakestoreapi.com/products')
          .pipe(
            shareReplay(),

            map((data) =>
              ProductsActions.loadProductsSuccessAction({ products: data })
            ),
            catchError((error: ErrorInterface) =>
              of(ProductsActions.loadProductsFailureAction({ error }))
            )
          )
      )
    );
  });

  constructor(private readonly _actions$: Actions, private _http: HttpClient) {}
}
