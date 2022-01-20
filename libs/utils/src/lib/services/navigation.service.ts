import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _historySubject = new BehaviorSubject<string[]>([]);

  constructor(private _location: Location, private _router: Router) {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._historySubject.next([event.urlAfterRedirects]);
      }
    });
  }

  back(): void {
    const lastElement = this._historySubject.getValue().pop() || '';

    lastElement.length > 0
      ? this._location.back()
      : this._router.navigateByUrl('/');
  }
}
