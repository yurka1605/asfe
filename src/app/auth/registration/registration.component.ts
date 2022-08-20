import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { InputTypeEnum } from 'src/constants';
import { AuthFormService } from '../services/auth-form.service';
import { Router } from '@angular/router';

export function confirmPasswordValidator(passwordControl: FormControl): ValidatorFn {
  return ({ value }: AbstractControl): ValidationErrors | null => {
    return passwordControl.value !== value ? { passwordConfirm: { value } } : null;
  };
}

@Component({
  selector: 'asfe-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public form: FormGroup = this.initializeForm();
  passwordInputType = InputTypeEnum.PASSWORD;

  constructor(
    private router: Router,
    private authService: AuthService,
    private authFormService: AuthFormService,
  ) {}

  register(): void {
    if (this.form.valid) {
      this.authService.register().subscribe(res => {
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
    const password = this.authFormService.getPasswordFormControl();
    const passwordConfirm = this.authFormService.getPasswordConfirmControl(confirmPasswordValidator(password));
    return new FormGroup({
      login: this.authFormService.getLoginFormControl(),
      password,
      passwordConfirm,
      privacyPolicy: this.authFormService.getPrivacyPolicyFormControl(),
      offersInformation: this.authFormService.getPrivacyPolicyFormControl(),
    });
  }
}
