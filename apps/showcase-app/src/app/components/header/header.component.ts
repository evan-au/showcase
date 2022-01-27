import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetMenuComponent } from '../bottom-sheet-menu/bottom-sheet-menu.component';

@Component({
  selector: 'showcase-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _subscription!: Subscription;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private _breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this._subscription = this._breakpointObserver
      .observe(Breakpoints.Large)
      .subscribe(() => {
        this._bottomSheet.dismiss();
      });
  }

  public openBottomSheetMenu(): void {
    this._bottomSheet.open(BottomSheetMenuComponent);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
