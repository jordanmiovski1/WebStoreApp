import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../models/product';
import { OrderService } from '../services/order.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private readonly productService: ProductsService,
    private readonly orderService: OrderService
  ) {}

  subs = new Subscription();

  product?: Product;

  addToCart() {
    this.orderService.addProductToOrder(this.product!);
  }

  ngOnInit(): void {
    this.subs.add(
      this.route.params.subscribe((params: Params) => {
        this.getProduct(params);
      })
    );
  }

  private getProduct(params: Params) {
    this.subs.add(
      this.productService
        .getProduct(params['id'])
        .subscribe((product: Product | undefined) => {
          console.log(product);
          this.product = product;
        })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
