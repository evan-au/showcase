import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'music-player-base-component',
  templateUrl: './player-base.component.html',
  styleUrls: ['./player-base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerBaseComponent {
  @Input() inputPlatform$!: Observable<string>;
}
