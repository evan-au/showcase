import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules

// Components
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '@showcase-ws/utils';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageNotFoundComponent,
      },
    ]),
    UtilsModule,
  ],
})
export class PageNotFoundModule {}
