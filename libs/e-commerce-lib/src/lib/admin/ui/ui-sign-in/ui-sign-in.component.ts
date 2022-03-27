import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ui-sign-in',
  templateUrl: './ui-sign-in.component.html',
  styleUrls: ['./ui-sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSignInComponent {
  @Output() outputSwitchToSignUp: EventEmitter<boolean> = new EventEmitter();
  @Output() outputSignIn: EventEmitter<FormGroup> = new EventEmitter();

  signInForm = new FormGroup({
    emailSignIn: new FormControl('evan@test.com', [Validators.email]),
    passwordSignIn: new FormControl('password', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  switchToSignUp() {
    this.outputSwitchToSignUp.emit(false);
  }

  signIn() {
    this.outputSignIn.emit(this.signInForm);
  }
}
