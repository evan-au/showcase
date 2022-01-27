import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'music-player-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() inputPlayerType$!: Observable<string>;
}
