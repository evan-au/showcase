import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FilterEnum } from '../../data/enums/filter.enum';
import { TodoInterface } from '../../data/interfaces/todo.interface';
import { TodosAppRepository } from '../../data/store/todos-app.repository';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  user$ = this._repo.user$;
  partOfDayName$ = this._repo.partOfDayName$;
  filterTodos$ = this._repo.filterTodos$;
  visibleTodos$ = this._repo.visibleTodos$;
  areTodosCompleted$ = this._repo.areTodosCompleted$;
  completedTodos$ = this._repo.completedTodos$;
  activeCount$ = this._repo.activeCount$;
  activeCountText$ = this._repo.activeCountText$;
  todoFormControl$ = this._repo.todoFormControl$;

  constructor(private _repo: TodosAppRepository) {}

  addTodo(payloadText: TodoInterface['text']) {
    this._repo.addTodo(payloadText);
  }

  saveUpdatedTodo(payload: { id: TodoInterface['id']; updatedTodo: string }) {
    this._repo.saveUpdatedTodo(payload.id, payload.updatedTodo);
  }

  clearCompletedTodos() {
    this._repo.clearCompletedTodos();
  }

  deleteTodo(payloadID: TodoInterface['id']) {
    this._repo.deleteTodo(payloadID);
  }

  toggleTodo(payloadID: TodoInterface['id']) {
    this._repo.toggleTodo(payloadID);
  }

  updateFilter(payloadEnum: FilterEnum) {
    this._repo.updateFilter(payloadEnum);
  }

  toggleSelectAll(payloadBool: boolean) {
    this._repo.toggleSelectAllTodos(payloadBool);
  }
}
