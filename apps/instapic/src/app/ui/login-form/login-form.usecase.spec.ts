import { TestBed } from '@angular/core/testing';
import { AppTestingModule } from '@app/app-testing.module';

import { LoginFormUsecase } from './login-form.usecase';

describe('LoginFormUsecase', () => {
  let service: LoginFormUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      providers: [LoginFormUsecase],
    });
    service = TestBed.inject(LoginFormUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
