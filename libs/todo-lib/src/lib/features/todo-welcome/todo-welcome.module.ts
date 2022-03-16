import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoWelcomeRoutingModule } from './todo-welcome-routing.module';
import { TodoWelcomeComponent } from './todo-welcome.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoWelcomeComponent],
  imports: [
    CommonModule,
    TodoWelcomeRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class TodoWelcomeModule {}
