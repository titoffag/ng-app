import { Component, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
