import { Injectable } from '@angular/core';
import { from, map, switchMap, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';

// Elf state management
import { createEffect, ofType } from '@ngneat/effects';

// Services
import { SupabaseService } from '../services/supabase.service';

// Actions
import {
  loadAllProducts,
  addProduct,
  loadAllBrands,
  loadAllCategories,
  deleteProduct,
  updateProduct,
} from './store.actions';

// Store
import {
  StoreRepository,
  trackProductsRequestsStatus,
} from './store.repository';

@UntilDestroy({ checkProperties: true })
@Injectable({ providedIn: 'root' })
export class StoreEffects {
  constructor(
    private _supabaseService: SupabaseService,
    private _repo: StoreRepository
  ) {}

  loadAllProducts$ = createEffect((actions) =>
    actions.pipe(
      ofType(loadAllProducts),
      switchMap(() =>
        from(this._supabaseService.getAllProducts()).pipe(
          trackProductsRequestsStatus('products'),
          map(({ products, error }) => {
            this._repo.loadAllProductsSuccess(products);
            this._repo.databaseFailure(error);
          }),

          tap(() => {
            this._supabaseService.supabase
              .from('products')
              .on('UPDATE', (payload) => {
                this._repo.updateProduct(payload.new.id, payload.new);
              })
              .on('INSERT', (payload) => {
                this._repo.addProduct(payload.new);
              })
              .on('DELETE', (payload) => {
                this._repo.deleteProduct(payload.old.id);
              })
              .subscribe();
          })
        )
      )
    )
  );

  addProduct$ = createEffect((actions) =>
    actions.pipe(
      ofType(addProduct),
      switchMap(({ product }) =>
        from(this._supabaseService.addProduct(product)).pipe(
          trackProductsRequestsStatus('products'),
          map(({ error }) => this._repo.databaseFailure(error))
        )
      )
    )
  );

  deleteProduct$ = createEffect((actions) =>
    actions.pipe(
      ofType(deleteProduct),
      switchMap(({ id }) =>
        from(this._supabaseService.deleteProduct(id)).pipe(
          trackProductsRequestsStatus('products'),
          map(({ error }) => this._repo.databaseFailure(error))
        )
      )
    )
  );

  updateProduct$ = createEffect((actions) =>
    actions.pipe(
      ofType(updateProduct),
      switchMap((payload) =>
        from(this._supabaseService.updateProduct(payload)).pipe(
          trackProductsRequestsStatus('products'),
          map(({ error }) => this._repo.databaseFailure(error))
        )
      )
    )
  );

  loadAllBrands$ = createEffect((actions) =>
    actions.pipe(
      ofType(loadAllBrands),
      switchMap(() =>
        from(this._supabaseService.getAllBrands()).pipe(
          map(({ brands, error }) => this._repo.loadAllBrands(brands, error))
        )
      )
    )
  );

  loadAllCategories$ = createEffect((actions) =>
    actions.pipe(
      ofType(loadAllCategories),
      switchMap(() =>
        from(this._supabaseService.getAllCategories()).pipe(
          map(({ categories, error }) =>
            this._repo.loadAllCategories(categories, error)
          )
        )
      )
    )
  );
}
