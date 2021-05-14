import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginFormUsecase } from './login-form.usecase';
import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  public errorMessage$ = new Subject<string>();

  constructor(private fb: FormBuilder, private usecase: LoginFormUsecase) {}

  public doLogin() {
    this.usecase
      .doLogin(this.formValue('username'), this.formValue('password'))
      .pipe(
        catchError((e) => {
          this.errorMessage$.next(e);
          return null;
        })
      )
      .subscribe();
  }

  public doSignUp() {
    this.usecase
      .doSignUp(this.formValue('username'), this.formValue('password'))
      .pipe(
        catchError((e) => {
          this.errorMessage$.next(e);
          return null;
        })
      )
      .subscribe(() => {
        this.reset();
        alert('Sign up successfully');
        this.useSignUp = false;
      });
  }

  public reset() {
    this.errorMessage$.next('');
    this.formGroup.get('username').setValue('');
    this.formGroup.get('password').setValue('');
  }

  private formValue(name: string) {
    return this.formGroup.get(name).value;
  }
}
