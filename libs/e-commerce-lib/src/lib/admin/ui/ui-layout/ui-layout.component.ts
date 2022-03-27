import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFacade } from '../../data/auth.facade';

@Component({
  selector: 'ui-layout',
  templateUrl: './ui-layout.component.html',
  styleUrls: ['./ui-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLayoutComponent {
  isAdminAuthenticated$ = this._facade.isAdminAuthenticated$;

  constructor(private _facade: AuthFacade) {}

  signOut() {
    this._facade.signOutAdmin();
  }
}
