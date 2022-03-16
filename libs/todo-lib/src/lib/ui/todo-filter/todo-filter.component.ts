import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterEnum } from '../../data/enums/filter.enum';
import { TodoInterface } from '../../data/interfaces/todo.interface';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
})
export class TodoFilterComponent {
  filterEnum = FilterEnum;

  @Input() inputCompletedTodos$!: Observable<TodoInterface[] | null>;

  @Output() outputUpdateFilter: EventEmitter<FilterEnum> = new EventEmitter();
  @Output() outputClearCompletedTodos = new EventEmitter();

  updateFilter(payloadEnum: FilterEnum) {
    this.outputUpdateFilter.emit(payloadEnum);
  }

  clearCompletedTodos() {
    this.outputClearCompletedTodos.emit();
  }
}
