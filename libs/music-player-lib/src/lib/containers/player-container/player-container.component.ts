import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerContainerComponent {
  @Input() inputPlatform$!: Observable<string>;
  @Input() inputVolume$!: Observable<number>;
}
