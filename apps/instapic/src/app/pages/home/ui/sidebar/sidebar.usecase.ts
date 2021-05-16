import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStatus, User } from '@app/entities';
import { ApiService, ProcedurePath, ResourcePath } from '@app/shared';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HomeContext } from '../../entities';

@Injectable()
export class SidebarUsecase {
  constructor(
    private api: ApiService,
    private router: Router,
    private context: HomeContext,
    private authStatus: AuthStatus
  ) {}

  fetchOtherUsers(): Observable<User[]> {
    return this.api
      .get<User[]>(ResourcePath.user)
      .pipe(
        map((users) => users.filter((u) => u.id !== this.authStatus.user.id))
      );
  }

  selectUser(userId: number) {
    this.context.selectedUserId$.next(userId);
  }

  logout() {
    return this.api.get(ProcedurePath.authLogout).pipe(
      tap(() => {
        return this.router.navigateByUrl('/login');
      })
    );
  }
}
