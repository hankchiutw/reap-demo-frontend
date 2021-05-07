import { TestBed } from '@angular/core/testing';

import { LoginFormUsecase } from './login-form.usecase';

describe('LoginFormUsecase', () => {
  let service: LoginFormUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
