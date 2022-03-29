import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UiCartComponent } from '../ui-cart/ui-cart.component';

@Component({
  selector: 'ui-layout',
  templateUrl: './ui-layout.component.html',
  styleUrls: ['./ui-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLayoutComponent {
  @Input() inputCartMode = false;

  constructor(private _dialog: MatDialog) {}

  openCart() {
    this._dialog.open(UiCartComponent);
  }
}
