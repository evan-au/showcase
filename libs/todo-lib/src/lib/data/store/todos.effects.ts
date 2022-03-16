// import { Injectable } from '@angular/core';
// import { createEffect, ofType } from '@ngneat/effects';
// import { catchError, map, of, switchMap } from 'rxjs';
// import { loadTodos, loadTodosFailure, loadTodosSuccess } from './todos.actions';
// import { TodosRepository } from './todos.repository';

// @Injectable()
// export class TodosEffects {
//   constructor(private _todoRepo: TodosRepository) {}

//   loadTodos$ = createEffect((actions) =>
//     actions.pipe(
//       ofType(loadTodos),
//       switchMap(() =>
//         this._todoRepo.todos$.pipe(
//           map((todos) => loadTodosSuccess({ todos: todos })),
//           catchError((error) => of(loadTodosFailure({ error })))
//         )
//       )
//     )
//   );
// }
