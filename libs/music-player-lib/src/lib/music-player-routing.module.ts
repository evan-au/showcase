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
    path: 'spotify',
    loadChildren: () =>
      import('./features/spotify/spotify.module').then((m) => m.SpotifyModule),
  },
  {
    path: 'local-library',
    loadChildren: () =>
      import('./features/local-music/local-music.module').then(
        (m) => m.LocalMusicModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicPlayerRoutingModule {}
