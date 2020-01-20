import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent {
  constructor(private translate: TranslateService) {}

  get languages() {
    return this.translate.getLangs();
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}

@NgModule({
  declarations: [LanguagePickerComponent],
  imports: [CommonModule],
  exports: [LanguagePickerComponent]
})
export class LanguagePickerModule {}
