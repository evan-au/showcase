import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[utilsBreakpointCheckMobile]',
})
export class BreakpointCheckMobileDirective implements OnInit {
  @Output() outputIsBreakpointMatchingMobile: EventEmitter<boolean> =
    new EventEmitter();

  constructor(private _breakpoint: BreakpointObserver) {}
  ngOnInit(): void {
    this._breakpoint
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state) => {
        this.outputIsBreakpointMatchingMobile.emit(state.matches);
      });
  }
}
