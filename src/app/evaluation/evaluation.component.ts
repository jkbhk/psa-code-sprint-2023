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
  selectedUser? : User;

  constructor(private dataService:DataService){
    this.retrieveUsers();

    console.log(dataService.currentUser);
  }

  public selectUser(user:User){
    this.selectedUser = user;
  }

  public retrieveUsers(){
      this.users = this.dataService.getAllUsers();
      location.reload;
  }

  public evaluateUser(user:User){
    console.log(user);
  }

  calculateTotal(){
    return 999
  }
}
