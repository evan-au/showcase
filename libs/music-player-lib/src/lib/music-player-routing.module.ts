import { NgModule } from '@angular/core';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';

// Routes
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'jamendo',
    loadChildren: () =>
      import('./features/jamendo-player/jamendo-player.module').then(
        (m) => m.JamendoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicPlayerRoutingModule {}
