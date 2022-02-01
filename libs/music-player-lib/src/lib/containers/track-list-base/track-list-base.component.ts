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
  selector: 'music-player-track-list',
  templateUrl: './track-list-base.component.html',
  styleUrls: ['./track-list-base.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackListBaseComponent {
  @Input() inputIsTrackSelected$!: Observable<boolean>;

  @Input() inputJamendoActiveTrack$!: Observable<JamendoTrack>;
  @Input() inputJamendoTrackList$!: Observable<JamendoTrack[]>;

  @Output() outputJamendoSelectedTrack: EventEmitter<JamendoTrack> =
    new EventEmitter();

  selectJamendoTrack(track: JamendoTrack) {
    this.outputJamendoSelectedTrack.emit(track);
  }
}
