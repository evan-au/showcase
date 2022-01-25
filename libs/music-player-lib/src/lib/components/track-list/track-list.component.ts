import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalTrack, SpotifyTrack } from '@showcase-ws/music-player-data';
import { listAnimation } from '@showcase-ws/utils';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'music-player-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
  animations: [listAnimation],
})
export class TrackListComponent {
  @Input() inputSpotifyTrackList$: Observable<SpotifyTrack[]> = of([]);
  @Input() inputLocalTrackList$: Observable<LocalTrack[]> = of([]);
  @Output() outputSpotifySelectedTrack: EventEmitter<SpotifyTrack> =
    new EventEmitter();
  @Output() outputLocalSelectedTrack: EventEmitter<LocalTrack> =
    new EventEmitter();

  selectSpotifyTrack(track: SpotifyTrack) {
    this.outputSpotifySelectedTrack.emit(track);
  }
  selectLocalTrack(track: LocalTrack) {
    this.outputLocalSelectedTrack.emit(track);
  }
}
