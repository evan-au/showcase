import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ErrorInterface,
  ProductInterface,
  ProductsActions,
  ProductsSelectors,
} from '@showcase-ws/e-commerce-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  products$!: Observable<ProductInterface[]>;
  error$!: Observable<ErrorInterface | null>;

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(ProductsActions.initAction());
    this.products$ = this._store.select(ProductsSelectors.getAllProducts);
    this.error$ = this._store.select(ProductsSelectors.getProductsError);
  }
}
