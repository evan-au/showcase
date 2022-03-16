import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TodoInterface } from '../../data/interfaces/todo.interface';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent {
  @Input() inputVisibleTodos$!: Observable<TodoInterface[] | null>;
  @Input() inputAreTodosCompleted$!: Observable<boolean | null>;

  @Output() outputToggleSelectAll: EventEmitter<boolean> = new EventEmitter();
  @Output() outputAddtodo: EventEmitter<TodoInterface['text']> =
    new EventEmitter();

  todoFormControl = new FormControl();

  toggleSelectAll(event: Event) {
    const target = event.target as HTMLInputElement;

    this.outputToggleSelectAll.emit(target.checked);
    // this._todoRepo.toggleSelectAllTodos(target.checked);
  }

  addTodo() {
    if (
      this.todoFormControl.value !== null &&
      this.todoFormControl.value !== ' '
    ) {
      this.outputAddtodo.emit(this.todoFormControl.value);
      // this._todoRepo.addTodo(this.todoFormControl.value);
      this.todoFormControl.reset();
    }
  }
}
