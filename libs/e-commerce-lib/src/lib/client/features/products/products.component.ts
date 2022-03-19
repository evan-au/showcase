import { Component, OnInit } from '@angular/core';
import { ClientFacade } from '@showcase-ws/e-commerce-data';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$ = this._facade.products$;
  isLoading$: Observable<boolean | null> = this._facade.isLoading$;

  constructor(private _facade: ClientFacade) {}

  ngOnInit(): void {
    this._facade.loadProducts();
  }
}
