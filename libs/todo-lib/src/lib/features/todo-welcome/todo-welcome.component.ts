import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosAppRepository } from '../../data/store/todos-app.repository';

@Component({
  selector: 'todo-welcome',
  templateUrl: './todo-welcome.component.html',
  styleUrls: ['./todo-welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoWelcomeComponent {
  user$ = this._repo.user$;
  userName = new FormControl('', [Validators.required]);
  constructor(
    private _repo: TodosAppRepository,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}
  addUser() {
    this._repo.addUser(this.userName.value);
    this._router.navigate(['todos'], { relativeTo: this._route });
  }
}
