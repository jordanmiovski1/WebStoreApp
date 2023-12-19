import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

   private subject = new Subject<any>();

  products = [
    {name :'', price:''}
  ];

  sendClickEvent()
  {
    this.subject.next();
    //console.log('2');
  }

  getClickEvent():Observable<any>{
    console.log('2');
    return this.subject.asObservable();
  }
 

  addNewProduct(name: string, price: string)
  {
    this.products.push({name: name, price: price});

  }
}
