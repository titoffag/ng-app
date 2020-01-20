import { Component, forwardRef, NgModule } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SharedModule } from 'src/app/shared.module';
import { AuthorsService } from '@services/authors.service';
import { Author } from '@models/author';
import { BaseInput } from '@components/forms/base-input';
import { validateEmptySelector } from '@components/forms/validators';

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
      useValue: validateEmptySelector,
      multi: true
    }
  ]
})
export class AutocompleteComponent extends BaseInput<Author[]> {
  results$: Observable<Author[]>;

  constructor(private authorsService: AuthorsService) {
    super();
  }

  search(event) {
    this.results$ = this.authorsService.getResults(event.query).pipe(
      map(authors =>
        authors.filter(author => {
          let isNotSelectedOption = true;

          if (Array.isArray(this.value)) {
            this.value.forEach(text => {
              if (author.id === text.id) {
                isNotSelectedOption = false;
              }
            });
          }

          return isNotSelectedOption;
        })
      )
    );
  }
}

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [SharedModule],
  exports: [AutocompleteComponent]
})
export class CustomAutocompleteModule {}
