import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs';

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

  // Actions
  handleAuth(payload: AdminUserInterface) {
    authStore.update((state) => ({
      ...state,
      data: payload.data,
      user: payload.user,
      session: payload.session,
      error: payload.error,
    }));
  }

  signOutAdmin(payload: ApiError | null) {
    authStore.update((state) => ({
      ...state,
      user: null,
      session: null,
      error: payload,
    }));
  }

  skipWelcomeIntro() {
    authStore.update((state) => ({
      ...state,
      data: state.session,
    }));
  }
}
