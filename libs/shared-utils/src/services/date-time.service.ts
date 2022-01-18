import { Injectable } from '@angular/core';
import { map, Observable, of, share, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  public time$ = this._initCurrentTime();
  public date$ = this._initCurrentDate();

  private _initCurrentTime(): Observable<number> {
    return timer(0, 1000).pipe(
      map(() => new Date().getTime()),
      share()
    );
  }
  private _initCurrentDate(): Observable<Date> {
    return of(new Date()).pipe(share());
  }
}
