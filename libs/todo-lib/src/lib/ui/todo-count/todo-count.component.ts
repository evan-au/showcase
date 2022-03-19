import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FilterEnum } from '../../data/enums/filter.enum';
import { TodoInterface } from '../../data/interfaces/todo.interface';

@Component({
  selector: 'todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCountComponent {
  @Input() inputActiveCount!: number | null;
  @Input() inputActiveCountText!: string | null;
  @Input() inputCompletedTodos!: TodoInterface[] | null;
  @Input() inputAreTodosCompleted!: boolean | null;
  @Input() inputFilterTodos!: FilterEnum | null;

  filterEnum = FilterEnum;

  @Output() outputClearCompletedTodos = new EventEmitter();

  clearCompletedTodos() {
    this.outputClearCompletedTodos.emit();
  }
}
