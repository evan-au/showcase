import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FilterEnum } from '../../data/enums/filter.enum';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFilterComponent {
  @Input() inputFilterTodos!: FilterEnum | null;

  @Output() outputUpdateFilter: EventEmitter<FilterEnum> = new EventEmitter();

  filterEnum = FilterEnum;

  updateFilter(payloadEnum: FilterEnum) {
    this.outputUpdateFilter.emit(payloadEnum);
  }
}
