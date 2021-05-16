import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Photo } from '@app/entities';
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
  public photos$: Observable<Photo[]>;

  constructor(
    private photoDao: PhotoDaoUsecase,
    private context: HomeContext
  ) {}

  ngOnInit(): void {
    this.photos$ = this.context.selectedUserId$.pipe(
      switchMap((userId) => this.photoDao.getList(userId))
    );
  }
}
