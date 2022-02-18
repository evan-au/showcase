import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientFacade, ProductInterface } from '@showcase-ws/e-commerce-data';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent implements OnInit {
  product$!: Observable<ProductInterface | undefined>;
  isLoading$: Observable<boolean | null> = this._facade.isLoading$;

  constructor(private _route: ActivatedRoute, private _facade: ClientFacade) {}

  ngOnInit(): void {
    this._facade.loadProducts();

    this.product$ = this._route.params.pipe(
      map(({ id }) => id),
      switchMap((id) =>
        this._facade.products$.pipe(
          map((products) => products?.find((product) => product.id == id))
        )
      )
    );
  }
}
