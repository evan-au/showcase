import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs';

// Components - Angular material snackbar
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedSnackbarComponent } from '../../../shared/ui/shared-snackbar/shared-snackbar.component';

// BAAS - Supabase
import { ApiError } from '@supabase/supabase-js';

// Elf state management
import { createStore, withProps } from '@ngneat/elf';
import {
  excludeKeys,
  localStorageStrategy,
  persistState,
} from '@ngneat/elf-persist-state';

// Interfaces
import { AdminUserInterface } from '../../interfaces/admin-user.interface';

const authStore = createStore(
  { name: 'auth-store' },
  withProps<AdminUserInterface>({
    data: null,
    user: null,
    session: null,
    error: null,
  })
);

export const LocalStorageInstance = persistState(authStore, {
  key: 'expo-e-commerce-auth-store',
  storage: localStorageStrategy,
  source: () => authStore.pipe(excludeKeys(['error'])),
});

@Injectable({ providedIn: 'root' })
export class AuthStoreRepository {
  // Streams
  adminUser$ = authStore.pipe(
    map((state) => state.user),
    distinctUntilChanged()
  );
  authError$ = authStore.pipe(
    map((state) => state.error),
    distinctUntilChanged()
  );
  isAdminAuthenticated$ = authStore.pipe(
    map((state) => {
      if (state.user?.aud === 'authenticated') {
        return true;
      }
      return false;
    }),
    distinctUntilChanged()
  );
  isAdminNew$ = authStore.pipe(
    map((authData) => {
      if (!authData.data) {
        return true;
      }
      return false;
    }),
    distinctUntilChanged()
  );

  constructor(private _router: Router, private _snackbar: MatSnackBar) {}

  // Actions
  handleAuth(payload: AdminUserInterface) {
    authStore.update((state) => ({
      ...state,
      data: payload.data,
      user: payload.user,
      session: payload.session,
      error: payload.error,
    }));

    this._handleRedirect(payload);
    this._handleError(payload.error);
  }

  signOutAdmin(payload: ApiError | null) {
    authStore.update((state) => ({
      ...state,
      user: null,
      session: null,
      error: payload,
    }));

    this._router.navigate(['e-commerce-app/admin']);
    this._handleError(payload);
  }

  skipWelcomeIntro() {
    authStore.update((state) => ({
      ...state,
      data: state.session,
    }));
  }

  private _handleRedirect(payload: AdminUserInterface) {
    if (payload.user?.aud === 'authenticated')
      this._router.navigate(['e-commerce-app/admin/dashboard']);
  }

  private _handleError(payload: ApiError | null) {
    if (payload) {
      this._snackbar.openFromComponent(SharedSnackbarComponent, {
        panelClass: 'e-commerce-error-snackbar',
      });
    } else {
      this._snackbar.dismiss();
    }
  }
}
