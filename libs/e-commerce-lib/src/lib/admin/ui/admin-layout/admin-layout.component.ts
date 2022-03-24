import { Component } from '@angular/core';
import { AuthFacade } from '../../data/auth.facade';

@Component({
  selector: 'admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  isAdminAuthenticated$ = this._facade.isAdminAuthenticated$;

  constructor(private _facade: AuthFacade) {}

  signOut() {
    this._facade.signOutAdmin();
  }
}
