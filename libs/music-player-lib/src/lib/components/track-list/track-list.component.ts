import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { JamendoTrack } from '@showcase-ws/music-player-data';
import { Observable } from 'rxjs';
import { customEmptyListAnimation, listAnimation } from '@showcase-ws/utils';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
  animations: [listAnimation, customEmptyListAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackListComponent {
  @Input() inputTrackList$!: Observable<JamendoTrack[]>;
  @Input() inputActiveTrack$!: Observable<JamendoTrack>;

  @Output() outputSelectedTrack: EventEmitter<JamendoTrack> =
    new EventEmitter();

  selectTrack(track: JamendoTrack) {
    this.outputSelectedTrack.emit(track);
  }
}
