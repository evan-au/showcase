import { Component, OnInit } from '@angular/core';
import { ChatFacade } from '@showcase-ws/chat-data';

@Component({
  selector: 'chat-feat-home',
  templateUrl: './feat-home.component.html',
  styleUrls: ['./feat-home.component.scss'],
})
export class FeatHomeComponent implements OnInit {
  chat$ = this._chatFacade.chat$;

  constructor(private _chatFacade: ChatFacade) {}

  ngOnInit(): void {
    this._chatFacade.loadChat();
  }
}
