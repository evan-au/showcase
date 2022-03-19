import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[utilsBreakpointCheck]',
})
export class BreakpointCheckDirective implements OnInit {
  @Output() outputIsBreakpointMatching: EventEmitter<boolean> =
    new EventEmitter();

  constructor(private _breakpoint: BreakpointObserver) {}
  ngOnInit(): void {
    this._breakpoint
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state) => {
        this.outputIsBreakpointMatching.emit(state.matches);
      });
  }
}
