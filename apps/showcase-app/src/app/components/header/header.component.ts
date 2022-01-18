import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RoutingService } from '@showcase-ws/shared-utils';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetMenuComponent } from '../bottom-sheet-menu/bottom-sheet-menu.component';

@Component({
  selector: 'showcase-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public routeUrl$ = this._routingService.routeUrl$;
  private _breakpointSubscription!: Subscription;

  constructor(
    private _routingService: RoutingService,
    private _bottomSheet: MatBottomSheet,
    private _breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this._breakpointSubscription = this._breakpointObserver
      .observe(Breakpoints.Large)
      .subscribe(() => {
        this._bottomSheet.dismiss();
      });
  }

  public openBottomSheetMenu(): void {
    this._bottomSheet.open(BottomSheetMenuComponent);
  }

  ngOnDestroy(): void {
    this._breakpointSubscription.unsubscribe();
  }
}
