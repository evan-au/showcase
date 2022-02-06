import { Component, OnInit } from '@angular/core';
import {
  ECommerceFacade,
  ErrorInterface,
  ProductInterface,
} from '@showcase-ws/e-commerce-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  products$: Observable<ProductInterface[] | null> = this._facade.products$;
  error$: Observable<ErrorInterface | null> = this._facade.error$;

  constructor(private _facade: ECommerceFacade) {}

  ngOnInit(): void {
    this._facade.loadProducts();
  }
}
