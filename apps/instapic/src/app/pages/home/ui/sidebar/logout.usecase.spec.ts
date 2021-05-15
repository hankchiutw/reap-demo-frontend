import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppTestingModule } from '@app/app-testing.module';

import { LogoutUsecase } from './logout.usecase';

describe('LogoutUsecase', () => {
  let service: LogoutUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule, RouterTestingModule],
      providers: [LogoutUsecase],
    });
    service = TestBed.inject(LogoutUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
