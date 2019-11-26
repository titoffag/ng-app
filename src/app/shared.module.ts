import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { HighlightBorderDirectiveModule } from '@directives/highlight-border.directive';
import {
  CourseDurationPipeModule,
  OrderListByPipeModule,
  SearchByListPipeModule
} from '@pipes/index';

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
    PasswordModule,
    ConfirmDialogModule,
    // custom directives and pipes
    HighlightBorderDirectiveModule,
    CourseDurationPipeModule,
    OrderListByPipeModule,
    SearchByListPipeModule
  ]
})
export class SharedModule {}
