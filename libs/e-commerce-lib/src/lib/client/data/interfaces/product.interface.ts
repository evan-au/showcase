export interface ProductInterface {
  id: number;
  title: string | null;
  price: number | null;
  description: string | null;
  category: string | null;
  image: string | null;
  rating: {
    rate: number;
    count: number;
  } | null;
}
