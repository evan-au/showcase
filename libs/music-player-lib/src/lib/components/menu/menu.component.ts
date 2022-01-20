import { Component, Input } from '@angular/core';

@Component({
  selector: 'music-player-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() playerTypeInput!: string;
}
