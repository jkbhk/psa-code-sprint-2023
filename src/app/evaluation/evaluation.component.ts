import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {
  users? : Map<string, User>;

  constructor(private dataService:DataService){
    this.retrieveUsers();
  }

  public retrieveUsers(){
      this.users = this.dataService.getAllUsers();
      location.reload;
  }
}
