import { BrandInterface } from './brand.interface';
import { CategoryInterface } from './category.interface';

export interface ProductInterface {
  id: number;
  brand: number;
  brands: BrandInterface;
  categories: CategoryInterface;
  category: number;
  description: string;
  image: string;
  // is_available: boolean;
  name: string;
  price: number;
  shipping_information: string;
}
