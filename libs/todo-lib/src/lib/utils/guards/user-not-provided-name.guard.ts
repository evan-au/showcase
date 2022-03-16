import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TodosRepository } from '../../data/store/todos.repository';

@Injectable({
  providedIn: 'root',
})
export class UserNotProvidedNameGuard implements CanActivate {
  constructor(private _todoRepo: TodosRepository, private _router: Router) {}
  canActivate() {
    if (this._todoRepo.checkUserProvidedName()) {
      return true;
    } else {
      this._router.navigate(['todo-app']);
      return false;
    }
  }
}
