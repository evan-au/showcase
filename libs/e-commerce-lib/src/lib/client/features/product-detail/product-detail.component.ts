import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

// Interfaces
import { ProductInterface } from '../../../data/interfaces/product.interface';

// Facade
import { ClientFacade } from '../../../data/client.facade';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<ProductInterface | null>;
  isPending$ = this._facade.isPending$;

  constructor(private _route: ActivatedRoute, private _facade: ClientFacade) {}

  ngOnInit(): void {
    this.product$ = this._route.params.pipe(
      map(({ id }) => id),
      switchMap((id: number) =>
        this._facade.visibleProducts$.pipe(
          map(
            (products) =>
              products.find((product) => product.id == id) as ProductInterface
          )
        )
      )
    );
  }

  resetProductsView() {
    this._facade.updateFilterAll();
  }
}
