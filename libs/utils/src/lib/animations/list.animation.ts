import {
  animate,
  AnimationTriggerMetadata,
  // keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listAnimation: AnimationTriggerMetadata = trigger(
  'listAnimation',
  [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(-1rem)' }),
          stagger('100ms', [
            animate(
              '300ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1, transform: 'translateY(0)' }),
          stagger('60ms', [
            animate(
              '100ms',
              style({ opacity: 0, transform: 'translateY(-1rem)' })
            ),
          ]),
        ],
        {
          optional: true,
        }
      ),
    ]),
  ]
);
