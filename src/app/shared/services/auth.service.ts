import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from './session/abstract-session.service';
import { StorageKeysEnum } from 'src/constants';

@Injectable()
export class AuthService {

  private authSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.checkAuth());
  public isAuth$: Observable<boolean> = this.authSubject$.asObservable();

  constructor(private storageService: StorageService) {
    console.log('create instance of Auth');
  }

  login(): void {
    this.storageService.setItem(StorageKeysEnum.AUTHETIFICATION, true);
    this.authSubject$.next(true);
  }

  logout(): void {
    this.storageService.setItem(StorageKeysEnum.AUTHETIFICATION, false);
    this.authSubject$.next(false);
  }

  private checkAuth(): boolean {
    return !!this.storageService.getItem(StorageKeysEnum.AUTHETIFICATION);
  }
}
