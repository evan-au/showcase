import { AfterViewInit, Directive, ElementRef } from '@angular/core';

import { gsap } from 'gsap';

@Directive({
  selector: '[todoGsapRTL]',
})
export class TodoGsapRTLDirective implements AfterViewInit {
  constructor(private _element: ElementRef) {}
  ngAfterViewInit(): void {
    gsap.fromTo(
      this._element.nativeElement,
      {
        opacity: 0,
        x: 10,
        ease: 'sine-in',
        duration: 0.5,
      },
      {
        opacity: 1,
        x: 0,
        ease: 'sine-out',
        duration: 0.5,
      }
    );
  }
}
