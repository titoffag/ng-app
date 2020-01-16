import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TranslateModule } from '@ngx-translate/core';

import { HighlightBorderDirectiveModule } from '@directives/highlight-border.directive';
import {
  CourseDurationPipeModule,
  OrderListByPipeModule,
  SearchByListPipeModule
} from '@pipes/index';
import { TokenInterceptor, LoadingInterceptor } from '@interceptors/index';

@NgModule({
  exports: [
    // Angular modules
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    // PrimeNG modules
    CardModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    KeyFilterModule,
    CalendarModule,
    ProgressSpinnerModule,
    // custom directives and pipes
    HighlightBorderDirectiveModule,
    CourseDurationPipeModule,
    OrderListByPipeModule,
    SearchByListPipeModule,
    // translate module
    TranslateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
