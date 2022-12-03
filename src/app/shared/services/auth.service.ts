import { BehaviorSubject, first, map, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from './session/abstract-session.service';
import { StorageKeysEnum } from 'src/constants';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private authSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getAuthState());
  public isAuth$: Observable<boolean> = this.authSubject$.asObservable();

  constructor(
    private router: Router,
    private storageService: StorageService,
  ) {}

  login(): void {
    this.changeAuthState();
  }

  logout(): void {
    this.changeAuthState(false);
  }

  register(): void {
    this.changeAuthState();
  }

  private changeAuthState(isAuth = true): void {
    this.storageService.setItem(StorageKeysEnum.AUTHENTICATION, isAuth);
    this.authSubject$.next(isAuth);
    if (isAuth) {
      this.router.navigate(['']);
    }
  }

  private getAuthState(): boolean {
    return this.storageService.getItem(StorageKeysEnum.AUTHENTICATION) === 'true';
  }
}
