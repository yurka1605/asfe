import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.authService.isAuth$.pipe(
      tap((isAuth: boolean) => {
        if (!isAuth) {
          this.router.navigate(['auth']);
        }
      })
    );
  }
}
