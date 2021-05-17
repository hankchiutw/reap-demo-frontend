import { TestBed } from '@angular/core/testing';

import { UploadUsecase } from './upload.usecase';

describe('UploadUsecase', () => {
  let service: UploadUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadUsecase]
    });
    service = TestBed.inject(UploadUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
