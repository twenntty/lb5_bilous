import { BaseContent } from './base';

export interface Product extends BaseContent {
  name: string;
  description: string;
  price: number;
  inStock: boolean;
}
