import { createAction } from '@ngneat/effects';

// Cart
// export const addProductToCart = createAction(
//   '[Product detail page] Add product to cart',
//   props<{ id: number; amount: number }>()
// );
// export const removeProductFromCart = createAction(
//   '[Cart page] Remove product from cart',
//   props<{ id: number }>()
// );
// export const updateProductQuantityFromCart = createAction(
//   '[Cart page] Update product quantity from cart',
//   props<{ id: number; amount: number }>()
// );

// Products
export const loadAllProducts = createAction('[Landing page] Load All Products');
