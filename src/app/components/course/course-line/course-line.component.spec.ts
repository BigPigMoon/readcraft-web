import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLineComponent } from './course-line.component';

describe('CourseLineComponent', () => {
  let component: CourseLineComponent;
  let fixture: ComponentFixture<CourseLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseLineComponent]
    });
    fixture = TestBed.createComponent(CourseLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
