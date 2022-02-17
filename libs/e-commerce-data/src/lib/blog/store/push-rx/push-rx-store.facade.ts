import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
// Store

@Injectable({
  providedIn: 'root',
})
export class PushRxStoreFacade {
  // Store stream
  public store$!: Observable<boolean>;

  //   constructor(){}
  // Actions
}
