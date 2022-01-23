import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackListComponent } from './track-list.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';

@NgModule({
  declarations: [TrackListComponent],
  imports: [CommonModule, SharedUiModule],
  exports: [TrackListComponent],
})
export class TrackListModule {}
