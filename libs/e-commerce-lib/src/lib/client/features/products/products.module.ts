import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { EcommerceSharedUiModule } from '../../../shared/ui/e-commerce-shared-ui.module';
import { UiModule } from '../../ui/ui.module';
import { UtilsModule } from '@showcase-ws/utils';

// Components
import { ProductsComponent } from './products.component';

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
