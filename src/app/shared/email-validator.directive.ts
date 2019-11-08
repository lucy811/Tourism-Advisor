import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, ValidatorFn, Validator } from '@angular/forms';

@Directive({
   selector: '[customEmailValidator][ngModel]',
   providers: [
      {
     provide: NG_VALIDATORS,
     useExisting: EmailValidator,
      multi: true
    }
  ]
})

export class EmailValidator implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.customEmailValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  customEmailValidator(): ValidatorFn {
    return (c: FormControl) => {
      const EMAIL_REGEXP = /^[A-Z0-9a-z][A-Za-z0-9_\\-\\.]+@([A-Za-z0-9]+\.)+[A-Za-z0-9]{1,}$/;
      const isValid = EMAIL_REGEXP.test(c.value);
      if (isValid) {
       return null;
      } else {
       return {
         customEmailValidator: {
           valid: false
          }
       };
      }
    };
  }
}