import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoWelcomeComponent } from './todo-welcome.component';

const routes: Routes = [
  {
    path: '',
    component: TodoWelcomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoWelcomeRoutingModule {}
