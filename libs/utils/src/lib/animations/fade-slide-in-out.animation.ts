import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

export const fadeSlideInOutAnimation: AnimationTriggerMetadata = trigger(
  'fadeSlideInOut',
  [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(60px)',
      }),
      animate(
        '700ms ease-in-out',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
    ]),
    transition(':leave', [
      animate(
        '700ms ease-in-out',
        style({
          opacity: 0,
          transform: 'translateY(60px)',
        })
      ),
    ]),
  ]
);

export class FadeSlideInOutState {
  private _fadeInOutStateSubject$ = new BehaviorSubject<boolean>(true);
  public fadeInOutState$ = this._fadeInOutStateSubject$.asObservable();

  public fadeInOutState() {
    this._fadeInOutStateSubject$.next(!this._fadeInOutStateSubject$.value);
  }
}
