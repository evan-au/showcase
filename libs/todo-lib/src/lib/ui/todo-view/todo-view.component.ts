import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from '../../data/interfaces/todo.interface';

@Component({
  selector: 'todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
})
export class TodoViewComponent {
  @ViewChildren('editor') editor!: QueryList<ElementRef<HTMLInputElement>>;

  public onHoverGetTodoID!: TodoInterface['id'] | null;
  public editingTodoID!: TodoInterface['id'] | null;
  private _updatedTodo!: string;

  @Input() inputTodos$!: Observable<TodoInterface[]>;

  @Output() outputToggleTodo: EventEmitter<TodoInterface['id']> =
    new EventEmitter();

  @Output() outputDeleteTodo: EventEmitter<TodoInterface['id']> =
    new EventEmitter();
  @Output() outputSaveUpdatedTodo: EventEmitter<{
    id: TodoInterface['id'];
    updatedTodo: string;
  }> = new EventEmitter();

  toggleTodo(payloadID: TodoInterface['id']) {
    this.outputToggleTodo.emit(payloadID);
  }

  deleteTodo(payload: TodoInterface['id']) {
    this.outputDeleteTodo.emit(payload);
  }

  saveUpdatedTodo(payloadID: TodoInterface['id']) {
    this.outputSaveUpdatedTodo.emit({
      id: payloadID,
      updatedTodo: this._updatedTodo,
    });
    this.editingTodoID = null;
  }

  triggerEditMode(payloadID: TodoInterface['id'], todoIndex: number) {
    setTimeout(() => {
      this.editor.toArray()[todoIndex].nativeElement.focus();
    }, 100);
    this.editingTodoID = payloadID;
  }

  dismissEditor() {
    if (this.editingTodoID) {
      this.editingTodoID = null;
    }
  }

  editTodoText(event: Event) {
    this._updatedTodo = (event.target as HTMLInputElement).value;
  }

  removeLineThru(todoIndex: number, isCompleted: TodoInterface['completed']) {
    if (isCompleted) {
      this.editor
        .toArray()
        [todoIndex].nativeElement.classList.remove('line-through');
    }
  }
  addLineThru(todoIndex: number, isCompleted: TodoInterface['completed']) {
    if (isCompleted) {
      this.editor
        .toArray()
        [todoIndex].nativeElement.classList.add('line-through');
    }
  }

  showActionButtons(payloadID: TodoInterface['id']) {
    this.onHoverGetTodoID = payloadID;
  }

  hideActionButtons() {
    this.onHoverGetTodoID = null;
  }
}
