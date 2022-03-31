import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';

// Interfaces
import { ProductInterface } from '../../../data/interfaces/product.interface';

// Facade
import { AdminFacade } from '../../../data/admin.facade';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  product$!: Observable<ProductInterface | null>;
  isPending$ = this._facade.isPending$;

  constructor(private _route: ActivatedRoute, private _facade: AdminFacade) {}

  ngOnInit(): void {
    this.product$ = this._route.params.pipe(
      map(({ id }) => id),
      switchMap((id: number) =>
        this._facade.allProducts$.pipe(
          map(
            (products) =>
              products.find((product) => product.id == id) as ProductInterface
          )
        )
      )
    );
  }
}
