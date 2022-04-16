import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthEnum } from '../entities/auth';

@Component({
  selector: 'asfe-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements DoCheck {

  public isActiveChildRoutes = false;

  constructor(public authService: AuthService) {}

  ngDoCheck(): void {
    this.isActiveChildRoutes = location.pathname.split('/').length > 2;
  }
}
