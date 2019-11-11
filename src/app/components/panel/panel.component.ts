import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  searchInput = '';
  faPlus = faPlus;

  findCourses() {
    console.log(this.searchInput);
    this.searchInput = '';
  }
}
