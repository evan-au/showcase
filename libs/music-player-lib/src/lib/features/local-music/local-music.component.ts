import { Component } from '@angular/core';
import { MusicPlayerFacade } from '@showcase-ws/music-player-data';

@Component({
  templateUrl: './local-music.component.html',
  styleUrls: ['./local-music.component.scss'],
})
export class LocalMusicComponent {
  // isTrackPlaying$ = this._musicPlayerFacade.isLocalTrackPlaying$;

  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  setPlayingStatus(status: boolean) {
    console.log('Local', status);
    // this._musicPlayerFacade.setLocalTrackPlayingStatus(status);
  }
}
