import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthFacade } from '../../data/auth.facade';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
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
  }

  signUp(payload: FormGroup) {
    this._facade.signUpAdmin(payload);
  }
}
