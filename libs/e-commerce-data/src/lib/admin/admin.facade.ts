import { Injectable } from '@angular/core';
import { PushRxStoreFacade } from './store/push-rx/push-rx-store.facade';

// Interfaces
// Services
// Store

@Injectable({
  providedIn: 'root',
})
export class AdminFacade {
  // Store facade
  public adminStore$ = this._pushRxStore.store$;

  // Services stream

  constructor(private _pushRxStore: PushRxStoreFacade) {}
  // Actions
}
