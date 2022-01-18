import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, distinctUntilChanged } from 'rxjs';

class ChatState {
  chat: string[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class ChatStoreService {
  private _state = new ChatState();
  private _chatStore = new BehaviorSubject<ChatState>(this._state);
  private _chatState$: Observable<ChatState> = this._chatStore.asObservable();

  public storeChat$ = this._chatState$.pipe(
    map((state) => state.chat),
    distinctUntilChanged()
  );

  public saveChat(chat: string[]) {
    this._chatStore.next((this._state = { ...this._state, chat }));
  }
}
