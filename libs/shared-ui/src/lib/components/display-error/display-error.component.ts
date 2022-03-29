import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-ui-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayErrorComponent {
  @Input() status!: number;
}
