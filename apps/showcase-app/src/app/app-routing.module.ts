import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './components/intro-page/intro-page.component';

const routes: Routes = [
  {
    path: '',
    component: IntroPageComponent,
  },
  {
    path: 'e-commerce-app',
    loadChildren: () =>
      import('@showcase-ws/e-commerce-lib').then((m) => m.ECommerceLibModule),
  },
  {
    path: 'music-player-app',
    loadChildren: () =>
      import('@showcase-ws/music-player-lib').then(
        (m) => m.MusicPlayerLibModule
      ),
  },
  {
    path: 'chat-app',
    loadChildren: () =>
      import('@showcase-ws/chat-lib').then((m) => m.ChatLibModule),
  },
  {
    path: 'budget-app',
    loadChildren: () =>
      import('@showcase-ws/budget-lib').then((m) => m.BudgetLibModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@showcase-ws/shared-ui').then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
