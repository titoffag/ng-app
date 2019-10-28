import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  courses: Course[];

  constructor() {
    console.log('[Course List] constructor call');
  }

  ngOnInit() {
    console.log('[Course List] ngOnInit hook call');

    this.courses = [
      new Course(
        '05/29/2018',
        'Webpack, AngularCLI, TypeScript.',
        88,
        '1',
        '1. Prerequisites',
      ),
      new Course(
        '06/10/2018',
        'Components, Lifecycle, Template DSL and data-binding, Custom component.',
        27,
        '2',
        '2. Components',
      ),
      new Course(
        '07/14/2018',
        'Directives, Types of directives, Built-in directives, Custom directive',
        70,
        '3',
        '3. Directives',
      ),
      new Course(
        '07/15/2018',
        'Services, DI, Modules, Lazy Loading.',
        45,
        '4',
        '4. Modules & Services',
      ),
      new Course(
        '07/16/2018',
        'Zone.js, Flow, Immutable data structure, Push strategy.',
        100,
        '5',
        '5. Change detection',
      ),
      new Course(
        '08/21/2018',
        'Routing, Lazy and preloading, CanActivate, CanDeactivate.',
        15,
        '6',
        '6. Routing',
      ),
    ];
  }

  ngDoCheck() {
    console.log('[Courses List] ngDoCheck hook call');
  }

  ngAfterContentInit() {
    console.log('[Courses List] ngAfterContentInit hook call');
  }

  ngAfterContentChecked() {
    console.log('[Courses List] ngAfterContentChecked hook call');
  }

  ngAfterViewInit() {
    console.log('[Courses List] ngAfterViewInit hook call');
  }

  ngAfterViewChecked() {
    console.log('[Courses List] ngAfterViewChecked hook call');
  }

  loadMoreCourses(event: MouseEvent) {
    event.preventDefault();
    console.log('load more courses');
  }

  onDeletedCourse(id: string) {
    console.log('course deleted with id:', id);
    this.courses = this.courses.filter(course => course.id !== id);
  }

}
