import { Injectable } from '@angular/core';
import { map, Observable, of, share, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  public time$!: Observable<number>;
  public date$!: Observable<Date>;

  public initCurrentTime() {
    this.time$ = timer(0, 1000).pipe(
      map(() => new Date().getTime()),
      share()
    );
  }
  public initCurrentDate() {
    this.date$ = of(new Date()).pipe(share());
  }
}
