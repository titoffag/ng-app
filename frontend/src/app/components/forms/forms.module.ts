import { NgModule } from '@angular/core';

import { TextInputModule } from '@components/forms/text-input/text-input.component';
import { DescriptionInputModule } from '@components/forms/description-input/description-input.component';
import { DateInputModule } from '@components/forms/date-input/date-input.component';
import { DurationInputModule } from '@components/forms/duration-input/duration-input.component';
import { CustomAutocompleteModule } from '@components/forms/autocomplete/autocomplete.component';

@NgModule({
  exports: [
    // custom form components
    TextInputModule,
    DescriptionInputModule,
    DateInputModule,
    DurationInputModule,
    CustomAutocompleteModule
  ]
})
export class CustomFormsModule {}
