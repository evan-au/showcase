import { Component, OnInit } from '@angular/core';
import { ECommerceFacade } from '@showcase-ws/e-commerce-data';

@Component({
  selector: 'e-commerce-feat-home',
  templateUrl: './feat-home.component.html',
  styleUrls: ['./feat-home.component.scss'],
})
export class FeatHomeComponent implements OnInit {
  products$ = this._eCommerceFacade.products$;

  constructor(private _eCommerceFacade: ECommerceFacade) {}

  ngOnInit(): void {
    this._eCommerceFacade.loadProducts();
  }
}
