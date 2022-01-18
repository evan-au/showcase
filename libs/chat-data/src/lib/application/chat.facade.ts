import { Injectable } from '@angular/core';
import { ChatDataService } from '../services/chat-data.service';
import { ChatStoreService } from './chat.store.service';

@Injectable({
  providedIn: 'any',
})
export class ChatFacade {
  public chat$ = this._chatStoreService.storeChat$;

  constructor(
    private _chatDataService: ChatDataService,
    private _chatStoreService: ChatStoreService
  ) {}

  public loadChat() {
    this._chatDataService.loadData().subscribe((chat) => {
      this._chatStoreService.saveChat(chat);
    });
  }
}
