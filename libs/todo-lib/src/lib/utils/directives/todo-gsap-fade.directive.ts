import { AfterViewInit, Directive, ElementRef } from '@angular/core';

import { gsap } from 'gsap';

@Directive({
  selector: '[todoGsapFade]',
})
export class TodoGsapFadeDirective implements AfterViewInit {
  constructor(private _element: ElementRef) {}
  ngAfterViewInit(): void {
    gsap.fromTo(
      this._element.nativeElement,
      {
        opacity: 0,
        ease: 'sine-in',
        duration: 0.75,
      },
      {
        opacity: 1,
        ease: 'sine-out',
        duration: 0.75,
      }
    );
  }
}
