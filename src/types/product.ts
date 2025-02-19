export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  shopName: string;
  isPromo?: boolean;
}
