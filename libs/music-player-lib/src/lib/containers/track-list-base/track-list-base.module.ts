import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackListBaseComponent } from './track-list-base.component';
import { SharedUiModule } from '@showcase-ws/shared-ui';
import { JamendoTrackListComponent } from '../../components/jamendo-track-list/jamendo-track-list.component';

@NgModule({
  declarations: [TrackListBaseComponent, JamendoTrackListComponent],
  imports: [CommonModule, SharedUiModule],
  exports: [TrackListBaseComponent],
})
export class TrackListBaseModule {}
