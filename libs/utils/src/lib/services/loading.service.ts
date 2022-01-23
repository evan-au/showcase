import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  concatMap,
  finalize,
  Observable,
  of,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loadingSubject = new BehaviorSubject(false);

  public isLoading$ = this._loadingSubject.asObservable();

  // constructor() { }

  public loadUntilCompleted<T>(observable$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.loadingOn()),
      concatMap(() => observable$),
      finalize(() => this.loadingOff())
    );
  }

  public loadingOn() {
    this._loadingSubject.next(true);
  }

  public loadingOff() {
    this._loadingSubject.next(false);
  }
}
