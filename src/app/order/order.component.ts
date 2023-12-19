import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private readonly orderService: OrderService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products = this.orderService.getOrderProducts();
    console.log(this.products);
  }
}
