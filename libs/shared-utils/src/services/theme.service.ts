import { MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _themeKey = 'IS_THEME_DARK';
  private _themeState = new BehaviorSubject<boolean>(false);

  public theme$: Observable<boolean> = this._themeState.asObservable();

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _mediaMatcher: MediaMatcher
  ) {
    this._getCurrentTheme();
    this._applyPreferredColorScheme();
  }

  private _applyPreferredColorScheme() {
    const colorScheme = this._mediaMatcher.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    colorScheme.addEventListener('change', (mediaQuery) => {
      this._themeState.next(mediaQuery.matches);
      this.theme$
        .pipe(
          tap((value) => this._setThemeItemInLocalStorage(value)),
          map((value) => this._document.body.classList.toggle('dark', value))
        )
        .subscribe();
    });
  }

  private _getCurrentTheme() {
    this._themeState.next(this._getThemeItemFromLocalStorage());
    this.theme$
      .pipe(map((value) => this._document.body.classList.toggle('dark', value)))
      .subscribe();
  }

  public toggleTheme() {
    this._themeState.next(!this._getThemeItemFromLocalStorage());
    this.theme$
      .pipe(
        tap((value) => this._setThemeItemInLocalStorage(value)),
        map((value) => this._document.body.classList.toggle('dark', value))
      )
      .subscribe();
  }

  // Local storage
  private _setThemeItemInLocalStorage(value: boolean) {
    localStorage.setItem(this._themeKey, value.toString());
  }

  private _getThemeItemFromLocalStorage(): boolean {
    const themeValue = localStorage.getItem(this._themeKey);
    return themeValue?.toLowerCase() === 'true';
  }
}
