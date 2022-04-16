import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('AuthService', ['login', 'logout']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: AuthService,
          useValue: authSpy,
        },
        {
          provide: Router,
          useValue: routerSpy,
        }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
