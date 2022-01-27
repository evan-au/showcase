import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeSlideLeftRightAnimation: AnimationTriggerMetadata = trigger(
  'fadeSlideLeftRight',
  [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-60px)',
      }),
      animate(
        '700ms ease-in-out',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
    ]),
    transition(':leave', [
      animate(
        '700ms ease-in-out',
        style({
          opacity: 0,
          transform: 'translateX(-60px)',
        })
      ),
    ]),
  ]
);
