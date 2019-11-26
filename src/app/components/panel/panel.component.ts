import { Component, Output, EventEmitter, NgModule } from '@angular/core';
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

  findCourses() {
    console.log(this.searchInput);
    this.searchTerm.emit(this.searchInput);
  }
}

@NgModule({
  declarations: [PanelComponent],
  imports: [SharedModule],
  exports: [PanelComponent]
})
export class PanelComponentModule {}
