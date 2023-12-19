import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private products: Product[] = [];

  addProductToOrder(product: Product): void {
    this.products.push(product);
  }

  getOrderProducts(): Product[] {
    return this.products;
  }
}
