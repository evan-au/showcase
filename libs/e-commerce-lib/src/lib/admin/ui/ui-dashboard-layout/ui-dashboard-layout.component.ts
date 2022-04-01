import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';

// Components - Angular material sidenav
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'ui-dashboard-layout',
  templateUrl: './ui-dashboard-layout.component.html',
  styleUrls: ['./ui-dashboard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDashboardLayoutComponent {
  @Input() inputIsPending$!: Observable<boolean>;
  @Input() inputContent: 'inventory' | 'add' = 'inventory';
  @Output() outputHandleMenuclick: EventEmitter<'inventory' | 'add'> =
    new EventEmitter();
  @ViewChild('drawer') private _drawer!: MatDrawer;

  isViewOnMobile!: boolean;

  isBreakpointMatching(payload: boolean) {
    this.isViewOnMobile = payload;
  }

  handleMenuClick(payload: 'inventory' | 'add') {
    this.inputContent = payload;
    this.outputHandleMenuclick.emit(payload);
    if (this.isViewOnMobile) this._drawer.close();
  }
}
