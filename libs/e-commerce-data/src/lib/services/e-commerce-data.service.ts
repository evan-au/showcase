import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ECommerceDataService {
  public loadData(): Observable<string[]> {
    return of(['Products data coming through']).pipe(delay(1000));
  }
}
