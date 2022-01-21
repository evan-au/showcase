import { Component, OnInit } from '@angular/core';
import { MusicPlayerFacade } from '@showcase-ws/music-player-data';

@Component({
  templateUrl: './local-music.component.html',
  styleUrls: ['./local-music.component.scss'],
})
export class LocalMusicComponent implements OnInit {
  music$ = this._musicPlayerFacade.music$;
  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._musicPlayerFacade.loadMusic();
  }
}
