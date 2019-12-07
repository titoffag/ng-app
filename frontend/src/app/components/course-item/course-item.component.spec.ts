import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { Course } from '@models/course';
import { HighlightBorderDirective } from '@directives/highlight-border.directive';
import { CourseDurationPipe } from '@pipes/course-duration.pipe';

import { CourseItemComponent } from './course-item.component';

@Component({
  selector: `app-host-component`
  // template: `
  //   <app-course-item [course]="course" (deletedCourse)="onDelete($event)">
  //   </app-course-item>
  // `
})
class TestHostComponent {
  @ViewChild(CourseItemComponent, { static: true })
  componentUnderTestComponent: CourseItemComponent;

  course = new Course(
    new Date('2018-05-29T00:00:00.000Z'),
    'Webpack, AngularCLI, TypeScript.',
    88,
    1,
    '1. Prerequisites',
    true
  );

  onDelete(id: string) {
    return id;
  }
}

describe('CourseItemComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        CourseItemComponent,
        HighlightBorderDirective,
        CourseDurationPipe
      ],
      imports: [FontAwesomeModule, ButtonModule, CardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create the component', async(() => {
    expect(testHostComponent).toBeTruthy();
  }));

  it('should edit course method when edit button is clicked', async(() => {
    const spy = spyOn(
      testHostComponent.componentUnderTestComponent,
      'editCourse'
    ).and.callThrough();
    const editCourseButtonElement = testHostFixture.debugElement.query(
      By.css('.edit-course-button')
    );

    editCourseButtonElement.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  }));

  it('should delete course method when delete button is clicked', async(() => {
    const spy = spyOn(testHostComponent, 'onDelete').and.callThrough();
    const deleteCourseButtonElement = testHostFixture.debugElement.query(
      By.css('.delete-course-button')
    );

    deleteCourseButtonElement.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalledWith('1');
  }));
});
