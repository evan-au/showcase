import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TodoInterface } from '../../data/interfaces/todo.interface';

@Component({
  selector: 'todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoViewComponent implements OnInit {
  @ViewChildren('editor') editor!: QueryList<ElementRef<HTMLInputElement>>;

  public hoveringTodoID!: TodoInterface['id'] | null;
  public editingTodoID!: TodoInterface['id'] | null;
  private _updatedTodo!: string;

  @Input() inputTodos!: TodoInterface[] | null;

  @Output() outputToggleTodo: EventEmitter<TodoInterface['id']> =
    new EventEmitter();

  @Output() outputDeleteTodo: EventEmitter<TodoInterface['id']> =
    new EventEmitter();
  @Output() outputSaveUpdatedTodo: EventEmitter<{
    id: TodoInterface['id'];
    updatedTodo: string;
  }> = new EventEmitter();

  isViewOnMobile!: boolean;

  // constructor(private _breakpoint: BreakpointObserver) {}
  ngOnInit(): void {
    return;
    // this._breakpoint
    //   .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
    //   .subscribe((state) => {
    //     if (state.matches) {
    //       this.isOnMobile = state.matches;
    //     }
    //   });
  }

  toggleTodo(payloadID: TodoInterface['id']) {
    if (this.editingTodoID) {
      this.editingTodoID = null;
    }
    this.outputToggleTodo.emit(payloadID);
  }

  deleteTodo(payload: TodoInterface['id']) {
    this.outputDeleteTodo.emit(payload);
  }

  saveUpdatedTodo(
    payloadID: TodoInterface['id'],
    isCompleted: TodoInterface['completed'],
    todoIndex: number
  ) {
    if (this._updatedTodo) {
      this.outputSaveUpdatedTodo.emit({
        id: payloadID,
        updatedTodo: this._updatedTodo,
      });
    }

    if (isCompleted) {
      this.editor
        .toArray()
        [todoIndex].nativeElement.classList.add('line-through');
    }

    this.editingTodoID = null;
  }

  triggerEditMode(payloadID: TodoInterface['id'], todoIndex: number) {
    setTimeout(() => {
      this.editor.toArray()[todoIndex].nativeElement.focus();
    }, 0);
    this.editingTodoID = payloadID;

    this.hideActionButtons();
  }

  dismissEditor() {
    if (this.editingTodoID) {
      this.editingTodoID = null;
    }
  }

  editTodoText(event: Event) {
    this._updatedTodo = (event.target as HTMLInputElement).value;
  }

  showActionButtons(payloadID: TodoInterface['id']) {
    this.hoveringTodoID = payloadID;
  }

  hideActionButtons() {
    this.hoveringTodoID = null;
  }

  isBreakpointMatching(payload: boolean) {
    // if (payload) {
    this.isViewOnMobile = payload;

    // } else {
    //   this.isOnMobile = false;
    // }
  }
}
