import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

// Facades
import { AdminFacade } from '../../../data/admin.facade';

@Component({
  templateUrl: './ui-snackbar.component.html',
  styleUrls: ['./ui-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSnackbarComponent {
  productsStatusState$ = this._adminFacade.productsStatusState$;

  constructor(
    private _adminFacade: AdminFacade,
    private _snackbarRef: MatSnackBarRef<UiSnackbarComponent>
  ) {}

  dismissSnackbar() {
    this._snackbarRef.dismiss();
  }
}
