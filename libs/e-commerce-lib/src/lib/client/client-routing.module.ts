import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingContainerComponent } from './containers/landing-container/landing-container.component';

const routes: Routes = [
  {
    path: '',
    component: LandingContainerComponent,
  },
  // {
  //   path: 'blog',
  //   loadChildren: () =>
  //     import('./features/blog/blog.module').then((m) => m.BlogModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
