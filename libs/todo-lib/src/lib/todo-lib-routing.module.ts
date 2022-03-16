import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNotProvidedNameGuard } from './utils/guards/user-not-provided-name.guard';
import { UserProvidedNameGuard } from './utils/guards/user-provided-name.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserProvidedNameGuard],
    loadChildren: () =>
      import('./features/todo-welcome/todo-welcome.module').then(
        (m) => m.TodoWelcomeModule
      ),
  },
  {
    path: 'todos',
    canActivate: [UserNotProvidedNameGuard],
    loadChildren: () =>
      import('./features/todo-list/todo-list.module').then(
        (m) => m.TodoListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoLibRoutingModule {}
