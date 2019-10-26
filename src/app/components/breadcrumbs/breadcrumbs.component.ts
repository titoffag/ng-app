import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Courses' },
    ];
  }

}
