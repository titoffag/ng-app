import { Component, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';
import { Author } from '@models/author';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor {
  private text: string;
  private onTouched: () => void = () => {};
  private onChange: (value: string) => void = () => {};

  get value(): string {
    return this.text;
  }

  set value(val: string) {
    if (val !== this.text) {
      this.text = val;
      this.onChange(val);
    }
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  writeValue(value: string | null) {
    if (value !== null) {
      this.value = value;
      this.onChange(value);
    }
  }
}

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [TextInputComponent]
})
export class TextInputModule {}
