import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthFormService {
  constructor() {}

  getPasswordConfirmControl(confirmValidator: ValidatorFn): FormControl<boolean | null> {
    return new FormControl(null, [
      Validators.required,
      confirmValidator,
    ]);
  }

  getPasswordFormControl(): FormControl<string | null> {
    return new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]);
  }

  getLoginFormControl(): FormControl<string | null> {
    return new FormControl(null,
      [
        Validators.email,
        Validators.required
      ]
    );
  }

  getPrivacyPolicyFormControl(): FormControl<boolean> {
    return new FormControl(false, {
      nonNullable: true,
      validators: Validators.required,
    });
  }

  getOffersInformationFormControl(): FormControl<boolean> {
    return new FormControl(false, { nonNullable: true });
  }
}
