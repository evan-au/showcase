import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { ProductInterface } from '../../../backend/interfaces/product.interface';
import { Actions } from '@ngneat/effects-ng';
import { loadAllProducts } from '../../data/store/client-store.actions';
import { ClientStoreRepository } from '../../data/store/client-store.repository';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<ProductInterface | null>;
  isPending$!: Observable<boolean>;
  // product$!: Observable<ProductInterface | null>;
  // isLoading$: Observable<boolean | null> = this._facade.isLoading$;

  constructor(
    private _route: ActivatedRoute,
    private _actions: Actions,
    private _clientRepo: ClientStoreRepository
  ) {}

  ngOnInit(): void {
    this._actions.dispatch(loadAllProducts());
    this.isPending$ = this._clientRepo.isPending$;

    this.product$ = this._route.params.pipe(
      map(({ id }) => id),
      switchMap((id: number) =>
        this._clientRepo.allProducts$.pipe(
          map(
            (products) =>
              products.find((product) => product.id == id) as ProductInterface
          )
        )
      )
    );
    // this._facade.loadProducts();

    // this.product$ = this._route.params.pipe(
    //   map(({ id }) => id),
    //   switchMap((id) =>
    //     this._facade.products$.pipe(
    //       map(
    //         (products) =>
    //           products?.find((product) => product.id == id) as ProductInterface
    //       )
    //     )
    //   )
    // );
  }
}
