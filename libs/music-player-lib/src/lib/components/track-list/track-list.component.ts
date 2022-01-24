import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpotifyTrack } from '@showcase-ws/music-player-data';
import { listAnimation } from '@showcase-ws/utils';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'music-player-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
  animations: [listAnimation],
})
export class TrackListComponent {
  @Input() inputTrackList$: Observable<SpotifyTrack[]> = of([]);
  @Output() outputSelectedTrack: EventEmitter<SpotifyTrack> =
    new EventEmitter();

  selectTrack(track: SpotifyTrack) {
    this.outputSelectedTrack.emit(track);
  }
}
