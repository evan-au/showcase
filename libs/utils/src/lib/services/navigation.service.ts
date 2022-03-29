import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

@UntilDestroy({ checkProperties: true })
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
    // const lastElement = this._historySubject.getValue().pop() || '';

    // lastElement.length > 0
    //   ? this._location.back()
    //   : this._router.navigateByUrl('/');

    this._location.back();
  }
}
