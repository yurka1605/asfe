import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from './session/abstract-session.service';
import { StorageKeysEnum } from 'src/constants';

@Injectable()
export class AuthService {

  private authSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.checkStorageAuth());
  public isAuth$: Observable<boolean> = this.authSubject$.asObservable();

  constructor(private storageService: StorageService) {}

  login(): Observable<boolean> {
    return this.changeAuthState(true);
  }

  logout(): Observable<boolean> {
    return this.changeAuthState(false);
  }

  private changeAuthState(isAuth: boolean): Observable<boolean> {
    try {
      this.storageService.setItem(StorageKeysEnum.AUTHETIFICATION, isAuth);
      this.authSubject$.next(isAuth);
      return of(true);
    } catch (error) {
      console.log(error);
      return of(false);
    }
  }

  private checkStorageAuth(): boolean {
    return this.storageService.getItem(StorageKeysEnum.AUTHETIFICATION) === 'true';
  }
}
