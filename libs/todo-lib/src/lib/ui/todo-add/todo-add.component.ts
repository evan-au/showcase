import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoInterface } from '../../data/interfaces/todo.interface';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddComponent {
  @ViewChild('addInput', { static: true })
  addInput!: ElementRef<HTMLInputElement>;

  @Input() inputVisibleTodos!: TodoInterface[] | null;
  @Input() inputAreTodosCompleted!: boolean | null;
  @Input() inputTodoFormControl!: FormControl | null;

  @Output() outputToggleSelectAll: EventEmitter<boolean> = new EventEmitter();
  @Output() outputAddtodo: EventEmitter<TodoInterface['text']> =
    new EventEmitter();

  toggleSelectAll(event: Event) {
    const target = event.target as HTMLInputElement;

    this.outputToggleSelectAll.emit(target.checked);
  }

  addTodo() {
    if (
      this.inputTodoFormControl?.value !== null &&
      this.inputTodoFormControl?.value !== ' '
    ) {
      this.outputAddtodo.emit(this.inputTodoFormControl?.value);
      this.inputTodoFormControl?.reset();
    }
  }
}
