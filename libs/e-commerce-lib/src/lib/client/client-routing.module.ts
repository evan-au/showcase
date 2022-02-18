import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingContainerComponent } from './containers/landing-container/landing-container.component';

const routes: Routes = [
  {
    path: '',
    component: LandingContainerComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products-page/products-page.module').then(
        (m) => m.ProductsPageModule
      ),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./pages/product-detail-page/product-detail-page.module').then(
        (m) => m.ProductDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
