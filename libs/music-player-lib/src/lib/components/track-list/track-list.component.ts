import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalTrack, JamendoTrack } from '@showcase-ws/music-player-data';
import { listAnimation } from '@showcase-ws/utils';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'music-player-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
  animations: [listAnimation],
})
export class TrackListComponent {
  @Input() inputPlayerListType = '';
  @Input() inputJamendoTrackList$: Observable<JamendoTrack[]> = of([]);
  @Input() inputLocalTrackList$: Observable<LocalTrack[]> = of([]);
  @Output() outputJamendoSelectedTrack: EventEmitter<JamendoTrack> =
    new EventEmitter();
  @Output() outputLocalSelectedTrack: EventEmitter<LocalTrack> =
    new EventEmitter();

  selectJamendoTrack(track: JamendoTrack) {
    this.outputJamendoSelectedTrack.emit(track);
  }
  selectLocalTrack(track: LocalTrack) {
    this.outputLocalSelectedTrack.emit(track);
  }
}
