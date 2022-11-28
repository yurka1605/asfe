import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
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
  ) {
  }

  login(): void {
    if (this.form.valid) {
      this.authService.login();
    }
  }

  private initializeForm(): UntypedFormGroup {
    return new UntypedFormGroup({
      login: this.authFormService.getLoginFormControl(),
      password: this.authFormService.getPasswordFormControl(),
    });
  }
}
