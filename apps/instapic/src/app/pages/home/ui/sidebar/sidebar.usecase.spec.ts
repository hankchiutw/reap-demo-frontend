import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppTestingModule } from '@app/app-testing.module';

import { SidebarUsecase } from './sidebar.usecase';

describe('SidebarUsecase', () => {
  let service: SidebarUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule, RouterTestingModule],
      providers: [SidebarUsecase],
    });
    service = TestBed.inject(SidebarUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
