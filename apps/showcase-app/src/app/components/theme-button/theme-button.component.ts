import { Component } from '@angular/core';
import { ThemeService } from '@showcase-ws/shared-utils';

@Component({
  selector: 'showcase-app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
})
export class ThemeButtonComponent {
  public theme$ = this._themeService.theme$;

  constructor(private _themeService: ThemeService) {}

  public toggleTheme(): void {
    this._themeService.toggleTheme();
  }
}
