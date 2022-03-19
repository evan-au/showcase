import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoWelcomeRoutingModule } from './todo-welcome-routing.module';
import { TodoWelcomeComponent } from './todo-welcome.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@showcase-ws/shared-ui';

@NgModule({
  declarations: [TodoWelcomeComponent],
  imports: [
    CommonModule,
    TodoWelcomeRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedUiModule,
  ],
})
export class TodoWelcomeModule {}
