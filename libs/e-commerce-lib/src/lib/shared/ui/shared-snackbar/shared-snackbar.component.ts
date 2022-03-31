import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

// Facades
import { AuthFacade } from '../../../data/auth.facade';

@Component({
  templateUrl: './shared-snackbar.component.html',
  styleUrls: ['./shared-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedSnackbarComponent {
  authError$ = this._authFacade.authError$;

  constructor(
    private _authFacade: AuthFacade,
    private _snackbarRef: MatSnackBarRef<SharedSnackbarComponent>
  ) {}

  dismissSnackbar() {
    this._snackbarRef.dismiss();
  }
}
