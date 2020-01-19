import { Component, forwardRef, NgModule } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SharedModule } from 'src/app/shared.module';
import { AuthorsService } from '@services/authors.service';
import { Author } from '@models/author';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: (control: FormControl) => {
        const error = {
          rangeError: {
            given: control.value
          }
        };

        return control.value && control.value.length > 0 ? null : error;
      },
      multi: true
    }
  ]
})
export class AutocompleteComponent implements ControlValueAccessor {
  texts: Author[] = [];
  results$: Observable<Author[]>;

  private onTouched: () => void = () => {};
  private onChange: (value: Author[]) => void = () => {};

  constructor(private authorsService: AuthorsService) {}

  get value(): Author[] {
    return this.texts;
  }

  set value(val: Author[]) {
    if (val.length !== this.texts.length) {
      this.texts = val;
      this.onChange(val);
    }
  }

  registerOnChange(fn: (value: Author[]) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: Author[] | null) {
    if (value !== null) {
      this.texts.push(...value);
      this.onChange(value);
    }
  }

  search(event) {
    this.results$ = this.authorsService.getResults(event.query).pipe(
      map(authors =>
        authors.filter(author => {
          let isNotSelectedOption = true;

          this.texts.forEach(text => {
            if (author.id === text.id) {
              isNotSelectedOption = false;
            }
          });

          return isNotSelectedOption;
        })
      )
    );
  }
}

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [SharedModule, FormsModule],
  exports: [AutocompleteComponent]
})
export class CustomAutocompleteModule {}
