import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCTS_FEATURE_KEY, ProductState } from './products.reducer';

export const getProductsState =
  createFeatureSelector<ProductState>(PRODUCTS_FEATURE_KEY);

export const getProductsLoaded = createSelector(
  getProductsState,
  (state: ProductState) => state.hasSuccessfullyLoaded
);

export const getProductsError = createSelector(
  getProductsState,
  (state: ProductState) => state.error
);

export const getAllProducts = createSelector(
  getProductsState,
  (state: ProductState) => state.products
);
