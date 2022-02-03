import { createAction, props } from '@ngrx/store';
import { ErrorInterface, ProductInterface } from '@showcase-ws/e-commerce-data';

export const initAction = createAction('[Landing Page] Init');

export const loadProductsSuccessAction = createAction(
  '[Products Effects] Load Products Success',
  props<{ products: ProductInterface[] }>()
);

export const loadProductsFailureAction = createAction(
  '[Products Effects] Load Products Failure',
  props<{ error: ErrorInterface }>()
);
