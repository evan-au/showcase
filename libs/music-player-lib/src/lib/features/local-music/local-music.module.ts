import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalMusicComponent } from './local-music.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LocalMusicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LocalMusicComponent,
      },
    ]),
  ],
})
export class LocalMusicModule {}
