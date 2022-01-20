import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RoutesLinkService } from '@showcase-ws/utils';

@Component({
  selector: 'showcase-app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  public linkCollection$ = this._routesLinkService.linkCollection$;
  public transformedLinks$ = this._routesLinkService.transformedLinks$;

  constructor(
    private _routesLinkService: RoutesLinkService,
    private _bottomSheet: MatBottomSheet
  ) {}

  dismissBottomSheet(): void {
    setTimeout(() => {
      this._bottomSheet.dismiss();
    }, 150);
  }
}
