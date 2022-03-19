import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent, filter, map, merge, switchMap, timer, of } from 'rxjs';

@Directive({
  selector: '[utilsTouchLongPress]',
})
export class TouchLongPressDirective {
  threshold = 500;

  @Output()
  touchLongPress = new EventEmitter();

  constructor(private _elementRef: ElementRef) {
    const touchstart = fromEvent(
      this._elementRef.nativeElement,
      'touchstart'
    ).pipe(map(() => true));
    const touchEnd = fromEvent(this._elementRef.nativeElement, 'touchend').pipe(
      map(() => false)
    );

    merge(touchstart, touchEnd)
      .pipe(
        switchMap((state) => (state ? timer(this.threshold, 400) : of(null))),
        filter((value) => value !== null)
      )
      .subscribe(() => {
        this.touchLongPress.emit();
      });
  }
}
