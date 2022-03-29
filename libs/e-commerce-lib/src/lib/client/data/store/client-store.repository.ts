import { Injectable } from '@angular/core';

import { createStore, select, withProps } from '@ngneat/elf';
import {
  deleteEntities,
  selectAll,
  selectAllApply,
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
import { distinctUntilChanged, filter, map, mergeWith, switchMap } from 'rxjs';
import { ProductInterface } from '../../../backend/interfaces/product.interface';

import * as localforage from 'localforage';
import { BrandInterface } from '../../../backend/interfaces/brand.interface';
import { CategoryInterface } from '../../../backend/interfaces/category.interface';

interface GeneralErrorProps {
  generalError: PostgrestError | null;
}
interface CategoriesProps {
  categories: CategoryInterface[] | null;
}
interface BrandsProps {
  brands: BrandInterface[] | null;
}
interface FilterProps {
  filterBrands: BrandInterface['name'] | null;
  filterCategories: CategoryInterface['name'] | null;
}

const store = createStore(
  { name: 'client-store' },
  withEntities<ProductInterface>(),
  withProps<BrandsProps>({ brands: null }),
  withProps<CategoriesProps>({ categories: null }),
  withProps<GeneralErrorProps>({ generalError: null }),
  withProps<FilterProps>({ filterBrands: null, filterCategories: null }),
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
  source: () =>
    store.pipe(
      excludeKeys([
        'requestsStatus',
        'generalError',
        'filterBrands',
        'filterCategories',
      ])
    ),
});

export const trackProductsRequestsStatus = createRequestsStatusOperator(store);

@Injectable({ providedIn: 'root' })
export class ClientStoreRepository {
  // Streams
  allProducts$ = store.pipe(selectAll());
  filterBrands$ = store.pipe(select((state) => state.filterBrands));
  filterCategories$ = store.pipe(select((state) => state.filterCategories));

  private _visibleBrands$ = this.filterBrands$.pipe(
    switchMap((filterBrands) => {
      return store.pipe(
        selectAllApply({
          filterEntity({ brands }) {
            if (filterBrands === null) return true;
            return filterBrands !== brands['name'] ? false : true;
          },
        }),
        distinctUntilChanged()
      );
    })
  );
  private _visibleCategories$ = this.filterCategories$.pipe(
    switchMap((filterCategories) => {
      return store.pipe(
        selectAllApply({
          filterEntity({ categories }) {
            if (filterCategories === null) return true;
            return filterCategories !== categories['name'] ? false : true;
          },
        }),
        distinctUntilChanged()
      );
    })
  );
  visibleProducts$ = this._visibleBrands$.pipe(
    mergeWith(this._visibleCategories$)
  );

  allCategories$ = store.pipe(
    map((state) => state.categories),
    distinctUntilChanged()
  );
  allBrands$ = store.pipe(
    map((state) => state.brands),
    distinctUntilChanged()
  );
  productsError$ = store.pipe(
    selectRequestStatus('products'),
    filter((status) => status.value === 'error'),
    distinctUntilChanged()
  );
  generalErrors$ = store.pipe(
    map((state) => state.generalError),
    distinctUntilChanged()
  );
  isPending$ = store.pipe(selectIsRequestPending('products'));

  // Actions
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

  loadAllBrands(brands: BrandInterface[], error: PostgrestError) {
    store.update((state) => ({
      ...state,
      brands,
      generalError: error,
    }));
  }

  loadAllCategories(categories: CategoryInterface[], error: PostgrestError) {
    store.update((state) => ({
      ...state,
      categories,
      generalError: error,
    }));
  }

  updateFilterBrands(payload: BrandInterface['name']) {
    store.update((state) => ({
      ...state,
      filterBrands: payload,
    }));
  }
  updateFilterCategories(payload: CategoryInterface['name']) {
    store.update((state) => ({
      ...state,
      filterCategories: payload,
    }));
  }
  updateFilterAll() {
    store.update((state) => ({
      ...state,
      filterCategories: null,
      filterBrands: null,
    }));
  }
}
