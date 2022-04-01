import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

// Facades
import { AuthFacade } from '../../../data/auth.facade';

@Component({
  templateUrl: './ui-auth-snackbar.component.html',
  styleUrls: ['./ui-auth-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAuthSnackbarComponent {
  authError$ = this._authFacade.authError$;

  constructor(
    private _authFacade: AuthFacade,
    private _snackbarRef: MatSnackBarRef<UiAuthSnackbarComponent>
  ) {}

  dismissSnackbar() {
    this._snackbarRef.dismiss();
  }
}
