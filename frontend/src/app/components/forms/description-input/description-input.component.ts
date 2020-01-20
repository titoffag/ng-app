import { Component, forwardRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';
import { BaseInput } from '@components/forms/base-input';

@Component({
  selector: 'app-description-input',
  templateUrl: './description-input.component.html',
  styleUrls: ['./description-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DescriptionInputComponent),
      multi: true
    }
  ]
})
export class DescriptionInputComponent extends BaseInput<string> {}

@NgModule({
  declarations: [DescriptionInputComponent],
  imports: [SharedModule],
  exports: [DescriptionInputComponent]
})
export class DescriptionInputModule {}
