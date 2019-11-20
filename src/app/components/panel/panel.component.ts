import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  @Output() searchTerm = new EventEmitter<string>();

  searchInput = '';
  faPlus = faPlus;

  constructor(private router: Router) {}

  addCourse() {
    this.router.navigate(['courses', 'new']);
  }

  findCourses() {
    this.searchTerm.emit(this.searchInput);
  }
}

@NgModule({
  declarations: [PanelComponent],
  imports: [SharedModule],
  exports: [PanelComponent]
})
export class PanelComponentModule {}
