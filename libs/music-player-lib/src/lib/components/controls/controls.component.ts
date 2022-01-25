import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalTrack, SpotifyTrack } from '@showcase-ws/music-player-data';
import { fadeSlideInOutAnimation } from '@showcase-ws/utils';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'music-player-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  animations: [fadeSlideInOutAnimation],
})
export class ControlsComponent {
  @Input() inputTrackPlayingStatus$!: Observable<boolean>;
  @Input() inputTrack$!: Observable<SpotifyTrack | LocalTrack>;
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
