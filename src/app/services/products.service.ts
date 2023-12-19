import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../models/product';
import { ProductFilters } from '../models/product-filters';
import { ProductsDataService } from './products-data.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = new BehaviorSubject<Product[]>([]);

  private filters: ProductFilters = {
    name: null,
  };

  private sortAsc = true;

  constructor(private readonly productsDataService: ProductsDataService) {}

  getFilters(): ProductFilters {
    return this.filters;
  }

  changeFilters(filters: ProductFilters) {
    this.filters = filters;
    this.fetchProductsFromApi();
  }

  changeSorting(ascDirection: boolean): void {
    this.sortAsc = ascDirection;
    this.fetchProductsFromApi();
  }

  fetchProductsFromApi(): void {
    this.productsDataService
      .getProductsPaginated(this.filters.name, this.sortAsc)
      .subscribe((products) => {
        this.products.next(products);
      });
  }

  getProduct(productId: number): Observable<Product | undefined> {
    return this.productsDataService.getProduct(productId);
  }

  getProducts(): Observable<Product[]> {
    return this.products;
  }
}
