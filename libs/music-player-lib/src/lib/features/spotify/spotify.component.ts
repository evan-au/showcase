import { Component, OnInit } from '@angular/core';
import { MusicPlayerFacade } from '@showcase-ws/music-player-data';

@Component({
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
  music$ = this._musicPlayerFacade.music$;
  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._musicPlayerFacade.loadMusic();
  }
}
