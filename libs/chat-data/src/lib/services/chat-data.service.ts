import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatDataService {
  public loadData(): Observable<string[]> {
    return of(['Chat data coming through']).pipe(delay(1000));
  }
}
