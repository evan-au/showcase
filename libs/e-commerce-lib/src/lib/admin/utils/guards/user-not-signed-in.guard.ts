import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthFacade } from '../../data/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class UserNotSignedInGuard implements CanActivate {
  status!: boolean;

  constructor(private _facade: AuthFacade, private _router: Router) {}
  canActivate() {
    return this._facade.isAdminAuthenticated$.pipe(
      map((status) => {
        if (status) {
          this._router.navigate(['e-commerce-app/admin/dashboard']);
          return false;
        }
        return true;
      })
    );
  }
}
