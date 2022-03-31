import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthFacade } from '../../../data/auth.facade';
// import { AuthFacade } from '../../data/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class UserSignedInGuard implements CanActivate {
  status!: boolean;

  constructor(private _facade: AuthFacade, private _router: Router) {}
  canActivate() {
    return this._facade.isAdminAuthenticated$.pipe(
      map((status) => {
        if (status) {
          return true;
        }
        this._router.navigate(['e-commerce-app/admin']);
        return false;
      })
    );
  }
}
