import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { FeatHomeComponent } from './features/feat-home/feat-home.component';
import { BudgetDataModule } from '@showcase-ws/budget-data';

@NgModule({
  declarations: [FeatHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: FeatHomeComponent },
    ]),
    BudgetDataModule,
  ],
})
export class BudgetLibModule {}
