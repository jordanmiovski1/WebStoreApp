import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products = this.productsService.getProducts();

  productName: string | null = null;

  constructor(private readonly productsService: ProductsService) {
    this.productsService.fetchProductsFromApi();
  }

  ngOnInit(): void {
    this.productName = this.productsService.getFilters().name;
  }

  sortProductsDesc(): void {
    this.productsService.changeSorting(false);
  }

  sortProductsAsc(): void {
    this.productsService.changeSorting(true);
  }

  search() {
    this.productsService.changeFilters({
      name: this.productName,
    });
  }
}
