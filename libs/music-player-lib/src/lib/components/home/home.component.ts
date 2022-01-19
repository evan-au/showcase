import { Component, OnInit } from '@angular/core';
import { MusicPlayerFacade } from '@showcase-ws/music-player-data';

@Component({
  selector: 'music-player-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  music$ = this._musicPlayerFacade.music$;

  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._musicPlayerFacade.loadMusic();
  }
}
