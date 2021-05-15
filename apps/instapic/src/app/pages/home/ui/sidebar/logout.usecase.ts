import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ProcedurePath } from '@app/shared';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogoutUsecase {
  constructor(private api: ApiService, private router: Router) {}

  logout() {
    return this.api.get(ProcedurePath.authLogout).pipe(
      tap(() => {
        return this.router.navigateByUrl('/login');
      })
    );
  }
}
