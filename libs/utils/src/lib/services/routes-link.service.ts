import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

interface Link {
  routerLink: string;
  linkLabel: string;
}

const links: Link[] = [
  {
    routerLink: '/',
    linkLabel: 'Intro',
  },
  {
    routerLink: 'e-commerce-app',
    linkLabel: 'E-commerce',
  },
  {
    routerLink: 'music-player-app',
    linkLabel: 'Music player',
  },
  {
    routerLink: 'chat-app',
    linkLabel: 'Chat',
  },
  {
    routerLink: 'budget-app',
    linkLabel: 'Budget',
  },
];

@Injectable({
  providedIn: 'root',
})
export class RoutesLinkService {
  private _linksState = new BehaviorSubject<Link[]>(links);

  public linkCollection$ = this._linksState.asObservable();
  public transformedLinks$!: Observable<Link[]>;

  constructor() {
    this._filterLinkCollection();
  }

  private _filterLinkCollection() {
    this.transformedLinks$ = this.linkCollection$.pipe(
      map((links) => links.filter((link) => link.routerLink === '/'))
    );

    this.linkCollection$ = this.linkCollection$.pipe(
      map((links) => links.filter((link) => link.routerLink !== '/'))
    );
  }
}
