import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthStatus } from '@app/entities';
import { ApiService, ProcedurePath, UserRaw } from '@app/shared';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private api: ApiService,
    private authStatus: AuthStatus,
    private router: Router
  ) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<true | UrlTree> {
    const isLoginPage = state.url.startsWith('/login');

    return this.resolveAuthStatus().pipe(
      map(({ authorized }) => {
        if ((authorized && !isLoginPage) || (!authorized && isLoginPage)) {
          return true;
        }

        if (authorized && isLoginPage) {
          return this.router.parseUrl('/');
        }

        if (!authorized && !isLoginPage) {
          return this.router.parseUrl('/login');
        }
      })
    );
  }

  private resolveAuthStatus(): Observable<AuthStatus> {
    return this.api.get<UserRaw>(ProcedurePath.me).pipe(
      map(({ username }) => {
        this.authStatus.username = username;
        return this.authStatus;
      }),
      catchError(() => {
        return of(this.authStatus);
      })
    );
  }
}
