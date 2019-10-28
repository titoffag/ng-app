import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  searchInput = '';
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

  findCourses() {
    console.log(this.searchInput);
    this.searchInput = '';
  }

}
