import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { withProps, select, Store, createState } from '@ngneat/elf';

import {
  addEntities,
  deleteEntities,
  deleteEntitiesByPredicate,
  selectAll,
  selectAllApply,
  updateAllEntities,
  updateEntities,
  upsertEntities,
  withEntities,
} from '@ngneat/elf-entities';
import {
  persistState,
  localStorageStrategy,
  excludeKeys,
} from '@ngneat/elf-persist-state';
import { getPortionOfDay } from '@showcase-ws/utils';
import { map, of, switchMap } from 'rxjs';
import { FilterEnum } from '../enums/filter.enum';

import { TodoInterface } from '../interfaces/todo.interface';
import { UserInterface } from '../interfaces/user.interface';

// interface TodosProps {
//   todos: TodoInterface[];
// }
interface UserProps {
  user: UserInterface | null;
}

interface FilterProps {
  filterTodos: FilterEnum;
}
interface PartOfDayProps {
  partOfDayName: string | null;
}
// interface TodoFormControlProps {
//   todoFormControl: FormControl | null;
// }

const { state, config } = createState(
  withEntities<TodoInterface>(),
  // withProps<TodosProps>({ todos: [] }),
  withProps<UserProps>({ user: null }),
  withProps<FilterProps>({ filterTodos: FilterEnum.active }),
  withProps<PartOfDayProps>({ partOfDayName: getPortionOfDay() })
  // withProps<TodoFormControlProps>({ todoFormControl: null })
);

const store = new Store({ name: 'todos', state, config });

// Persist state in Local storage
persistState(store, {
  key: 'expo-todos-app-store',
  storage: localStorageStrategy,
  source: () => store.pipe(excludeKeys(['partOfDayName', 'filterTodos'])),
});

@Injectable({ providedIn: 'root' })
export class TodosAppRepository {
  private _todosEntities$ = store.pipe(selectAll());

  public filterTodos$ = store.pipe(select((state) => state.filterTodos));
  public user$ = store.pipe(select((state) => state.user));
  public partOfDayName$ = store.pipe(select((state) => state.partOfDayName));

  public todoFormControl$ = of(new FormControl());

  public activeCount$ = this._todosEntities$.pipe(
    map((todos) => todos.filter((todo) => !todo.completed).length)
  );
  public activeCountText$ = this.activeCount$.pipe(
    map((number) => {
      if (number === 0 || number > 1) {
        return 'items left';
      } else {
        return 'item left';
      }
    })
  );

  public areTodosCompleted$ = this._todosEntities$.pipe(
    map((todos) => todos.every((todo) => todo.completed))
  );

  public completedTodos$ = this._todosEntities$.pipe(
    map((todos) => todos.filter((todo) => todo.completed))
  );

  public visibleTodos$ = this.filterTodos$.pipe(
    switchMap((filter) => {
      return store.pipe(
        selectAllApply({
          filterEntity({ completed }) {
            if (filter === FilterEnum.all) return true;
            return filter === FilterEnum.completed ? completed : !completed;
          },
        })
      );
    }),
    map((todos) => todos.slice().reverse())
  );

  public checkUserProvidedName() {
    if (store.getValue().user) {
      return true;
    } else {
      return false;
    }
  }

  public addUser(payloadName: string): void {
    store.update((state) => ({
      ...state,
      user: {
        id: Date.now().toString(),
        name: payloadName,
      },
    }));
  }

  public addTodo(text: TodoInterface['text']) {
    store.update(addEntities({ id: Date.now(), text, completed: false }));
  }

  public saveUpdatedTodo(id: TodoInterface['id'], text: TodoInterface['text']) {
    store.update(upsertEntities({ id, text }));
  }

  public deleteTodo(id: TodoInterface['id']): void {
    store.update(deleteEntities(id));
  }

  public clearCompletedTodos() {
    store.update(deleteEntitiesByPredicate(({ completed }) => completed));
  }

  public toggleTodo(id: TodoInterface['id']) {
    store.update(
      updateEntities(id, (entity) => ({
        ...entity,
        completed: !entity.completed,
      }))
    );
  }

  public toggleSelectAllTodos(payload: boolean) {
    store.update(
      updateAllEntities({
        completed: payload,
      })
    );
  }

  public updateFilter(filterTodos: FilterProps['filterTodos']) {
    store.update((state) => ({
      ...state,
      filterTodos,
    }));
  }
}
