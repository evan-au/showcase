import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetFacade } from './application/budget.facade';

@NgModule({
  imports: [CommonModule],
  providers: [BudgetFacade],
})
export class BudgetDataModule {}
