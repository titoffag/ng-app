import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
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

import { HighlightBorderDirectiveModule } from '@directives/highlight-border.directive';
import {
  CourseDurationPipeModule,
  OrderListByPipeModule,
  SearchByListPipeModule
} from '@pipes/index';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  exports: [
    // Angular modules
    CommonModule,
    FormsModule,
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
    // custom directives and pipes
    HighlightBorderDirectiveModule,
    CourseDurationPipeModule,
    OrderListByPipeModule,
    SearchByListPipeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
