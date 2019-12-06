import { Injectable } from '@angular/core';

import { Course } from '@models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  store: Course[] = [
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

  getAll(): Course[] {
    return this.store;
  }

  getBy(id: string): Course {
    const foundCourse = this.store.find(item => item.id === id);

    if (!foundCourse) {
      throw new Error('Cannot find course in store');
    }

    return foundCourse;
  }

  create(course: Course): Course[] {
    this.store = [...this.store, course];

    return this.store;
  }

  update(course: Course): Course[] {
    this.store = this.store.map(item =>
      item.id === course.id ? course : item
    );

    return this.store;
  }

  remove(id: string): Course[] {
    this.store = this.store.filter(item => item.id !== id);

    return this.store;
  }
}
