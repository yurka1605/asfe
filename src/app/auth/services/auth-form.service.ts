import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthFormService {
  constructor() {}

  getPasswordConfirmControl(confirmValidator: ValidatorFn): FormControl {
    return new FormControl(null, [
      Validators.required,
      confirmValidator,
    ]);
  }

  getPasswordFormControl(): FormControl {
    return new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]);
  }

  getLoginFormControl(): FormControl {
    return new FormControl(null,
      [
        Validators.email,
        Validators.required
      ]
    );
  }

  getPrivacyPolicyFormControl(): FormControl {
    return new FormControl(false, Validators.required);
  }

  getOffersInformationFormControl(): FormControl {
    return new FormControl(false);
  }
}
