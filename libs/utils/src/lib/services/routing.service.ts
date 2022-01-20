import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Observable, map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  private _routeState = new Subject<string>();
  public routeUrl$: Observable<string> = this._routeState.asObservable();

  constructor(private _router: Router) {
    this._retrieveUrl();
  }

  private _retrieveUrl(): void {
    this._router.events
      .pipe(
        map((data) => {
          if (data instanceof RoutesRecognized) {
            const transformedUrl =
              data.state.url.slice(1).charAt(0).toUpperCase() +
              data.state.url.slice(2).replace(/[^0-9a-zA-Z]/g, ' ');

            this._routeState.next(
              transformedUrl === '' ? 'Intro' : transformedUrl
            );
          }
        })
      )
      .subscribe();
  }
}
