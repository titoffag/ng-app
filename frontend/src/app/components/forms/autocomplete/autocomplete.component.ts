import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SharedModule } from 'src/app/shared.module';
import { AuthorsService } from '@services/authors.service';
import { Author } from '@models/author';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  texts: Author[] = [];
  results$: Observable<Author[]>;

  constructor(private authorsService: AuthorsService) {}

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
