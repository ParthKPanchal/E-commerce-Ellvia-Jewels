export interface Product {
  id: number;
  sku: string;
  product_name: string;
  description: string;
  price: string;
  category: string;
  material: string;
  finish_color: string;
  stone_type: string;
  size: string;
  occasion: string;
  style: string;
  adjustable: number;
  waterproof: number;
  tarnish_resistant: number;
  stock: number;
  is_bestseller: number;
  is_new_arrival: number;
  is_active: number;

  primary_image?: string;
}