import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginFormUsecase } from './login-form.usecase';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginFormUsecase],
})
export class LoginFormComponent {
  public formGroup = this.fb.group({
    username: [''],
    password: [''],
  });

  public useSignUp = false;

  constructor(private fb: FormBuilder, private usecase: LoginFormUsecase) {}

  public doLogin() {
    this.usecase
      .doLogin(this.formValue('username'), this.formValue('password'))
      .subscribe();
  }

  public doSignUp() {
    this.usecase
      .doSignUp(this.formValue('username'), this.formValue('password'))
      .subscribe();
  }

  private formValue(name: string) {
    return this.formGroup.get(name).value;
  }
}
