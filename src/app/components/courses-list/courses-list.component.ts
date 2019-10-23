import { Component, OnInit } from '@angular/core';

import { ICourse } from 'src/app/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: ICourse[] = [
    {
      creationDate: '05/29/2018',
      description: 'Webpack, AngularCLI, TypeScript.',
      duration: 88,
      id: '1',
      title: '1. Prerequisites'
    },
    {
      creationDate: '06/10/2018',
      description: 'Components, Lifecycle, Template DSL and data-binding, Custom component.',
      duration: 27,
      id: '2',
      title: '2. Components'
    },
    {
      creationDate: '07/14/2018',
      description: 'Directives, Types of directives, Built-in directives, Custom directive',
      duration: 70,
      id: '3',
      title: '3. Directives'
    },
    {
      creationDate: '07/15/2018',
      description: 'Services, DI, Modules, Lazy Loading.',
      duration: 45,
      id: '4',
      title: '4. Modules & Services'
    },
    {
      creationDate: '07/16/2018',
      description: 'Zone.js, Flow, Immutable data structure, Push strategy.',
      duration: 100,
      id: '5',
      title: '5. Change detection'
    },
    {
      creationDate: '08/21/2018',
      description: 'Routing, Lazy and preloading, CanActivate, CanDeactivate.',
      duration: 15,
      id: '6',
      title: '6. Routing'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
