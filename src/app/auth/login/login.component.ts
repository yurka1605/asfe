import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthFormService } from './../services/auth-form.service';

@Component({
  selector: 'asfe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: UntypedFormGroup = this.initializeForm();

  constructor(
    private authService: AuthService,
    private authFormService: AuthFormService,
    private router: Router,
  ) {
  }

  login(): void {
    if (this.form.valid) {
      this.authService.login()
        .pipe(take(1))
        .subscribe(res => {
          if (res) {
            this.router.navigate(['']);
          }
        }
      );
    }
  }

  private initializeForm(): UntypedFormGroup {
    return new UntypedFormGroup({
      login: this.authFormService.getLoginFormControl(),
      password: this.authFormService.getPasswordFormControl(),
    });
  }
}
