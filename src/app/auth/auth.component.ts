import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable, pluck } from 'rxjs';

enum AuthEnum {
  LOGIN = 'login',
  REGISTRATION = 'registration',
  DEFAULT = 'default',
}

@Component({
  selector: 'asfe-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements DoCheck {

  public AuthEnum = AuthEnum;
  public currentRoute = AuthEnum.DEFAULT;
  public isActiveChildRoutes = false;

  constructor(public authService: AuthService, private route: ActivatedRoute) {
    // const childrenRoute = this.route.;
    // console.log(childrenRoute);
    // if (childrenRoute) {
    //   childrenRoute.pipe().subscribe(res => console.log(res));
    // }
  }

  ngDoCheck(): void {
    this.isActiveChildRoutes = location.pathname.split('/').length > 2;
  }
}
