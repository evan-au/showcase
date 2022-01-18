import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { ECommerceDataModule } from '@showcase-ws/e-commerce-data';

// Components
import { FeatHomeComponent } from './features/feat-home/feat-home.component';

@NgModule({
  declarations: [FeatHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: FeatHomeComponent },
    ]),
    ECommerceDataModule,
  ],
})
export class ECommerceLibModule {}
