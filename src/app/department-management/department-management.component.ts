import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-department-management',
  templateUrl: './department-management.component.html',
  styleUrls: ['./department-management.component.css']
})
export class DepartmentManagementComponent {
  
  managed;

  constructor(public dataService:DataService){
    alert("asfsda")
    this.managed = dataService.getDepartmentHead()?.managing
    this.managed!.forEach(element => {
      console.log(element);
    });
  }

  
}
