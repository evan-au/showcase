import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TodosAppRepository } from '../../data/store/todos-app.repository';

@Injectable({
  providedIn: 'root',
})
export class UserProvidedNameGuard implements CanActivate {
  constructor(private _repo: TodosAppRepository, private _router: Router) {}
  canActivate() {
    if (this._repo.checkUserProvidedName()) {
      this._router.navigate(['todo-app/todos']);
      return false;
    } else {
      return true;
    }
  }
}
