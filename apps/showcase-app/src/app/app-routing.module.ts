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
    path: 'budget-app',
    pathMatch: 'full',
    loadChildren: () =>
      import('@showcase-ws/budget-lib').then((m) => m.BudgetLibModule),
  },
  {
    path: 'e-commerce-app',
    pathMatch: 'full',
    loadChildren: () =>
      import('@showcase-ws/e-commerce-lib').then((m) => m.ECommerceLibModule),
  },
  {
    path: 'chat-app',
    pathMatch: 'full',
    loadChildren: () =>
      import('@showcase-ws/chat-lib').then((m) => m.ChatLibModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
