import { AfterViewInit, Directive, ElementRef } from '@angular/core';

import { gsap } from 'gsap';

@Directive({
  selector: '[todoGsapStagger]',
})
export class TodoGsapStaggerDirective implements AfterViewInit {
  constructor(private _element: ElementRef) {}
  ngAfterViewInit(): void {
    gsap.fromTo(
      this._element.nativeElement,
      {
        opacity: 0.5,
        x: 1,
        stagger: 0.5,
        ease: 'power2.outIn',
        duration: 0.3,
      },
      {
        opacity: 1,
        x: 0,
        ease: 'power2.inOut',
        duration: 0.5,
      }
    );
  }
}
