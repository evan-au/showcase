import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeAnimation: AnimationTriggerMetadata[] = [
  trigger('routeAnim', [
    transition('* => *', [
      style({
        opacity: 0,
        transform: 'translateY(50px)',
      }),
      animate(
        '700ms ease-in-out',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
    ]),
  ]),
];
