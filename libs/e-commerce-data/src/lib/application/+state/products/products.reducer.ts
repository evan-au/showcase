import { createReducer, on, Action } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { ErrorInterface } from '../../../interfaces/error.interface';
import { ProductInterface } from '../../../interfaces/product.interface';

export const PRODUCTS_FEATURE_KEY = 'Products';

export interface ProductState {
  products: ProductInterface[];
  isLoading: boolean | null;
  hasSuccessfullyLoaded: boolean | null;
  error: ErrorInterface | null;
}

export const initialState: ProductState = {
  products: [],
  isLoading: null,
  hasSuccessfullyLoaded: null,
  error: null,
};

const ProductsReducer = createReducer(
  initialState,
  on(ProductsActions.initAction, (state) => ({
    ...state,
    isLoading: true,
    hasSuccessfullyLoaded: false,
  })),
  on(ProductsActions.loadProductsSuccessAction, (state, payload) => ({
    ...state,
    products: payload.products,
    isLoading: false,
    hasSuccessfullyLoaded: true,
  })),
  on(ProductsActions.loadProductsFailureAction, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: ProductState, action: Action) {
  return ProductsReducer(state, action);
}
