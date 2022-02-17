import { Injectable } from '@angular/core';
import { PushRxStoreFacade } from './store/push-rx/push-rx-store.facade';

// Interfaces
// Services
// Store

@Injectable({
  providedIn: 'root',
})
export class BlogFacade {
  // Store facade
  public blogStore$ = this._pushRxStore.store$;

  // Services stream

  constructor(private _pushRxStore: PushRxStoreFacade) {}
  // Actions
}
