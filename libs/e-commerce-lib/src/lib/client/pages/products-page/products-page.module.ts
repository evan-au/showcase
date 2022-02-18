import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@showcase-ws/shared-ui';

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
  },
];

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedUiModule],
})
export class ProductsPageModule {}
