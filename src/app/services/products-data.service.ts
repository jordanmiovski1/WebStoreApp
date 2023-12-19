import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product';
import { ProductList } from '../models/product-list';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  constructor(private apollo: Apollo) {}

  getProductsPaginated(
    name: string | null,
    sortAsc: boolean
  ): Observable<Product[]> {
    const nameFilter = name !== null ? `{ contains: "${name}" }` : 'null';
    const sorting = sortAsc ? 'ASC' : 'DESC';

    return this.apollo
      .watchQuery<{ products: ProductList }>({
        query: gql`
          query products {
            products(options: { skip: 0, take: 10, filter: { name: ${nameFilter} }, sort: { name: ${sorting} } }) {
              items {
                id
                name
                featuredAsset {
                  name
                  source
                }
                description
                assets {
                  source
                }
                variants {
                  name
                  price
                }
              }
              totalItems
            }
          }
        `,
      })
      .valueChanges.pipe(
        map((apolloResult) => {
          return [...apolloResult.data.products.items];
        })
      );
  }

  getProduct(id: number): Observable<Product> {
    return this.apollo
      .watchQuery<{ product: Product }>({
        query: gql`
          query product {
            product(id: ${id}) {
              id
              name
              featuredAsset {
                name
                source
              }
              description
              assets {
                source
              }
              variants {
                name
                price
              }
            }
          }
        `,
      })
      .valueChanges.pipe(
        map((apolloResult) => {
          return apolloResult.data.product;
        })
      );
  }
}
