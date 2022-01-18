import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceFacade } from './application/e-commerce.facade';

@NgModule({
  imports: [CommonModule],
  providers: [ECommerceFacade],
})
export class ECommerceDataModule {}
