import { Component, forwardRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { SharedModule } from 'src/app/shared.module';
import { BaseInput } from '@components/forms/base-input';

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
export class TextInputComponent extends BaseInput<string> {}

@NgModule({
  declarations: [TextInputComponent],
  imports: [SharedModule],
  exports: [TextInputComponent]
})
export class TextInputModule {}
