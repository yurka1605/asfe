import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { StorageService } from './session/abstract-session.service';

describe('AuthService', () => {
  let service: AuthService;
  let storageServiceSpy: jasmine.SpyObj<StorageService>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    const spy = jasmine.createSpyObj('StorageService', ['setItem', 'getItem']);
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {
          provide: StorageService,
          useValue: spy,
        },
        { provide: Router, useValue: routerSpy },
      ]
    });
    service = TestBed.inject(AuthService);
    storageServiceSpy = TestBed.inject(StorageService) as jasmine.SpyObj<StorageService>;
  });

  it('should be created', done => {
    expect(service).toBeTruthy();
    service.isAuth$.subscribe(isAuth => {
      expect(isAuth).toBe(false);
      done();
    });
  });

  describe('methods' , () => {
    it('should be login user', done => {
      service.login();
      expect(storageServiceSpy.setItem).toHaveBeenCalled();
      service.isAuth$.subscribe(isAuth => {
        expect(isAuth).toBe(true);
        done();
      });
    });

    it('should be logout user', done => {
      service.logout();
      expect(storageServiceSpy.setItem).toHaveBeenCalled();
      service.isAuth$.subscribe(isAuth => {
        expect(isAuth).toBe(false);
        done();
      });
    });
  });
});

