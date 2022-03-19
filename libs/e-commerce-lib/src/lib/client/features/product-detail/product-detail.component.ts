import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { ClientFacade } from '../../data/client.facade';
import { ProductInterface } from '../../data/interfaces/product.interface';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<ProductInterface | null>;
  isLoading$: Observable<boolean | null> = this._facade.isLoading$;

  constructor(private _route: ActivatedRoute, private _facade: ClientFacade) {}

  ngOnInit(): void {
    this._facade.loadProducts();

    this.product$ = this._route.params.pipe(
      map(({ id }) => id),
      switchMap((id) =>
        this._facade.products$.pipe(
          map(
            (products) =>
              products?.find((product) => product.id == id) as ProductInterface
          )
        )
      )
    );
  }
}
