import {
  Component,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input,
  DoCheck
} from '@angular/core';

import { Course } from 'src/app/models';
import { SearchByListPipe } from 'src/app/pipes';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input() searchTerm: string;

  courses: Course[];

  constructor() {
    console.log('[Course List] constructor call');
  }

  ngOnInit() {
    console.log('[Course List] ngOnInit hook call');

    this.courses = [
      new Course(
        new Date('2019-11-05T00:00:00.000Z'),
        'Services, DI, Modules, Lazy Loading.',
        45,
        '4',
        '4. Modules & Services',
        false
      ),
      new Course(
        new Date('2019-11-07T00:00:00.000Z'),
        'Zone.js, Flow, Immutable data structure, Push strategy.',
        100,
        '5',
        '5. Change detection',
        true
      ),
      new Course(
        new Date('2019-11-10T00:00:00.000Z'),
        'Routing, Lazy and preloading, CanActivate, CanDeactivate.',
        15,
        '6',
        '6. Routing',
        false
      ),
      new Course(
        new Date('2019-10-20T00:00:00.000Z'),
        'Webpack, AngularCLI, TypeScript.',
        59,
        '1',
        '1. Prerequisites',
        true
      ),
      new Course(
        new Date('2019-10-30T00:00:00.000Z'),
        'Components, Lifecycle, Template DSL and data-binding, Custom component.',
        1440,
        '2',
        '2. Components',
        false
      ),
      new Course(
        new Date('2019-11-03T00:00:00.000Z'),
        'Directives, Types of directives, Built-in directives, Custom directive',
        70,
        '3',
        '3. Directives',
        true
      )
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

  trackByCourseId(index: number, course: Course): string | null {
    return course ? course.id : null;
  }

  loadMoreCourses(event: MouseEvent) {
    console.log('load more courses');
    event.preventDefault();
  }

  onDeletedCourse(id: string) {
    console.log('course deleted with id:', id);
    this.courses = this.courses.filter(course => course.id !== id);
  }
}
