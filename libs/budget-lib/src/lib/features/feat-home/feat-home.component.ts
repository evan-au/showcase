import { Component, OnInit } from '@angular/core';
import { BudgetFacade } from '@showcase-ws/budget-data';

@Component({
  selector: 'budget-feat-home',
  templateUrl: './feat-home.component.html',
  styleUrls: ['./feat-home.component.scss'],
})
export class FeatHomeComponent implements OnInit {
  budget$ = this._budgetFacade.budget$;
  constructor(private _budgetFacade: BudgetFacade) {}

  ngOnInit(): void {
    this._budgetFacade.loadBudget();
  }
}
