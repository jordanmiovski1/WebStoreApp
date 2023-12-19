import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../services/add-product.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  clickEventSubscription: Subscription;

  constructor(private addProductService:AddProductService) {
    this.clickEventSubscription= this.addProductService.getClickEvent().subscribe(()=>{
      this.incrementCount()
    })
  }

  count: number = 0;

  incrementCount(){
    this.count++;
    console.log('15');
  }
  

  ngOnInit(): void {
    
  }

}
