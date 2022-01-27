import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeSlideUpDownAnimation: AnimationTriggerMetadata = trigger(
  'fadeSlideUpDown',
  [
    transition(':enter', [
      style({
        opacity: 0.7,
        transform: 'translateY(60px)',
      }),
      animate(
        '200ms ease-in-out',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
    ]),
    transition(':leave', [
      animate(
        '200ms ease-in-out',
        style({
          opacity: 0,
          transform: 'translateY(60px)',
        })
      ),
    ]),
  ]
);
