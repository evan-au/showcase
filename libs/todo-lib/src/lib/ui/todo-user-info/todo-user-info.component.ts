import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserInterface } from '../../data/interfaces/user.interface';

@Component({
  selector: 'todo-user-info',
  templateUrl: './todo-user-info.component.html',
  styleUrls: ['./todo-user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoUserInfoComponent {
  @Input() inputUser!: UserInterface | null;
  @Input() inputPartOfDayName!: string | null;
}
