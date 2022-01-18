import { Component } from '@angular/core';
import { RoutesLinkService } from '@showcase-ws/shared-utils';

@Component({
  selector: 'showcase-app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  public linkCollection$ = this._routesLinkService.linkCollection$;
  public transformedLinks$ = this._routesLinkService.transformedLinks$;

  constructor(private _routesLinkService: RoutesLinkService) {}
}
