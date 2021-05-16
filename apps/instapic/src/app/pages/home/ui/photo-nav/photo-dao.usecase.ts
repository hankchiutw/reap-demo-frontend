import { Injectable } from '@angular/core';
import { Photo } from '@app/entities';
import { ApiService, ResourcePath } from '@app/shared';
import { Observable } from 'rxjs';
import { HomeContext } from '../../entities';

@Injectable()
export class PhotoDaoUsecase {
  private get userId() {
    return this.context.selectedUserId;
  }

  constructor(private api: ApiService, private context: HomeContext) {}

  getList(): Observable<Photo[]> {
    return this.api.get(ResourcePath.photo, {
      query: {
        userId: this.userId,
      },
    });
  }
}
