import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { UiModule } from '../../ui/ui.module';
import { EcommerceSharedUiModule } from '../../../shared/ui/e-commerce-shared-ui.module';
import { UtilsModule } from '@showcase-ws/utils';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    UiModule,
    UtilsModule,
    EcommerceSharedUiModule,
  ],
})
export class ProductsModule {}
