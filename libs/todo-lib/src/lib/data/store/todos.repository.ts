import { Injectable } from '@angular/core';
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
import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';
import { getPortionOfDay } from '@showcase-ws/utils';
import { map, switchMap } from 'rxjs';
import { FilterEnum } from '../enums/filter.enum';
import { StatusEnum } from '../enums/status.enum';

import { TodoInterface } from '../interfaces/todo.interface';
import { UserInterface } from '../interfaces/user.interface';

interface TodosProps {
  todos: TodoInterface[];
  error: string | null;
  status: StatusEnum;
}
interface UserProps {
  user: UserInterface | null;
}

interface FilterProps {
  filterTodos: FilterEnum;
}
interface PartOfDayProps {
  partOfDayName: string | null;
}

const { state, config } = createState(
  withEntities<TodoInterface>(),
  withProps<TodosProps>({
    todos: [],
    error: null,
    status: StatusEnum.pending,
  }),
  withProps<UserProps>({ user: null }),
  withProps<FilterProps>({ filterTodos: FilterEnum.all }),
  withProps<PartOfDayProps>({ partOfDayName: getPortionOfDay() })
);

const todosStore = new Store({ name: 'todos', state, config });

// Persist state in Local storage
persistState(todosStore, {
  key: 'todos',
  storage: localStorageStrategy,
});

@Injectable({ providedIn: 'root' })
export class TodosRepository {
  private _todosEntities$ = todosStore.pipe(selectAll());

  public filterTodos$ = todosStore.pipe(select((state) => state.filterTodos));
  public user$ = todosStore.pipe(select((state) => state.user));
  public partOfDayName$ = todosStore.pipe(
    select((state) => state.partOfDayName)
  );

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
      return todosStore.pipe(
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
    if (todosStore.getValue().user) {
      return true;
    } else {
      return false;
    }
  }

  public addUser(payloadName: string): void {
    todosStore.update((state) => ({
      ...state,
      user: {
        id: Date.now().toString(),
        name: payloadName,
        avatarImage: `https://ui-avatars.com/api/?rounded=true&background=61a6fa&format=svg&name=${payloadName}`,
      },
    }));
  }

  public addTodo(text: TodoInterface['text']) {
    todosStore.update(addEntities({ id: Date.now(), text, completed: false }));
  }

  public saveUpdatedTodo(id: TodoInterface['id'], text: TodoInterface['text']) {
    todosStore.update(upsertEntities({ id, text }));
  }

  public deleteTodo(id: TodoInterface['id']): void {
    todosStore.update(deleteEntities(id));
  }

  public clearCompletedTodos() {
    todosStore.update(deleteEntitiesByPredicate(({ completed }) => completed));
  }

  public toggleTodo(id: TodoInterface['id']) {
    todosStore.update(
      updateEntities(id, (entity) => ({
        ...entity,
        completed: !entity.completed,
      }))
    );
  }

  public toggleSelectAllTodos(payload: boolean) {
    todosStore.update(
      updateAllEntities({
        completed: payload,
      })
    );
  }

  public updateFilter(filterTodos: FilterProps['filterTodos']) {
    todosStore.update((state) => ({
      ...state,
      filterTodos,
    }));
  }

  // public loadTodos(): void {
  //   todosStore.update((state) => ({
  //     ...state,
  //     status: StatusEnum.loading,
  //   }));
  // }
  // public loadSuccessTodos(payload: TodoInterface[]): void {
  //   todosStore.update((state) => ({
  //     ...state,
  //     todos: payload,
  //     error: null,
  //     status: StatusEnum.success,
  //   }));
  // }
  // public loadErrorTodos(payloadError: string): void {
  //   todosStore.update((state) => ({
  //     ...state,
  //     error: payloadError,
  //     status: StatusEnum.error,
  //   }));
  // }
}
