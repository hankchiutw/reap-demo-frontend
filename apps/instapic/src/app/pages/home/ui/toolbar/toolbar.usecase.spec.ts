import { TestBed } from '@angular/core/testing';

import { ToolbarUsecase } from './toolbar.usecase';

describe('ToolbarUsecase', () => {
  let service: ToolbarUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
