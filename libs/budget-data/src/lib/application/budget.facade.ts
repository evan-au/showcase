import { Injectable } from '@angular/core';
import { BudgetDataService } from '../services/budget-data.service';
import { BudgetStoreService } from './budget.store.service';

@Injectable({
  providedIn: 'any',
})
export class BudgetFacade {
  public budget$ = this._budgetStoreService.storeBudget$;

  constructor(
    private _budgetDataService: BudgetDataService,
    private _budgetStoreService: BudgetStoreService
  ) {}

  public loadBudget() {
    this._budgetDataService.loadData().subscribe((budget) => {
      this._budgetStoreService.saveBudget(budget);
    });
  }
}
