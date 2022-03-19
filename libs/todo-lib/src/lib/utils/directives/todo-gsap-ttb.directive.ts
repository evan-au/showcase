import { AfterViewInit, Directive, ElementRef } from '@angular/core';

import { gsap } from 'gsap';

@Directive({
  selector: '[todoGsapTTB]',
})
export class TodoGsapTTBDirective implements AfterViewInit {
  constructor(private _element: ElementRef) {}
  ngAfterViewInit(): void {
    gsap.fromTo(
      this._element.nativeElement,
      {
        opacity: 0,
        y: -10,
        ease: 'sine-in',
        duration: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        ease: 'sine-out',
        duration: 0.5,
      }
    );
  }
}
