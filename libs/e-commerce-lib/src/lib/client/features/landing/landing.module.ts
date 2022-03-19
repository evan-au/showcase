import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ProductsCategoryComponent } from '../../ui/products-category/products-category.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: LandingComponent }];
@NgModule({
  declarations: [LandingComponent, ProductsCategoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedUiModule],
})
export class LandingModule {}
