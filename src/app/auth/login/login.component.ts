import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'asfe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(public authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      login: new FormControl('',
        [
          Validators.email,
          Validators.required
        ]
      ),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
        ]
      ),
      privacyPolicy: new FormControl(false),
      offersInformation: new FormControl(false),
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login();
      this.router.navigate(['']);
    }
  }
}
