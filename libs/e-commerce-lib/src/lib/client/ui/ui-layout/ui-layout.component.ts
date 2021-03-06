import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Components - Angular material dialog
import { MatDialog } from '@angular/material/dialog';
import { UiCartComponent } from '../ui-cart/ui-cart.component';

// Facade
import { ClientFacade } from '../../../data/client.facade';

@Component({
  selector: 'ui-layout',
  templateUrl: './ui-layout.component.html',
  styleUrls: ['./ui-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLayoutComponent {
  @Input() inputCartMode = false;

  constructor(private _dialog: MatDialog, private _facade: ClientFacade) {}

  openCart() {
    this._dialog.open(UiCartComponent);
  }

  resetProductsView() {
    this._facade.updateFilterAll();
  }
}
