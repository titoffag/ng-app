import { Component, forwardRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';
import { BaseInput } from '@components/forms/base-input';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent extends BaseInput<Date> {}

@NgModule({
  declarations: [DateInputComponent],
  imports: [SharedModule],
  exports: [DateInputComponent]
})
export class DateInputModule {}
