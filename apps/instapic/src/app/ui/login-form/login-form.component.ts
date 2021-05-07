import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  public formGroup = this.fb.group({
    username: [''],
    password: [''],
  });

  public useSignUp = false;

  constructor(private fb: FormBuilder) {}

  public doLogin() {}
  public doSignUp() {}
}
