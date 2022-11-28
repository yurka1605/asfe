import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from './session/abstract-session.service';
import { StorageKeysEnum } from 'src/constants';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private authSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.checkStorageAuth());
  public isAuth$: Observable<boolean> = this.authSubject$.asObservable();

  constructor(
    private router: Router,
    private storageService: StorageService,
  ) {}

  login(): Observable<boolean> {
    return this.changeAuthState(true);
  }

  logout(): Observable<boolean> {
    return this.changeAuthState(false);
  }

  register(): Observable<boolean> {
    return this.changeAuthState(true);
  }

  private changeAuthState(isAuth: boolean): Observable<boolean> {
    try {
      this.storageService.setItem(StorageKeysEnum.AUTHENTICATION, isAuth);
      this.authSubject$.next(isAuth);
      this.router.navigate(['']);
      return of(true);
    } catch (error) {
      return of(false);
    }
  }

  private checkStorageAuth(): boolean {
    return this.storageService.getItem(StorageKeysEnum.AUTHENTICATION) === 'true';
  }
}
