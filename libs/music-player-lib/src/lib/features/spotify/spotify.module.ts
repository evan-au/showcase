import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyComponent } from './spotify.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SpotifyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SpotifyComponent,
      },
    ]),
  ],
})
export class SpotifyModule {}
