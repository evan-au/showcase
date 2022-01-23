import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Track } from '@showcase-ws/music-player-data';
// import { Track } from '@showcase-ws/music-player-data';
import { listAnimation } from '@showcase-ws/utils';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'music-player-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
  animations: [listAnimation],
})
export class TrackListComponent {
  @Input() inputTrackList$: Observable<Track[]> = of([]);
  @Output() outputSelectedTrack: EventEmitter<string> = new EventEmitter();

  // @ViewChild('item') item!: ElementRef;

  selectTrack(trackName: string) {
    this.outputSelectedTrack.emit(trackName);
  }
}
