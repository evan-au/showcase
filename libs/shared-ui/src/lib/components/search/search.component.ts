import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'shared-ui-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() inputSearchField$!: Observable<FormControl>;
  @Output() outputClearQuery: EventEmitter<void> = new EventEmitter();

  public clearQuery() {
    this.outputClearQuery.emit();
    this.inputSearchField$.subscribe((field) => field.setValue(''));
  }
}
