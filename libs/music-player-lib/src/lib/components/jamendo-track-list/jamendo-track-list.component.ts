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
  selector: 'music-player-jamendo-track-list',
  templateUrl: './jamendo-track-list.component.html',
  styleUrls: ['./jamendo-track-list.component.scss'],
  animations: [listAnimation, customEmptyListAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JamendoTrackListComponent {
  @Input() inputTrackList$!: Observable<JamendoTrack[]>;
  @Input() inputActiveTrack$!: Observable<JamendoTrack>;

  @Output() outputSelectedTrack: EventEmitter<JamendoTrack> =
    new EventEmitter();

  selectTrack(track: JamendoTrack) {
    this.outputSelectedTrack.emit(track);
  }
}
