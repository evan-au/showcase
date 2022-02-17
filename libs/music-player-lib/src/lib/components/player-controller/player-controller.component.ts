import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { JamendoTrack } from '@showcase-ws/music-player-data';
import { fadeSlideUpDownAnimation } from '@showcase-ws/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'player-controller',
  templateUrl: './player-controller.component.html',
  styleUrls: ['./player-controller.component.scss'],
  animations: [fadeSlideUpDownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerControllerComponent {
  @Input() inputTrackProgress$!: Observable<number>;
  @Input() inputTrackDuration$!: Observable<number>;
  @Input() inputTrackPlayingStatus$!: Observable<boolean>;
  @Input() inputActiveTrack$!: Observable<JamendoTrack>;
  @Input() inputIsTrackSelected$!: Observable<boolean>;
  @Input() inputTrackList$!: Observable<JamendoTrack[]>;
  @Input() inputDisplayPreviousButton$!: Observable<boolean>;
  @Input() inputDisplayNextButton$!: Observable<boolean>;

  @Output() outputOnClickPlayPause = new EventEmitter();
  @Output() outputOnClickClose = new EventEmitter();
  @Output() outputOnClickMinimise = new EventEmitter();
  @Output() outputOnClickMaximise = new EventEmitter();
  @Output() outputOnSlideSeekTrack: EventEmitter<number> = new EventEmitter();
  @Output() outputOnClickSkipTrack: EventEmitter<boolean> = new EventEmitter();

  public playPauseTrack() {
    this.outputOnClickPlayPause.emit();
  }

  public skipTrack(skipStatus: boolean) {
    this.outputOnClickSkipTrack.emit(skipStatus);
  }

  public seekTrack(sliderValue: MatSliderChange) {
    const value = sliderValue.value === null ? 0 : sliderValue.value;
    this.outputOnSlideSeekTrack.emit(value);
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

  public formatLabel() {
    return '';
  }
}
