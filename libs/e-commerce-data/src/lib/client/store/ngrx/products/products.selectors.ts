import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsStateInterface } from '../../../interfaces/products-state.interface';
import { PRODUCTS_FEATURE_KEY } from './products.reducer';

export const getProductsState =
  createFeatureSelector<ProductsStateInterface>(PRODUCTS_FEATURE_KEY);

export const getAllProducts = createSelector(
  getProductsState,
  (state: ProductsStateInterface) => state.products
);

export const getIsLoading = createSelector(
  getProductsState,
  (state: ProductsStateInterface) => state.isLoading
);
