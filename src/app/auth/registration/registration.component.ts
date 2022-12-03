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
import { RegistrationForm } from 'src/app/entities';

export function confirmPasswordValidator(passwordControl: FormControl<string | null>): ValidatorFn {
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
  public form: FormGroup<RegistrationForm> = this.initializeForm();
  passwordInputType = InputTypeEnum.PASSWORD;

  constructor(
    private authService: AuthService,
    private authFormService: AuthFormService,
  ) {}

  register(): void {
    if (this.form.valid) {
      this.authService.register();
    }
  }

  isSubmitDisabled(): boolean {
    return this.form.invalid || !this.form.value.privacyPolicy;
  }

  private initializeForm(): FormGroup<RegistrationForm> {
    const password = this.authFormService.getPasswordFormControl();
    const passwordConfirm = this.authFormService.getPasswordConfirmControl(confirmPasswordValidator(password));
    return new FormGroup<RegistrationForm>({
      login: this.authFormService.getLoginFormControl(),
      password,
      passwordConfirm,
      privacyPolicy: this.authFormService.getPrivacyPolicyFormControl(),
      offersInformation: this.authFormService.getPrivacyPolicyFormControl(),
    });
  }
}
