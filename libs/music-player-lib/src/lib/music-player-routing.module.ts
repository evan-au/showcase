import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

// Routes
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'jamendo',
    loadChildren: () =>
      import('./features/jamendo/jamendo.module').then((m) => m.JamendoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicPlayerRoutingModule {}
