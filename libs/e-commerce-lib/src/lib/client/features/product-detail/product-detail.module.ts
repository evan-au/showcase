import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { UiModule } from '../../ui/ui.module';
import { UtilsModule } from '@showcase-ws/utils';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailComponent,
  },
];

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    UiModule,
    UtilsModule,
  ],
})
export class ProductDetailModule {}
