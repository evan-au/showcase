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
  {
    path: 'music-player-app',
    pathMatch: 'full',
    loadChildren: () =>
      import('@showcase-ws/music-player-lib').then(
        (m) => m.MusicPlayerLibModule
      ),
  },
  {
    path: 'chat-app',
    pathMatch: 'full',
    loadChildren: () =>
      import('@showcase-ws/chat-lib').then((m) => m.ChatLibModule),
  },
  {
    path: 'budget-app',
    pathMatch: 'full',
    loadChildren: () =>
      import('@showcase-ws/budget-lib').then((m) => m.BudgetLibModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
