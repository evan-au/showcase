import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { JamendoTrack } from '@showcase-ws/music-player-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'track-list-container',
  templateUrl: './track-list-container.component.html',
  styleUrls: ['./track-list-container.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackListContainerComponent {
  @Input() inputIsTrackSelected$!: Observable<boolean>;

  @Input() inputJamendoActiveTrack$!: Observable<JamendoTrack>;
  @Input() inputJamendoTrackList$!: Observable<JamendoTrack[]>;

  @Output() outputJamendoSelectedTrack: EventEmitter<JamendoTrack> =
    new EventEmitter();

  selectJamendoTrack(track: JamendoTrack) {
    this.outputJamendoSelectedTrack.emit(track);
  }
}
