import { Component, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'music-player-base-component',
  templateUrl: './player-base.component.html',
  styleUrls: ['./player-base.component.scss'],
})
export class PlayerBaseComponent {
  @Input() inputPlayerType = '';
  isTrackSelected$ = of(!true);
}
