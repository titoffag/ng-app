import { Component, NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}

@NgModule({
  declarations: [FooterComponent],
  imports: [SharedModule],
  exports: [FooterComponent]
})
export class FooterComponentModule {}
