import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFacade } from '../../data/auth.facade';

@Component({
  selector: 'dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHomeComponent {
  isAdminNew$ = this._facade.isAdminNew$;

  constructor(private _facade: AuthFacade) {}

  skipWelcomeIntro() {
    this._facade.skipWelcomeIntro();
  }
}
