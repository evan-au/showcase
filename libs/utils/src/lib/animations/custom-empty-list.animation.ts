import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const customEmptyListAnimation: AnimationTriggerMetadata = trigger(
  'customEmptyList',
  [
    // transition(':enter', [
    //   animate(
    //     '300ms ease-in-out',
    //     style({
    //       opacity: 1,
    //       transform: 'translateX(-60px)',
    //     })
    //   ),
    // ]),
    transition('* <=> *', [
      animate(
        '200ms ease-in-out',
        style({
          opacity: 0,
          transform: 'translateX(60px)',
        })
      ),
    ]),
  ]
);
