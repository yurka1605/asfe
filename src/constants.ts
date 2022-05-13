import { IFormControlValidatorsConfig } from "./app/entities";

export const enum StorageKeysEnum {
  AUTHETIFICATION = "AUTHETIFICATION",
};

export const enum InputTypeEnum {
  TEXT = 'text',
  PASSWORD = 'password',
}

export const FORMS_CONTROL_VALIDATORS: { [key: string]: IFormControlValidatorsConfig } = {
  PASSWORD: {
    maxLength: 20,
    minLength: 8,
  }
}
