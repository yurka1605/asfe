import { AbstractControl, FormControl } from "@angular/forms";

export enum AuthEnum {
  LOGIN = 'login',
  REGISTRATION = 'registration',
  DEFAULT = 'default',
}

export interface IFormControlValidatorsConfig {
  minLength?: number;
  maxLength?: number;
  regExp?: RegExp;
}


export interface IFormConfig {
  [key: string]: AbstractControl;
}

export interface LoginForm {
  login: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface RegistrationForm extends LoginForm {
  passwordConfirm: FormControl<boolean | null>;
  privacyPolicy: FormControl<boolean>;
  offersInformation?: FormControl<boolean>;
}
