import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ThemeService } from '@showcase-ws/utils';

@Component({
  selector: 'showcase-app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
