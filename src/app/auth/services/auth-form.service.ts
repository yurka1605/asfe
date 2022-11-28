import { UntypedFormControl, ValidatorFn, Validators } from '@angular/forms';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthFormService {
  constructor() {}

  getPasswordConfirmControl(confirmValidator: ValidatorFn): UntypedFormControl {
    return new UntypedFormControl(null, [
      Validators.required,
      confirmValidator,
    ]);
  }

  getPasswordFormControl(): UntypedFormControl {
    return new UntypedFormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]);
  }

  getLoginFormControl(): UntypedFormControl {
    return new UntypedFormControl(null,
      [
        Validators.email,
        Validators.required
      ]
    );
  }

  getPrivacyPolicyFormControl(): UntypedFormControl {
    return new UntypedFormControl(false, Validators.required);
  }

  getOffersInformationFormControl(): UntypedFormControl {
    return new UntypedFormControl(false);
  }
}
