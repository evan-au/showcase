import { Component, OnInit } from '@angular/core';
import {
  ECommerceFacade,
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
  isLoading$: Observable<boolean | null> = this._facade.isLoading$;

  constructor(private _facade: ECommerceFacade) {}

  ngOnInit(): void {
    this._facade.loadProducts();
  }
}
