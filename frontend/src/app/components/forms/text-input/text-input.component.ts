import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {}

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, SharedModule],
  exports: [TextInputComponent]
})
export class TextInputModule {}
