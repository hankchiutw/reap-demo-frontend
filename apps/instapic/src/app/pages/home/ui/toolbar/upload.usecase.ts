import { Injectable } from '@angular/core';
import { ApiService, ProcedurePath } from '@app/shared';
import { Observable } from 'rxjs';
import { HomeContext } from '../../entities';

@Injectable()
export class UploadUsecase {
  constructor(private api: ApiService, private context: HomeContext) {}

  upload(file: File) {
    this.uploadFile(file).subscribe((result) => {
      const { completed, body } = result;
      if (completed) {
        const oldValue = this.context.myPhotos$.value;
        this.context.myPhotos$.next([...oldValue, body.result]);
      }
    });
  }

  private uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.api.post(ProcedurePath.photoUpload, {
      body: formData,
      reportProgress: true,
    });
  }
}
