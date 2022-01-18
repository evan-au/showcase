import { Component, OnInit } from '@angular/core';
import { MusicPlayerFacade } from '@showcase-ws/music-player-data';

@Component({
  selector: 'music-player-feat-home',
  templateUrl: './feat-home.component.html',
  styleUrls: ['./feat-home.component.scss'],
})
export class FeatHomeComponent implements OnInit {
  music$ = this._musicPlayerFacade.music$;

  constructor(private _musicPlayerFacade: MusicPlayerFacade) {}

  ngOnInit(): void {
    this._musicPlayerFacade.loadMusic();
  }
}
