import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public searchInput = '';
  public faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

  findCourses(): void {
    console.log(this.searchInput);
    this.searchInput = '';
  }

}
