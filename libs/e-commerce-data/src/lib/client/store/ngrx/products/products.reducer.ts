import { createReducer, on, Action } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { initialState } from '../../../state/products.state';
import { ProductsStateInterface } from '../../../interfaces/products-state.interface';

export const PRODUCTS_FEATURE_KEY = 'Products';

// export interface ProductState {
//   products: ProductInterface[] | null;
//   isLoading: boolean | null;
// }

// export const initialState: ProductState = {
//   products: null,
//   isLoading: null,
// };

const ProductsReducer = createReducer(
  initialState,
  on(ProductsActions.initAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ProductsActions.loadProductsSuccessAction, (state, payload) => ({
    ...state,
    products: payload.products,
    isLoading: false,
  })),
  on(ProductsActions.loadProductsFailureAction, (state) => ({
    ...state,
    isLoading: false,
  }))
);

export function reducer(state: ProductsStateInterface, action: Action) {
  return ProductsReducer(state, action);
}
