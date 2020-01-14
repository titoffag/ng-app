import { Component, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}

@NgModule({
  declarations: [FooterComponent],
  imports: [TranslateModule],
  exports: [FooterComponent]
})
export class FooterComponentModule {}
