import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ProductsCategoryComponent } from '../../ui/products-category/products-category.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';

@NgModule({
  declarations: [LandingComponent, ProductsCategoryComponent],
  imports: [CommonModule, SharedUiModule],
})
export class LandingModule {}
