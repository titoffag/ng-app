import { Component, NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-not-found-view',
  templateUrl: './not-found-view.component.html',
  styleUrls: ['./not-found-view.component.scss']
})
export class NotFoundViewComponent {}

@NgModule({
  declarations: [NotFoundViewComponent],
  imports: [SharedModule],
  exports: [NotFoundViewComponent]
})
export class NotFoundViewModule {}
