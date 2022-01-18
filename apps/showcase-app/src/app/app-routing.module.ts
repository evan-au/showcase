import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './components/intro-page/intro-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IntroPageComponent,
  },
  {
    path: 'e-commerce-app',
    pathMatch: 'full',
    loadChildren: () =>
      import('@showcase-ws/e-commerce-lib').then((m) => m.ECommerceLibModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
