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
        opacity: 0.7,
        transform: 'translateX(-30px)',
      }),
      animate(
        '300ms ease-in-out',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
    ]),
  ]),
];
