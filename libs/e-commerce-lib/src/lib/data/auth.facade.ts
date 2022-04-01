import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// BAAS - Supabase
import { ApiError, User } from '@supabase/supabase-js';

// Components
import { MatSnackBar } from '@angular/material/snack-bar';
import { UiAuthSnackbarComponent } from '../admin/ui/ui-auth-snackbar/ui-auth-snackbar.component';

// Services
import { SupabaseService } from './services/supabase.service';

// Store
import { AuthStoreRepository } from './store/auth/auth-store.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  // Streams
  isAdminNew$ = this._store.isAdminNew$;
  isAdminAuthenticated$ = this._store.isAdminAuthenticated$;
  authError$ = this._store.authError$;

  constructor(
    private _supabaseService: SupabaseService,
    private _store: AuthStoreRepository,
    private _router: Router,
    private _snackbar: MatSnackBar
  ) {}

  // Actions
  async signOutAdmin() {
    const { error } = await this._supabaseService.signOut();

    this._store.signOutAdmin(error);

    this._router.navigate(['e-commerce-app/admin']);
    this._handleError(error);
  }

  async signInAdmin(payload: FormGroup) {
    const signInPayload = await this._supabaseService.signIn(
      payload.value.emailSignIn,
      payload.value.passwordSignIn
    );

    this._store.handleAuth(signInPayload);

    this._handleRedirect(signInPayload.user);
    this._handleError(signInPayload.error);
  }

  async signUpAdmin(payload: FormGroup) {
    const signUpPayload = await this._supabaseService.signUp(
      payload.value.emailSignUp,
      payload.value.passwordSignUp
    );

    this._store.handleAuth(signUpPayload);

    this._handleRedirect(signUpPayload.user);
    this._handleError(signUpPayload.error);
  }

  skipWelcomeIntro() {
    this._store.skipWelcomeIntro();
  }

  private _handleRedirect(payload: User | null) {
    if (payload?.aud === 'authenticated')
      this._router.navigate(['e-commerce-app/admin/dashboard']);
  }

  private _handleError(payload: ApiError | null) {
    if (payload) {
      this._snackbar.openFromComponent(UiAuthSnackbarComponent, {
        panelClass: 'e-commerce-snackbar',
      });
    } else {
      this._snackbar.dismiss();
    }
  }
}
