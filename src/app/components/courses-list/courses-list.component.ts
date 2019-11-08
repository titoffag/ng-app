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
  filteredList: Course[];

  searchByListPipe: SearchByListPipe;

  constructor() {
    console.log('[Course List] constructor call');
  }

  ngOnInit() {
    console.log('[Course List] ngOnInit hook call');

    this.courses = [
      new Course(
        '11/05/2019',
        'Services, DI, Modules, Lazy Loading.',
        45,
        '4',
        '4. Modules & Services',
        false
      ),
      new Course(
        '11/07/2019',
        'Zone.js, Flow, Immutable data structure, Push strategy.',
        100,
        '5',
        '5. Change detection',
        true
      ),
      new Course(
        '11/10/2019',
        'Routing, Lazy and preloading, CanActivate, CanDeactivate.',
        15,
        '6',
        '6. Routing',
        false
      ),
      new Course(
        '10/20/2019',
        'Webpack, AngularCLI, TypeScript.',
        59,
        '1',
        '1. Prerequisites',
        true
      ),
      new Course(
        '10/30/2019',
        'Components, Lifecycle, Template DSL and data-binding, Custom component.',
        1440,
        '2',
        '2. Components',
        false
      ),
      new Course(
        '11/03/2019',
        'Directives, Types of directives, Built-in directives, Custom directive',
        70,
        '3',
        '3. Directives',
        true
      )
    ];

    this.searchByListPipe = new SearchByListPipe();
  }

  ngDoCheck() {
    console.log('[Courses List] ngDoCheck hook call');
    this.filteredList = this.searchByListPipe.transform(
      this.courses,
      this.searchTerm
    );
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
