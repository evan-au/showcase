import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ui-sign-up',
  templateUrl: './ui-sign-up.component.html',
  styleUrls: ['./ui-sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSignUpComponent {
  @Output() outputSwitchToSignIn: EventEmitter<boolean> = new EventEmitter();
  @Output() outputSignUp: EventEmitter<FormGroup> = new EventEmitter();

  signUpForm = new FormGroup({
    emailSignUp: new FormControl('', [Validators.email]),
    passwordSignUp: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  switchToSignIn() {
    this.outputSwitchToSignIn.emit(true);
  }

  signUp() {
    this.outputSignUp.emit(this.signUpForm);
  }
}
