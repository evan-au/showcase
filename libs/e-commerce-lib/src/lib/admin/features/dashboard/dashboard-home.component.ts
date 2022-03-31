import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// Interfaces
import { AddProductInterface } from '../../../data/interfaces/add-product.interface';

// Facades
import { AdminFacade } from '../../../data/admin.facade';
import { AuthFacade } from '../../../data/auth.facade';

@Component({
  selector: 'dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHomeComponent implements OnInit {
  products$ = this._adminFacade.allProducts$;
  brands$ = this._adminFacade.allBrands$;
  categories$ = this._adminFacade.allCategories$;
  isPending$ = this._adminFacade.isPending$;
  isAdminNew$ = this._authFacade.isAdminNew$;

  constructor(
    private _authFacade: AuthFacade,
    private _adminFacade: AdminFacade
  ) {}

  ngOnInit(): void {
    this._adminFacade.loadAllProducts();
    this._adminFacade.loadAllBrands();
    this._adminFacade.loadAllCategories();
  }

  skipWelcomeIntro() {
    this._authFacade.skipWelcomeIntro();
  }

  addProduct(payload: AddProductInterface) {
    this._adminFacade.addProduct(payload);
  }
}
