import { Injectable } from '@angular/core';

import { createStore } from '@ngneat/elf';
import {
  addEntities,
  deleteEntities,
  selectAll,
  setEntities,
  updateEntities,
  upsertEntities,
  withEntities,
} from '@ngneat/elf-entities';
import {
  excludeKeys,
  persistState,
  StateStorage,
} from '@ngneat/elf-persist-state';
import {
  withRequestsStatus,
  createRequestsStatusOperator,
  updateRequestStatus,
  selectRequestStatus,
  selectIsRequestPending,
} from '@ngneat/elf-requests';
import { PostgrestError } from '@supabase/supabase-js';
import { filter, map, tap } from 'rxjs';
import { ProductInterface } from '../../../backend/interfaces/product.interface';

import * as localforage from 'localforage';

const store = createStore(
  { name: 'client-store' },
  withEntities<ProductInterface>(),
  withRequestsStatus<'products'>()
);

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'ECommerceApp',
  version: 1.0,
  storeName: 'e-commerce-store',
});

export const indexDBInstance = persistState(store, {
  key: 'e-commerce-store',
  storage: localforage as unknown as StateStorage,
  source: () => store.pipe(excludeKeys(['requestsStatus'])),
});

export const trackProductsRequestsStatus = createRequestsStatusOperator(store);

@Injectable({ providedIn: 'root' })
export class ClientStoreRepository {
  allProducts$ = store.pipe(selectAll());

  isFailing$ = store.pipe(
    selectRequestStatus('products'),
    filter((status) => status.value === 'error'),
    map(() => true)
  );

  isPending$ = store.pipe(selectIsRequestPending('products'));

  loadAllProductsSuccess(products: ProductInterface[]) {
    store.update(
      setEntities(products),
      updateRequestStatus('products', 'success')
    );
  }

  loadAllProductsFailure(error: PostgrestError) {
    store.update(updateRequestStatus('products', 'error', error.message));
  }

  updateProductsRT(id: ProductInterface['id'], newProduct: ProductInterface) {
    store.update(updateEntities(id, newProduct));
  }

  deleteProductsRT(id: ProductInterface['id']) {
    store.update(deleteEntities(id));
  }

  addProductsRT(product: ProductInterface) {
    store.update(upsertEntities(product));
  }
}
