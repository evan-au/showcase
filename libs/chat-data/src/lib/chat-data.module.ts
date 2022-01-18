import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatFacade } from './application/chat.facade';

@NgModule({
  imports: [CommonModule],
  providers: [ChatFacade],
})
export class ChatDataModule {}
