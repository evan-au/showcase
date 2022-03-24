import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSignUpComponent implements OnInit {
  @Output() outputSwitchToSignIn: EventEmitter<boolean> = new EventEmitter();
  @Output() outputSignUp: EventEmitter<FormGroup> = new EventEmitter();

  signUpForm = new FormGroup({
    emailSignUp: new FormControl('', [Validators.email]),
    passwordSignUp: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    return;
  }

  switchToSignIn() {
    this.outputSwitchToSignIn.emit(true);
  }

  signUp() {
    this.outputSignUp.emit(this.signUpForm);
  }
}
