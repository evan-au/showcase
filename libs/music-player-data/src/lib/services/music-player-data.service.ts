import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicPlayerDataService {
  public loadData(): Observable<string[]> {
    return of(['Music player data coming through']).pipe(delay(1000));
  }
}
