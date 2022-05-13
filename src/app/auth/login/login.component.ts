import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FORMS_CONTROL_VALIDATORS } from 'src/constants';

@Component({
  selector: 'asfe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  public loginForm: FormGroup;

  constructor(public authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) {
    this.loginForm = this.initializeForm();
  }

  ngAfterViewInit(): void {
    console.log(this.loginForm);
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login().subscribe(res => {
        if (res) {
          this.router.navigate(['']);
        }
      });
    }
  }

  private initializeForm(): FormGroup {
    const {maxLength, minLength} = FORMS_CONTROL_VALIDATORS['PASSWORD'];
    return new FormGroup({
      login: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(<number>minLength),
          Validators.maxLength(<number>maxLength),
        ]
      ),
      privacyPolicy: new FormControl(false, [Validators.required]),
      offersInformation: new FormControl(false),
    });
  }
}
