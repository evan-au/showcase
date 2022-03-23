import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngneat/effects-ng';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../../backend/interfaces/product.interface';
// import { SupabaseService } from '../../../backend/services/supabase.service';
import { loadAllProducts } from '../../data/store/client-store.actions';
import { ClientStoreRepository } from '../../data/store/client-store.repository';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  // products$: Observable<ProductInterface[] | null> = this._facade.products$;
  // menClothing$: Observable<ProductInterface[] | undefined> =
  //   this._facade.menClothing$;
  // womenClothing$: Observable<ProductInterface[] | undefined> =
  //   this._facade.womenClothing$;
  // jewelery$: Observable<ProductInterface[] | undefined> =
  //   this._facade.jewelery$;
  // electronics$: Observable<ProductInterface[] | undefined> =
  //   this._facade.electronics$;

  // isLoading$: Observable<boolean | null> = this._facade.isLoading$;
  products$!: Observable<ProductInterface[] | null>;
  isPending$!: Observable<boolean>;
  isFailing$!: Observable<boolean>;

  constructor(
    private _clientRepo: ClientStoreRepository,
    private _actions: Actions
  ) {}

  ngOnInit(): void {
    // dispatch(loadAllProducts(), console.log('Dispatching'));
    this._actions.dispatch(loadAllProducts());

    this.isPending$ = this._clientRepo.isPending$;
    this.isFailing$ = this._clientRepo.isFailing$;

    this.products$ = this._clientRepo.allProducts$;
    // this._clientRepo.allProducts$.subscribe((value) =>
    //   console.log('Client repo All products =>', value)
    // );
    // return;
    // this._facade.loadProducts();
    // this.supa.getAllProducts().then((pro) => {
    //   this.products$ = pro;
    // });

    // this.supa.getAllBlogs();

    // this.store.checkActions();
  }
}
