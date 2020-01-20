import { ControlValueAccessor } from '@angular/forms';

export abstract class BaseInput<T> implements ControlValueAccessor {
  private currentValue: T;
  private onTouched: () => void = () => {};
  private onChange: (value: T) => void = () => {};

  get value(): T {
    return this.currentValue;
  }

  set value(newValue: T) {
    let condition: boolean;
    if (Array.isArray(newValue) && Array.isArray(this.currentValue)) {
      condition = newValue.length !== this.currentValue.length;
    } else {
      condition = newValue !== this.currentValue;
    }

    if (condition) {
      this.currentValue = newValue;
      this.onChange(newValue);
    }
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  registerOnChange(fn: (value: T) => void) {
    this.onChange = fn;
  }

  writeValue(newValue: T | null) {
    if (newValue !== null) {
      if (Array.isArray(newValue) && Array.isArray(this.currentValue)) {
        this.currentValue.push(...newValue);
      } else {
        this.value = newValue;
      }
      this.onChange(newValue);
    }
  }
}
