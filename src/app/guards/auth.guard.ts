import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { filter, Observable, tap } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuth$.pipe(
      filter((isAuth: boolean) => !!isAuth),
      tap(() => this.router.navigate(['auth'])),
    );
  }
}
