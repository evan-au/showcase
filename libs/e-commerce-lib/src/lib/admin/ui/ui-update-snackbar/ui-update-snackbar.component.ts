import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

// Facades
import { AdminFacade } from '../../../data/admin.facade';

@Component({
  templateUrl: './ui-update-snackbar.component.html',
  styleUrls: ['./ui-update-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiUpdateSnackbarComponent {
  productsStatusState$ = this._adminFacade.productsStatusState$;

  constructor(
    private _adminFacade: AdminFacade,
    private _snackbarRef: MatSnackBarRef<UiUpdateSnackbarComponent>
  ) {}

  dismissSnackbar() {
    this._snackbarRef.dismiss();
  }
}
