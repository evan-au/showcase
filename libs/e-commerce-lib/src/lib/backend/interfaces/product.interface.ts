import { BrandInterface } from './brand.interface';
import { CategoryInterface } from './category.interface';

export interface ProductInterface {
  id: number;
  brand: number;
  brands: BrandInterface;
  categories: CategoryInterface;
  category: number;
  created_at: string;
  description: string;
  details: string[];
  discount_amount: number;
  images: string[];
  is_available: boolean;
  is_discounted: boolean;
  is_published: boolean;
  name: string;
  price: number;
  shipping_information: string;
  updated_at: string;
}
