import { Injectable } from '@angular/core';
import { ApiService, ProcedurePath } from '@app/shared';

@Injectable()
export class LoginFormUsecase {
  constructor(private api: ApiService) {}

  public doLogin(username: string, password: string) {
    return this.api.post(ProcedurePath.authLogin, {
      body: {
        username,
        password,
      },
    });
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
