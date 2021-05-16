import { TestBed } from '@angular/core/testing';

import { PhotoDaoUsecase } from './photo-dao.usecase';

describe('PhotoDaoUsecase', () => {
  let service: PhotoDaoUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoDaoUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
