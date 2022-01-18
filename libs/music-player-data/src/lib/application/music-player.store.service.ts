import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, distinctUntilChanged } from 'rxjs';

class PlayerState {
  music: string[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class MusicPlayerStoreService {
  private _state = new PlayerState();
  private _playerStore = new BehaviorSubject<PlayerState>(this._state);
  private _playerState$: Observable<PlayerState> =
    this._playerStore.asObservable();

  public storeMusic$ = this._playerState$.pipe(
    map((state) => state.music),
    distinctUntilChanged()
  );

  public saveMusic(music: string[]) {
    this._playerStore.next((this._state = { ...this._state, music }));
  }
}
