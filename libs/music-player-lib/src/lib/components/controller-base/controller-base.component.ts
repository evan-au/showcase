import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LocalTrack, JamendoTrack } from '@showcase-ws/music-player-data';
import { fadeSlideUpDownAnimation } from '@showcase-ws/utils';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'music-player-controller',
  templateUrl: './controller-base.component.html',
  styleUrls: ['./controller-base.component.scss'],
  animations: [fadeSlideUpDownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControllerBaseComponent {
  @Input() inputJamendoTrack$!: Observable<JamendoTrack>;
  @Input() inputLocalTrack$!: Observable<LocalTrack>;
  @Input() inputControllerSize$!: Observable<string>;
  @Input() inputPlayerType$!: Observable<string>;
  @Input() inputTrackPlayingStatus$!: Observable<boolean>;
  @Input() inputIsTrackSelected$!: Observable<boolean>;
  @Input() inputDisplayNextButton$!: Observable<boolean>;
  @Input() inputDisplayPreviousButton$!: Observable<boolean>;

  @Output() outputOnClickPlayPause: EventEmitter<boolean> = new EventEmitter();
  @Output() outputOnClickHide = new EventEmitter();
  @Output() outputOnClickMinimise = new EventEmitter();
  @Output() outputOnClickMaximise = new EventEmitter();

  @Output() outputOnClickSkipTrack: EventEmitter<boolean> = new EventEmitter();

  public playPauseTrack() {
    this.inputTrackPlayingStatus$
      .pipe(first())
      .subscribe((value) => this.outputOnClickPlayPause.emit((value = !value)));
  }

  public skipTrack(skipStatus: boolean) {
    if (skipStatus) {
      this.outputOnClickSkipTrack.emit(skipStatus);
    } else {
      this.outputOnClickSkipTrack.emit(skipStatus);
    }
  }

  public hideController() {
    this.outputOnClickHide.emit();
  }

  public minimiseController() {
    this.outputOnClickMinimise.emit();
  }
  public maximiseController() {
    this.outputOnClickMaximise.emit();
  }
}
