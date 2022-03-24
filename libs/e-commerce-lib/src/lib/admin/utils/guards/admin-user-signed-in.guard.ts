import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AuthFacade } from '../../data/auth.facade';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class AdminUserSignedInGuard implements CanActivate {
  status!: boolean;

  constructor(private _facade: AuthFacade, private _router: Router) {}
  canActivate() {
    this._facade.isAdminAuthenticated$.subscribe(
      (status) => (this.status = status)
    );

    if (this.status) {
      this._router.navigate(['e-commerce-app/admin/dashboard']);
      return false;
    } else {
      return true;
    }
  }
}
