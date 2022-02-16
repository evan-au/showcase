import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCTS_FEATURE_KEY, ProductState } from './products.reducer';

export const getProductsState =
  createFeatureSelector<ProductState>(PRODUCTS_FEATURE_KEY);

export const getAllProducts = createSelector(
  getProductsState,
  (state: ProductState) => state.products
);

export const getIsLoading = createSelector(
  getProductsState,
  (state: ProductState) => state.isLoading
);
