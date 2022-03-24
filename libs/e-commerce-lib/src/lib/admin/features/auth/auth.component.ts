import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthFacade } from '../../data/auth.facade';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  isSignInComponentVisible = true;

  constructor(private _facade: AuthFacade) {}

  showSignUpComponent(status: boolean) {
    this.isSignInComponentVisible = status;
  }

  showSignInComponent(status: boolean) {
    this.isSignInComponentVisible = status;
  }

  signIn(payload: FormGroup) {
    this._facade.signInAdmin(payload);
    // this.authError$.subscribe((message) => {
    //   if (message) this._snackbar.open(message, 'Dismiss', { duration: 5000 });
    // });
  }

  signUp(payload: FormGroup) {
    this._facade.signUpAdmin(payload);
    // this.authError$.subscribe((message) => {
    //   if (message) this._snackbar.open(message, 'Dismiss', { duration: 5000 });
    // });
  }
}
