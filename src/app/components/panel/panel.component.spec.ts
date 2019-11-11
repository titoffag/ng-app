import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';

import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelComponent],
      imports: [FontAwesomeModule, ButtonModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should call find courses method when search button is clicked', async(() => {
    const spy = spyOn(component, 'findCourses').and.callThrough();
    const searchCoursesButtonElement = fixture.debugElement.query(
      By.css('.search-courses')
    );

    searchCoursesButtonElement.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  }));
});
