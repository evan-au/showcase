import { Component } from '@angular/core';
import { RouterOutlet, UrlSegment } from '@angular/router';
import { routeAnimation } from '@showcase-ws/utils';

@Component({
  selector: 'showcase-app-body',
  templateUrl: './body.component.html',
  animations: [routeAnimation],
})
export class BodyComponent {
  prepareRoute(outlet: RouterOutlet): UrlSegment[] | undefined {
    if (outlet.isActivated) return outlet.activatedRoute.snapshot.url;
    return;
  }
}
