import { Component, Input } from '@angular/core';

@Component({
  selector: 'music-player-base-component',
  templateUrl: './player-base.component.html',
  styleUrls: ['./player-base.component.scss'],
})
export class PlayerBaseComponent {
  @Input() playerType = '';

  changeStyle(tag: string): string[] {
    if (tag === 'main') {
      switch (this.playerType) {
        case 'youtube':
          return ['from-red-900 to-red-500'];
        case 'spotify':
          return ['from-green-900 to-green-500'];
        case 'local':
          return ['from-yellow-900 to-yellow-500'];

        default:
          return [];
      }
    } else if (tag === 'header') {
      switch (this.playerType) {
        case 'youtube':
          return ['bg-red-500'];
        case 'spotify':
          return ['bg-green-500'];
        case 'local':
          return ['bg-yellow-500'];

        default:
          return [];
      }
    } else {
      switch (this.playerType) {
        case 'youtube':
          return ['bg-red-800'];
        case 'spotify':
          return ['bg-green-800'];
        case 'local':
          return ['bg-yellow-800'];

        default:
          return [];
      }
    }
  }
}
