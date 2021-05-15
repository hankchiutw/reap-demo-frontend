import { Injectable } from '@angular/core';
import { ApiService, ProcedurePath } from '@app/shared';
import { Observable } from 'rxjs';

@Injectable()
export class UploadUsecase {
  constructor(private api: ApiService) {}

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.api.post(ProcedurePath.photoUpload, {
      body: formData,
      reportProgress: true,
    });
  }
}
