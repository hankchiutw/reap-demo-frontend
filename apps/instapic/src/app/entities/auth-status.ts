import { Injectable } from '@angular/core';

@Injectable()
export class AuthStatus {
  public username: string = null;

  public get authorized(): boolean {
    return !!this.username;
  }
}
