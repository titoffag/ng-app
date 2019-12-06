import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseViewComponent } from './edit-course-view.component';

describe('EditCourseViewComponent', () => {
  let component: EditCourseViewComponent;
  let fixture: ComponentFixture<EditCourseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditCourseViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
