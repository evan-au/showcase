import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LocalTrack } from '@showcase-ws/music-player-data';
import { fadeSlideUpDownAnimation } from '@showcase-ws/utils';
import { Observable, first } from 'rxjs';

@Component({
  selector: 'music-player-local-controller',
  templateUrl: './local-controller.component.html',
  styleUrls: ['./local-controller.component.scss'],
  animations: [fadeSlideUpDownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalControllerComponent {
  @Input() inputTrackPlayingStatus$!: Observable<boolean>;
  @Input() inputLocalTrack$!: Observable<LocalTrack>;
  @Input() inputIsTrackSelected$!: Observable<boolean>;
  @Input() inputDisplayPreviousButton$!: Observable<boolean>;
  @Input() inputDisplayNextButton$!: Observable<boolean>;

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
