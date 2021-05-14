import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ProcedurePath } from '@app/shared';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginFormUsecase {
  constructor(private api: ApiService, private router: Router) {}

  public doLogin(username: string, password: string) {
    return this.api
      .post(ProcedurePath.authLogin, {
        body: {
          username,
          password,
        },
      })
      .pipe(
        tap(() => {
          return this.router.navigateByUrl('/');
        })
      );
  }

  public doSignUp(username: string, password: string) {
    return this.api.post(ProcedurePath.authSignUp, {
      body: {
        username,
        password,
      },
    });
  }
}
