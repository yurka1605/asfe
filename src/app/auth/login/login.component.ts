import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FORMS_CONTROL_VALIDATORS } from 'src/constants';

@Component({
  selector: 'asfe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup = this.initializeForm();

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  login(): void {
    if (this.form.valid) {
      this.authService.login().subscribe(res => {
        if (res) {
          this.router.navigate(['']);
        }
      });
    }
  }

  isSubmitDisabled(): boolean {
    return this.form.invalid || !this.form.value.privacyPolicy;
  }

  private initializeForm(): FormGroup {
    const passwordValidator = FORMS_CONTROL_VALIDATORS['PASSWORD'];
    return new FormGroup({
      login: new FormControl('',
        [
          Validators.email,
          Validators.required
      ]),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(<number>passwordValidator.minLength),
          Validators.maxLength(<number>passwordValidator.maxLength),
        ]
      ),
      privacyPolicy: new FormControl(false, Validators.required),
      offersInformation: new FormControl(false),
    });
  }
}
