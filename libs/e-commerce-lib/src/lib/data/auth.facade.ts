import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
    private _store: AuthStoreRepository
  ) {}

  // Actions
  async signOutAdmin() {
    const { error } = await this._supabaseService.signOut();

    this._store.signOutAdmin(error);
  }

  async signInAdmin(payload: FormGroup) {
    const signInPayload = await this._supabaseService.signIn(
      payload.value.emailSignIn,
      payload.value.passwordSignIn
    );

    this._store.handleAuth(signInPayload);
  }

  async signUpAdmin(payload: FormGroup) {
    const signUpPayload = await this._supabaseService.signUp(
      payload.value.emailSignUp,
      payload.value.passwordSignUp
    );

    this._store.handleAuth(signUpPayload);
  }

  skipWelcomeIntro() {
    this._store.skipWelcomeIntro();
  }
}
