import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngneat/effects-ng';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../../backend/interfaces/product.interface';
import { loadAllProducts } from '../../data/store/client-store.actions';
import { ClientStoreRepository } from '../../data/store/client-store.repository';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<ProductInterface[] | null>;
  isPending$!: Observable<boolean>;
  isFailing$!: Observable<boolean>;

  constructor(
    private _clientRepo: ClientStoreRepository,
    private _actions: Actions
  ) {}

  ngOnInit(): void {
    this._actions.dispatch(loadAllProducts());

    this.isPending$ = this._clientRepo.isPending$;
    this.isFailing$ = this._clientRepo.isFailing$;

    this.products$ = this._clientRepo.allProducts$;
  }
}
