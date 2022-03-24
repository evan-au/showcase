import { Injectable } from '@angular/core';
import { createStore, withProps } from '@ngneat/elf';
import {
  excludeKeys,
  localStorageStrategy,
  persistState,
} from '@ngneat/elf-persist-state';
import {
  withRequestsStatus,
  createRequestsStatusOperator,
  updateRequestStatus,
} from '@ngneat/elf-requests';
import { ApiError } from '@supabase/supabase-js';
import { map } from 'rxjs';
import { AdminUserInterface } from '../../../backend/interfaces/admin-user.interface';

const authStore = createStore(
  { name: 'admin-store' },
  withProps<AdminUserInterface>({
    user: null,
    session: null,
    error: null,
  }),
  withRequestsStatus<'user'>()
);

export const LocalStorageInstance = persistState(authStore, {
  key: 'admin-auth-e-commerce',
  storage: localStorageStrategy,
  source: () => authStore.pipe(excludeKeys(['requestsStatus', 'error'])),
});

@Injectable({ providedIn: 'root' })
export class AuthStoreRepository {
  adminUser$ = authStore.pipe(map((state) => state.user));
  authError$ = authStore.pipe(map((state) => state.error?.message as string));
  isAdminAuthenticated$ = this.adminUser$.pipe(
    map((user) => {
      if (user?.aud === 'authenticated') {
        return true;
      }
      return false;
    })
  );

  trackAuthRequestsStatus = createRequestsStatusOperator(authStore);

  signInAdmin(payload: AdminUserInterface) {
    authStore.update(
      (state) => ({
        ...state,
        user: payload.user,
        session: payload.session,
        error: payload.error,
      }),
      updateRequestStatus('user', 'success')
    );
  }

  signUpAdmin(payload: AdminUserInterface) {
    authStore.update(
      (state) => ({
        ...state,
        user: payload.user,
        session: payload.session,
        error: payload.error,
      }),
      updateRequestStatus('user', 'success')
    );
  }

  signOutAdmin(payload: ApiError | null) {
    authStore.update((state) => ({
      ...state,
      user: null,
      session: null,
      error: payload,
    }));
  }
}
