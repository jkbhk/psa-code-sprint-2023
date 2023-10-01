import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.model';
import { EvaluationTopic } from '../evaluation-topic.model';

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
    let total = 0;
    this.selectedUser?.evaluation.topics.forEach((evaltopic:EvaluationTopic, name:string)=>{
      total += evaltopic.score; 
    });
    return total; 
  }
  calculateMax(){
    let total = 0;
    this.selectedUser?.evaluation.topics.forEach((evaltopic:EvaluationTopic, name:string)=>{
      total += evaltopic.maxScore; 
    });
    return total; 
  }
}
