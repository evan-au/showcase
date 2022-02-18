import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailPageComponent } from './product-detail-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@showcase-ws/shared-ui';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailPageComponent,
  },
];

@NgModule({
  declarations: [ProductDetailPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedUiModule],
})
export class ProductDetailPageModule {}
