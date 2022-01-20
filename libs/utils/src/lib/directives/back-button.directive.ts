import { Directive, HostListener } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Directive({
  selector: '[utilsBackButton]',
})
export class BackButtonDirective {
  constructor(private _navigationService: NavigationService) {}

  @HostListener('click')
  onClick(): void {
    this._navigationService.back();
  }
}
