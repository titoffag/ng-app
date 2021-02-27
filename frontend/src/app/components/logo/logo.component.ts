import { Component, NgModule } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  faPlayCircle = faPlayCircle;
}

@NgModule({
  declarations: [LogoComponent],
  imports: [SharedModule, RouterModule],
  exports: [LogoComponent]
})
export class LogoComponentModule {}
