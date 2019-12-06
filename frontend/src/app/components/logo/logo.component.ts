import { Component, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

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
  imports: [FontAwesomeModule],
  exports: [LogoComponent]
})
export class LogoComponentModule {}
