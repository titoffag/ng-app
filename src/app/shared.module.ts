import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { HighlightBorderDirectiveModule } from 'src/app/directives';
import {
  CourseDurationPipeModule,
  OrderListByPipeModule,
  SearchByListPipeModule
} from 'src/app/pipes';

@NgModule({
  exports: [
    // Angular modules
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    // PrimeNG modules
    CardModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    // custom directives and pipes
    HighlightBorderDirectiveModule,
    CourseDurationPipeModule,
    OrderListByPipeModule,
    SearchByListPipeModule
  ]
})
export class SharedModule {}
