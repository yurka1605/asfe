import { AbstractControl } from "@angular/forms";

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
