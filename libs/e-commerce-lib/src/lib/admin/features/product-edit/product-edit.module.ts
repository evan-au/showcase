import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { UiModule } from '../../ui/ui.module';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { UtilsModule } from '@showcase-ws/utils';

// Components
import { ProductEditComponent } from './product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProductEditComponent,
  },
];

@NgModule({
  declarations: [ProductEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    UiModule,
    SharedUiModule,
    UtilsModule,
  ],
})
export class ProductEditModule {}
