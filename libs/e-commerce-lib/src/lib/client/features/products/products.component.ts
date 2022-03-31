import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// Interfaces
import { BrandInterface } from '../../../data/interfaces/brand.interface';
import { CategoryInterface } from '../../../data/interfaces/category.interface';

// Facade
import { ClientFacade } from '../../../data/client.facade';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$ = this._facade.visibleProducts$;
  brands$ = this._facade.brands$;
  categories$ = this._facade.categories$;
  isPending$ = this._facade.isPending$;

  constructor(private _facade: ClientFacade) {}

  ngOnInit(): void {
    this._facade.loadAllProducts();
    this._facade.loadAllBrands();
    this._facade.loadAllCategories();
  }

  updateFilterBrands(payload: BrandInterface['name']) {
    this._facade.updateFilterBrands(payload);
  }

  updateFilterCategories(payload: CategoryInterface['name']) {
    this._facade.updateFilterCategories(payload);
  }

  updateFilterAll() {
    this._facade.updateFilterAll();
  }
}
