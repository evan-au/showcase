import { FormControl } from '@angular/forms';
import { JamendoTrack } from '../interfaces/jamendo-track';

export class MusicPlayerState {
  isTrackPlaying = false;
  isTrackSelected = false;
  trackDuration = 0;
  trackProgress = 0;
  activeTrack!: JamendoTrack;
  searchField = new FormControl('');
  platform = 'jamendo';
  track!: JamendoTrack;
  trackList: JamendoTrack[] = [];
  hasNextButton = true;
  hasPreviousButton = true;
  controllerSize = 'full';
  volume = 0;
}
