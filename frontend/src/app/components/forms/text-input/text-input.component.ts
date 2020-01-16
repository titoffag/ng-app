import { Component, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';

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
  private value: string;
  private onTouched: () => void = () => {};
  private onChange: (value: string) => void = () => {};

  registerOnChange(fn: () => void) {
    this.onTouched = fn;
  }

  registerOnTouched(fn: (value: string) => void) {
    this.onChange = val => {
      console.log('onChange', val);
      fn(val);
    };
  }

  writeValue(value: string) {
    this.value = value;
    this.onChange(value);
  }
}

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [TextInputComponent]
})
export class TextInputModule {}
