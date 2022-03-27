import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
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
  content: 'inventory' | 'orders' = 'inventory';

  isBreakpointMatching(payload: boolean) {
    this.isViewOnMobile = payload;
  }

  handleMenuClick(payload: 'inventory' | 'orders') {
    this.content = payload;
    if (this.isViewOnMobile) this._drawer.close();
  }
}
