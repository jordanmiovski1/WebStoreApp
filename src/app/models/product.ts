import { ProductAsset } from './product-asset';
import { ProductVariant } from './product-variant';

export interface Product {
  id: number;
  source: string;
  name: string;
  description: string;
  featuredAsset?: ProductAsset;
  assets: ProductAsset[];
  variants: ProductVariant[];
}
