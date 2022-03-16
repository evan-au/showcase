import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FilterEnum } from '../../data/enums/filter.enum';
import { TodoInterface } from '../../data/interfaces/todo.interface';
import { TodosRepository } from '../../data/store/todos.repository';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  user$ = this._todoRepo.user$;
  partOfDayName$ = this._todoRepo.partOfDayName$;
  visibleTodos$ = this._todoRepo.visibleTodos$;
  areTodosCompleted$ = this._todoRepo.areTodosCompleted$;
  completedTodos$ = this._todoRepo.completedTodos$;
  activeCount$ = this._todoRepo.activeCount$;
  activeCountText$ = this._todoRepo.activeCountText$;

  constructor(private _todoRepo: TodosRepository) {}

  addTodo(payloadText: TodoInterface['text']) {
    this._todoRepo.addTodo(payloadText);
  }

  saveUpdatedTodo(payload: { id: TodoInterface['id']; updatedTodo: string }) {
    this._todoRepo.saveUpdatedTodo(payload.id, payload.updatedTodo);
  }

  clearCompletedTodos() {
    this._todoRepo.clearCompletedTodos();
  }

  deleteTodo(payloadID: TodoInterface['id']) {
    this._todoRepo.deleteTodo(payloadID);
  }

  toggleTodo(payloadID: TodoInterface['id']) {
    this._todoRepo.toggleTodo(payloadID);
  }

  updateFilter(payloadEnum: FilterEnum) {
    this._todoRepo.updateFilter(payloadEnum);
  }

  toggleSelectAll(payloadBool: boolean) {
    this._todoRepo.toggleSelectAllTodos(payloadBool);
  }
}
