import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SupabaseService } from '../../backend/services/supabase.service';
import { AuthStoreRepository } from './store/auth-store.repository';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  isAdminAuthenticated$ = this._store.isAdminAuthenticated$;
  authError$ = this._store.authError$;
  isAdminAuthenticated!: boolean;

  constructor(
    private _supabaseService: SupabaseService,
    private _store: AuthStoreRepository,
    private _router: Router,
    private _snackbar: MatSnackBar
  ) {
    this.isAdminAuthenticated$.subscribe((status) => {
      this.isAdminAuthenticated = status;
    });
  }

  async signOutAdmin() {
    const { error } = await this._supabaseService.signOut();

    this._store.signOutAdmin(error);

    if (!this.isAdminAuthenticated)
      this._router.navigate(['e-commerce-app/admin']);
  }

  async signInAdmin(payload: FormGroup) {
    const signInPayload = await this._supabaseService.signIn(
      payload.value.emailSignIn,
      payload.value.passwordSignIn
    );

    this._store.signInAdmin(signInPayload);

    if (this.isAdminAuthenticated)
      this._router.navigate(['e-commerce-app/admin/dashboard']);
  }

  async signUpAdmin(payload: FormGroup) {
    const signUpPayload = await this._supabaseService.signUp(
      payload.value.emailSignUp,
      payload.value.passwordSignUp
    );

    this._store.signUpAdmin(signUpPayload);

    if (this.isAdminAuthenticated)
      this._router.navigate(['e-commerce-app/admin/dashboard']);
  }
}
