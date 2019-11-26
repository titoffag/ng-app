import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListViewComponent } from './courses-list-view.component';

describe('CoursesListPageComponent', () => {
  let component: CoursesListViewComponent;
  let fixture: ComponentFixture<CoursesListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('checks for panel and list existence');
});
