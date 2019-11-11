import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbsComponent],
      imports: [BreadcrumbModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component with empty items list', async(() => {
    component.items = [];

    fixture.detectChanges();

    const menuItemNodes = fixture.debugElement.queryAll(By.css('li'));

    expect(menuItemNodes.length).toEqual(0);
  }));

  it('should create the component with crumbs', async(() => {
    const crumbs = [{ label: 'Courses', url: '/courses-list' }];
    component.items = crumbs;

    fixture.detectChanges();

    const menuItemNodes = fixture.debugElement.queryAllNodes(By.css('li'));

    expect(menuItemNodes.length).toEqual(crumbs.length);
  }));

  it('should create the component when items is undefined', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should create the component when items is null', async(() => {
    component.items = null;

    fixture.detectChanges();

    expect(component).toBeTruthy();
  }));
});
