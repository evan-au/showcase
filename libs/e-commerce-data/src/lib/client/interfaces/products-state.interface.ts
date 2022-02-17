import { ProductInterface } from './product.interface';

export interface ProductsStateInterface {
  products: ProductInterface[] | null;
  isLoading: boolean | null;
}
