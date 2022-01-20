import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

export const toggleStateAnimation: AnimationTriggerMetadata[] = [
  trigger('toggleState', [
    state(
      'default',
      style({
        opacity: 1,
      })
    ),
    state(
      'disabled',
      style({
        opacity: 0.2,
      })
    ),
    transition('* => *', [
      animate(
        '100ms ease-in',
        style({
          transform: 'scale(1.01)',
        })
      ),
      animate(
        '100ms ease-in',
        style({
          transform: 'scale(1)',
        })
      ),
      animate('100ms'),
    ]),
  ]),
];

export class toggleAnimationState {
  private _toggleStateSubject$ = new BehaviorSubject<boolean>(false);
  public toggleState$ = this._toggleStateSubject$.asObservable();

  public toggleState() {
    this._toggleStateSubject$.next(!this._toggleStateSubject$.value);
  }
}
