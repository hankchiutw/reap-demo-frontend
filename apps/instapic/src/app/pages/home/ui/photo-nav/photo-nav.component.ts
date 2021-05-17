import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthStatus, Photo } from '@app/entities';
import { environment as env } from '@env';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HomeContext } from '../../entities';
import { PhotoDaoUsecase } from './photo-dao.usecase';

@Component({
  selector: 'app-photo-nav',
  templateUrl: './photo-nav.component.html',
  styleUrls: ['./photo-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PhotoDaoUsecase],
})
export class PhotoNavComponent implements OnInit {
  photos$: Observable<Photo[]>;

  apiUrl = env.apiUrl;

  private get myId() {
    return this.authStatus.user.id;
  }

  constructor(
    private photoDao: PhotoDaoUsecase,
    private authStatus: AuthStatus,
    private context: HomeContext
  ) {}

  ngOnInit(): void {
    this.photos$ = this.context.selectedUserId$.pipe(
      switchMap((userId) => {
        return userId === this.myId
          ? this.context.myPhotos$
          : this.photoDao.getList(userId);
      })
    );
  }
}
