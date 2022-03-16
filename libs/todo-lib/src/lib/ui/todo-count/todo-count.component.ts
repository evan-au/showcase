import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.scss'],
})
export class TodoCountComponent {
  @Input() inputActiveCount$!: Observable<number | null>;
  @Input() inputActiveCountText$!: Observable<string | null>;
}
