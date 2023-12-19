import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductsComponent } from './list-products/list-products.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    component: ListProductsComponent,
    path: '',
  },
  {
    component: ProductDetailsComponent,
    path: 'details/:id',
  },
  {
    component: OrderComponent,
    path: 'order',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
