import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static emptySelector(control: AbstractControl): ValidationErrors | null {
    const error = {
      emptySelector: true
    };

    if (control.value === null || control.value === undefined) {
      return null;
    }

    return control.value.length > 0 ? null : error;
  }

  static negativeValue(control: AbstractControl): ValidationErrors | null {
    const error = {
      negativeValue: true
    };

    if (control.value === null || control.value === undefined) {
      return null;
    }

    return +control.value > 0 ? null : error;
  }
}
