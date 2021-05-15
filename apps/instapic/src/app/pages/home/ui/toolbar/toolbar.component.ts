import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UploadUsecase } from './upload.usecase';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UploadUsecase],
})
export class ToolbarComponent {
  constructor(private uploadUsecase: UploadUsecase) {}

  upload(file: File) {
    if (!file) {
      return;
    }
    this.uploadUsecase
      .upload(file)
      .pipe(
        tap((p) => {
          console.log('xxx: progress', p);
        })
      )
      .subscribe();
  }
}
