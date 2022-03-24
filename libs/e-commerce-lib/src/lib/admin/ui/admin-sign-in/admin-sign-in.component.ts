import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSignInComponent {
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
