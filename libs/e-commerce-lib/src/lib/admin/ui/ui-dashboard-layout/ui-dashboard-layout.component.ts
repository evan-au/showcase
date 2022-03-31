import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

// Components - Angular material sidenav
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'ui-dashboard-layout',
  templateUrl: './ui-dashboard-layout.component.html',
  styleUrls: ['./ui-dashboard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDashboardLayoutComponent {
  @ViewChild('drawer') private _drawer!: MatDrawer;

  isViewOnMobile!: boolean;
  content: 'inventory' | 'add' = 'inventory';

  isBreakpointMatching(payload: boolean) {
    this.isViewOnMobile = payload;
  }

  handleMenuClick(payload: 'inventory' | 'add') {
    this.content = payload;
    if (this.isViewOnMobile) this._drawer.close();
  }
}
