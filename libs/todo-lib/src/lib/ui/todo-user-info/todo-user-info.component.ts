import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../data/interfaces/user.interface';

@Component({
  selector: 'todo-user-info',
  templateUrl: './todo-user-info.component.html',
  styleUrls: ['./todo-user-info.component.scss'],
})
export class TodoUserInfoComponent {
  @Input() inputUser$!: Observable<UserInterface | null>;
  @Input() inputPartOfDayName$!: Observable<string | null>;
}
