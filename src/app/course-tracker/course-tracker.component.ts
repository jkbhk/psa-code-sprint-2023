import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-course-tracker',
  templateUrl: './course-tracker.component.html',
  styleUrls: ['./course-tracker.component.css']
})
export class CourseTrackerComponent {

  users: Map<string,User>;

  constructor(private dataService:DataService){
    this.users = this.dataService.getAllUsers()
  }


}