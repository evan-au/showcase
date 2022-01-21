import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicPlayerDataService {
  getData() {
    return of('Music data passing through');
  }
}
