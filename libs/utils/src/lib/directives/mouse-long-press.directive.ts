import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent, filter, map, merge, switchMap, timer, of } from 'rxjs';

@Directive({
  selector: '[utilsMouseLongPress]',
})
export class MouseLongPressDirective {
  threshold = 500;

  @Output()
  mouseLongPress = new EventEmitter();

  constructor(private _elementRef: ElementRef) {
    const mousedown = fromEvent<MouseEvent>(
      this._elementRef.nativeElement,
      'mousedown'
    ).pipe(
      filter((event) => event.button == 0), // Only allow left button (Primary button)
      map(() => true) // turn on threshold counter
    );
    const touchstart = fromEvent(
      this._elementRef.nativeElement,
      'touchstart'
    ).pipe(map(() => true));
    const touchEnd = fromEvent(this._elementRef.nativeElement, 'touchend').pipe(
      map(() => false)
    );
    const mouseup = fromEvent<MouseEvent>(window, 'mouseup').pipe(
      filter((event) => event.button == 0), // Only allow left button (Primary button)
      map(() => false) // reset threshold counter
    );
    merge(touchstart, touchEnd, mouseup, mousedown)
      .pipe(
        switchMap((state) => (state ? timer(this.threshold, 400) : of(null))),
        filter((value) => value !== null)
      )
      .subscribe(() => {
        console.log('long pressing');

        this.mouseLongPress.emit();
      });
  }
}
