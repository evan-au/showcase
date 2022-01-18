import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, distinctUntilChanged } from 'rxjs';

class BudgetState {
  budget: string[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class BudgetStoreService {
  private _state = new BudgetState();
  private _budgetStore = new BehaviorSubject<BudgetState>(this._state);
  private _budgetState$: Observable<BudgetState> =
    this._budgetStore.asObservable();

  public storeBudget$ = this._budgetState$.pipe(
    map((state) => state.budget),
    distinctUntilChanged()
  );

  public saveBudget(budget: string[]) {
    this._budgetStore.next((this._state = { ...this._state, budget }));
  }
}
