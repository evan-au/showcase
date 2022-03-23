import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientFacade } from '../../data/client.facade';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // products$ = this._facade.products$;
  // isLoading$: Observable<boolean | null> = this._facade.isLoading$;

  // constructor(private _facade: ClientFacade) {}

  ngOnInit(): void {
    return;
    // this._facade.loadProducts();
  }
}
