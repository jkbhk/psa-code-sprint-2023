import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTrackerComponent } from './course-tracker.component';

describe('CourseTrackerComponent', () => {
  let component: CourseTrackerComponent;
  let fixture: ComponentFixture<CourseTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseTrackerComponent]
    });
    fixture = TestBed.createComponent(CourseTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
