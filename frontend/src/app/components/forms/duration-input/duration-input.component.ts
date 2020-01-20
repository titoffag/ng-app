import { Component, forwardRef, NgModule } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';
import { BaseInput } from '@components/forms/base-input';
import { CustomValidators } from '@components/forms/custom-validators';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: CustomValidators.negativeValue,
      multi: true
    }
  ]
})
export class DurationInputComponent extends BaseInput<number> {}

@NgModule({
  declarations: [DurationInputComponent],
  imports: [SharedModule],
  exports: [DurationInputComponent]
})
export class DurationInputModule {}
