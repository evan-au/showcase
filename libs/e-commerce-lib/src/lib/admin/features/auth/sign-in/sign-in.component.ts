import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';

// Facade
import { AuthFacade } from '../../../../data/auth.facade';

@UntilDestroy({ checkProperties: true })
@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  constructor(private _facade: AuthFacade) {}

  signIn(payload: FormGroup) {
    this._facade.signInAdmin(payload);
  }
}
