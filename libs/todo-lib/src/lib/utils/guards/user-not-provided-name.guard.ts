import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TodosAppRepository } from '../../data/store/todos-app.repository';

@Injectable({
  providedIn: 'root',
})
export class UserNotProvidedNameGuard implements CanActivate {
  constructor(private _repo: TodosAppRepository, private _router: Router) {}
  canActivate() {
    if (this._repo.checkUserProvidedName()) {
      return true;
    } else {
      this._router.navigate(['todo-app']);
      return false;
    }
  }
}
