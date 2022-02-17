import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { JamendoTrack } from '@showcase-ws/music-player-data';
import { fadeSlideUpDownAnimation } from '@showcase-ws/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'controller-container',
  templateUrl: './controller-container.component.html',
  styleUrls: ['./controller-container.component.scss'],
  animations: [fadeSlideUpDownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControllerContainerComponent {
  @Input() inputTrackDuration$!: Observable<number>;
  @Input() inputTrackProgress$!: Observable<number>;
  @Input() inputTrackList$!: Observable<JamendoTrack[]>;
  @Input() inputJamendoActiveTrack$!: Observable<JamendoTrack>;
  @Input() inputControllerSize$!: Observable<string>;
  @Input() inputTrackPlayingStatus$!: Observable<boolean>;
  @Input() inputIsTrackSelected$!: Observable<boolean>;
  @Input() inputDisplayNextButton$!: Observable<boolean>;
  @Input() inputDisplayPreviousButton$!: Observable<boolean>;

  @Output() outputOnClickPlayPause = new EventEmitter();
  @Output() outputOnClickClose = new EventEmitter();
  @Output() outputOnClickMinimise = new EventEmitter();
  @Output() outputOnClickMaximise = new EventEmitter();
  @Output() outputOnSlideSeekTrack: EventEmitter<number> = new EventEmitter();

  @Output() outputOnClickSkipTrack: EventEmitter<boolean> = new EventEmitter();

  public playPauseTrack() {
    this.outputOnClickPlayPause.emit();
  }

  public seekTrack(sliderValue: number) {
    this.outputOnSlideSeekTrack.emit(sliderValue);
  }

  public skipTrack(skipStatus: boolean) {
    this.outputOnClickSkipTrack.emit(skipStatus);
  }

  public closeController() {
    this.outputOnClickClose.emit();
  }

  public minimiseController() {
    this.outputOnClickMinimise.emit();
  }
  public maximiseController() {
    this.outputOnClickMaximise.emit();
  }
}
