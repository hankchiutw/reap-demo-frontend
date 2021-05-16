import { Injectable } from '@angular/core';
import { Photo } from '@app/entities';
import { ApiService, ResourcePath } from '@app/shared';
import { Observable } from 'rxjs';

@Injectable()
export class PhotoDaoUsecase {
  constructor(private api: ApiService) {}

  getList(userId: number): Observable<Photo[]> {
    return this.api.get(ResourcePath.photo, {
      params: {
        userId,
      },
    });
  }
}
