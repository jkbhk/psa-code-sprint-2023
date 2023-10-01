import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course-tracker',
  templateUrl: './course-tracker.component.html',
  styleUrls: ['./course-tracker.component.css']
})
export class CourseTrackerComponent {

  courses;

  constructor(private dataService:DataService){
    this.courses = dataService.currentUser?.courses;
    console.log(this.courses);
  }

  public getAllCourses(){

  }


}
