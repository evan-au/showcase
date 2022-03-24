import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngneat/effects';
import { UntilDestroy } from '@ngneat/until-destroy';
import { PostgrestError } from '@supabase/supabase-js';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { SupabaseService } from '../../../backend/services/supabase.service';
import { loadAllProducts } from './client-store.actions';
import {
  ClientStoreRepository,
  trackProductsRequestsStatus,
} from './client-store.repository';
@UntilDestroy({ checkProperties: true })
@Injectable({ providedIn: 'root' })
export class ClientStoreEffects {
  constructor(
    private _supabaseService: SupabaseService,
    private _repo: ClientStoreRepository
  ) {}

  loadAllProducts$ = createEffect((actions) =>
    actions.pipe(
      ofType(loadAllProducts),
      switchMap(() =>
        from(this._supabaseService.getAllProducts()).pipe(
          trackProductsRequestsStatus('products'),
          map(({ products }) => this._repo.loadAllProductsSuccess(products)),
          tap(() => {
            this._supabaseService.supabase
              .from('products')
              .on('UPDATE', (payload) => {
                this._repo.updateProductsRT(payload.new.id, payload.new);
                console.log('Product UPDATED =>', payload.new.id, payload.new);
              })
              .on('INSERT', (payload) => {
                this._repo.addProductsRT(payload.new);

                console.log('Product ADDED =>', payload.new);
              })
              .on('DELETE', (payload) => {
                this._repo.deleteProductsRT(payload.old.id);
                console.log('Product DELETED =>', payload.old.id);
              })
              .subscribe();
          }),
          catchError((error: PostgrestError) =>
            of(this._repo.loadAllProductsFailure(error))
          )
        )
      )
    )
  );
}
