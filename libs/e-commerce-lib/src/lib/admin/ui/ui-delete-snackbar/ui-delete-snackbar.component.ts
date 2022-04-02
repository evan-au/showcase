import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

// Facades
import { AdminFacade } from '../../../data/admin.facade';

@Component({
  templateUrl: './ui-delete-snackbar.component.html',
  styleUrls: ['./ui-delete-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDeleteSnackbarComponent {
  productsStatusState$ = this._adminFacade.productsStatusState$;

  constructor(
    private _adminFacade: AdminFacade,
    private _snackbarRef: MatSnackBarRef<UiDeleteSnackbarComponent>
  ) {}

  dismissSnackbar() {
    this._snackbarRef.dismiss();
  }
}
