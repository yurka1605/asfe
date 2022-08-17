import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'asfe-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements DoCheck {
  public isActiveChildRoutes = false;

  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
    this.isActiveChildRoutes = location.pathname.split('/').length > 2;
  }

  isAuth(): Observable<boolean> {
    return this.authService.isAuth$;
  }

  logout(): void {
    this.authService.logout();
  }
}
