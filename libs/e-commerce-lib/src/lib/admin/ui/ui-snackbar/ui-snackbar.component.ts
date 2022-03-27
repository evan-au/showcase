import { Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { AuthFacade } from '../../data/auth.facade';

@Component({
  templateUrl: './ui-snackbar.component.html',
  styleUrls: ['./ui-snackbar.component.scss'],
})
export class UiSnackbarComponent {
  authError$ = this._facade.authError$;

  constructor(
    private _facade: AuthFacade,
    private _snackbarRef: MatSnackBarRef<UiSnackbarComponent>
  ) {}

  dismissSnackbar() {
    this._snackbarRef.dismiss();
  }
}
