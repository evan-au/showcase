import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFacade } from '../../../data/auth.facade';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  constructor(private _facade: AuthFacade) {}

  signUp(payload: FormGroup) {
    this._facade.signUpAdmin(payload);
  }
}
