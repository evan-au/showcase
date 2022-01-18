import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetDataService {
  public loadData(): Observable<string[]> {
    return of(['Budget data coming through']).pipe(delay(1000));
  }
}
