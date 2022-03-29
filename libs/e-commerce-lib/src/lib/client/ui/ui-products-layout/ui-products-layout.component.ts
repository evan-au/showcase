import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'ui-products-layout',
  templateUrl: './ui-products-layout.component.html',
  styleUrls: ['./ui-products-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiProductsLayoutComponent {
  @ViewChild('drawer') private _drawer!: MatDrawer;

  isViewOnMobile!: boolean;
  content: 'all' | 'brand' | 'category' = 'all';

  isBreakpointMatching(payload: boolean) {
    this.isViewOnMobile = payload;
  }

  handleMenuClick(payload: 'all' | 'brand' | 'category') {
    this.content = payload;
    if (this.isViewOnMobile) this._drawer.close();
  }
}
