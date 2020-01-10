import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-description-input',
  templateUrl: './description-input.component.html',
  styleUrls: ['./description-input.component.scss']
})
export class DescriptionInputComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [DescriptionInputComponent],
  imports: [CommonModule, SharedModule],
  exports: [DescriptionInputComponent]
})
export class DescriptionInputModule {}
