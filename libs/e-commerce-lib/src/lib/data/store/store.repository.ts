import { Injectable } from '@angular/core';
import { distinctUntilChanged, filter, mergeWith, switchMap } from 'rxjs';

// BAAS - Supabase
import { PostgrestError } from '@supabase/supabase-js';

// Elf state management
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

// Local storage strategy
import * as localforage from 'localforage';

// Interfaces
import { BrandInterface } from '../interfaces/brand.interface';
import { CategoryInterface } from '../interfaces/category.interface';
import { ProductInterface } from '../interfaces/product.interface';

// Private properties
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
  { name: 'app-store' },
  withEntities<ProductInterface>(),
  withProps<BrandsProps>({ brands: null }),
  withProps<CategoriesProps>({ categories: null }),
  withProps<FilterProps>({ filterBrands: null, filterCategories: null }),
  withRequestsStatus<'products'>()
);

export const localStateInstance = persistState(store, {
  key: 'expo-e-commerce-app-store',
  storage: localforage as unknown as StateStorage,
  source: () =>
    store.pipe(
      excludeKeys(['requestsStatus', 'filterBrands', 'filterCategories'])
    ),
});

export const trackProductsRequestsStatus = createRequestsStatusOperator(store);

@Injectable({ providedIn: 'root' })
export class StoreRepository {
  // Streams
  allProducts$ = store.pipe(selectAll(), distinctUntilChanged());

  allBrands$ = store.pipe(
    select((state) => state.brands),
    distinctUntilChanged()
  );
  allCategories$ = store.pipe(
    select((state) => state.categories),
    distinctUntilChanged()
  );
  productsStatusState$ = store.pipe(
    selectRequestStatus('products'),
    distinctUntilChanged()
  );
  errorsStatusState$ = store.pipe(
    selectRequestStatus('products'),
    filter((state) => state.value === 'error'),
    distinctUntilChanged()
  );
  isPending$ = store.pipe(
    selectIsRequestPending('products'),
    distinctUntilChanged()
  );
  filterBrands$ = store.pipe(
    select((state) => state.filterBrands),
    distinctUntilChanged()
  );
  filterCategories$ = store.pipe(
    select((state) => state.filterCategories),
    distinctUntilChanged()
  );

  private _visibleBrands$ = this.filterBrands$.pipe(
    switchMap((filterBrands) => {
      return store.pipe(
        selectAllApply({
          filterEntity({ brands }) {
            if (filterBrands === null) return true;
            return filterBrands !== brands?.['name'] ? false : true;
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
            return filterCategories !== categories?.['name'] ? false : true;
          },
        }),
        distinctUntilChanged()
      );
    })
  );
  visibleProducts$ = this._visibleBrands$.pipe(
    mergeWith(this._visibleCategories$),
    distinctUntilChanged()
  );

  // Actions
  loadAllProductsSuccess(products: ProductInterface[]) {
    store.update(
      setEntities(products),
      updateRequestStatus('products', 'success')
    );
  }

  loadAllProductsFailure(error: PostgrestError) {
    store.update(updateRequestStatus('products', 'error', error));
  }

  addProductFailure(error: PostgrestError) {
    store.update(updateRequestStatus('products', 'error', error));
  }

  // deleteProductSuccess(id: ProductInterface['id']) {
  //   store.update(updateRequestStatus('products', 'error', error));
  // }
  deleteProductFailure(error: PostgrestError) {
    store.update(updateRequestStatus('products', 'error', error));
  }

  updateProductsRT(id: ProductInterface['id'], newProduct: ProductInterface) {
    store.update(
      updateEntities(id, newProduct),
      updateRequestStatus('products', 'success')
    );
  }

  deleteProductsRT(id: ProductInterface['id']) {
    store.update(
      deleteEntities(id),
      updateRequestStatus('products', 'success')
    );
  }

  addProductsRT(product: ProductInterface) {
    store.update(
      upsertEntities(product),
      updateRequestStatus('products', 'success')
    );
  }

  loadAllBrands(brands: BrandInterface[], error: PostgrestError) {
    store.update(
      (state) => ({
        ...state,
        brands,
      }),
      updateRequestStatus('products', 'error', error)
    );
  }

  loadAllCategories(categories: CategoryInterface[], error: PostgrestError) {
    store.update(
      (state) => ({
        ...state,
        categories,
      }),
      updateRequestStatus('products', 'error', error)
    );
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
