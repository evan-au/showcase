import { Component, EventEmitter, Input, Output } from '@angular/core';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'music-player-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
  // private _trackSubject$ = new BehaviorSubject<boolean>(false);
  // status = false;
  @Input() inputTrackPlayingStatus$!: Observable<boolean>;
  @Input() inputTrackName$!: Observable<string>;
  @Input() inputHasSkipNext = true;
  @Input() inputHasSkipPrevious = true;
  @Output() outputPlayPauseButton: EventEmitter<boolean> = new EventEmitter();

  public togglePlayPause() {
    console.log('Play/pause');
    this.inputTrackPlayingStatus$.pipe(first()).subscribe((status) => {
      this.outputPlayPauseButton.emit((status = !status));
    });
  }

  skipToNext() {
    console.log('Skip next');
  }
  skipToPrevious() {
    console.log('Skip previous');
  }
}
