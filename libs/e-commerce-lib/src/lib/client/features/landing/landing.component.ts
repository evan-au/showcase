import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '@showcase-ws/e-commerce-data';
import { ClientFacade } from '@showcase-ws/e-commerce-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  products$: Observable<ProductInterface[] | null> = this._facade.products$;
  menClothing$: Observable<ProductInterface[] | undefined> =
    this._facade.menClothing$;
  womenClothing$: Observable<ProductInterface[] | undefined> =
    this._facade.womenClothing$;
  jewelery$: Observable<ProductInterface[] | undefined> =
    this._facade.jewelery$;
  electronics$: Observable<ProductInterface[] | undefined> =
    this._facade.electronics$;

  isLoading$: Observable<boolean | null> = this._facade.isLoading$;

  constructor(private _facade: ClientFacade) {}

  ngOnInit(): void {
    this._facade.loadProducts();
  }
}
