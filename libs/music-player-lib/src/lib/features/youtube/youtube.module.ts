import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from './youtube.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [YoutubeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: YoutubeComponent,
      },
    ]),
  ],
})
export class YoutubeModule {}
