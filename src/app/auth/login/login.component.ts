import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginForm } from 'src/app/entities';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthFormService } from './../services/auth-form.service';

@Component({
  selector: 'asfe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup<LoginForm> = this.initializeForm();

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

  private initializeForm(): FormGroup<LoginForm> {
    return new FormGroup<LoginForm>({
      login: this.authFormService.getLoginFormControl(),
      password: this.authFormService.getPasswordFormControl(),
    });
  }
}
