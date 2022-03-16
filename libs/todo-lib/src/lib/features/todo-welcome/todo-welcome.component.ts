import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosRepository } from '../../data/store/todos.repository';

@Component({
  selector: 'todo-welcome',
  templateUrl: './todo-welcome.component.html',
  styleUrls: ['./todo-welcome.component.scss'],
})
export class TodoWelcomeComponent {
  user$ = this._todoRepo.user$;
  userName = new FormControl('Sam', [Validators.required]);
  constructor(
    private _todoRepo: TodosRepository,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}
  addUser() {
    this._todoRepo.addUser(this.userName.value);
    this._router.navigate(['todos'], { relativeTo: this._route });
  }
}
