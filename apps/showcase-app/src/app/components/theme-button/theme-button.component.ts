import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ThemeService } from '@showcase-ws/shared-utils';

@Component({
  selector: 'showcase-app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
})
export class ThemeButtonComponent {
  public theme$ = this._themeService.theme$;

  constructor(
    private _themeService: ThemeService,
    private _bottomSheet: MatBottomSheet
  ) {}

  public toggleTheme(): void {
    this._themeService.toggleTheme();
    setTimeout(() => {
      this._bottomSheet.dismiss();
    }, 300);
  }
}
