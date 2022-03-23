import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-ui-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.scss'],
})
export class DisplayErrorComponent {
  @Input() status!: number;
  // @Input() error!: ErrorInterface;
}
