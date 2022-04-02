import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

// Facades
import { AdminFacade } from '../../../data/admin.facade';

@Component({
  templateUrl: './ui-add-snackbar.component.html',
  styleUrls: ['./ui-add-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAddSnackbarComponent {
  productsStatusState$ = this._adminFacade.productsStatusState$;

  constructor(
    private _adminFacade: AdminFacade,
    private _snackbarRef: MatSnackBarRef<UiAddSnackbarComponent>
  ) {}

  dismissSnackbar() {
    this._snackbarRef.dismiss();
  }
}
