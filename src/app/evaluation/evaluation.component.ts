import { Component, Input } from '@angular/core';
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
  isEvaluating: boolean;

  @Input() updatedScores!: number[]
  

  constructor(private dataService:DataService){
    this.isEvaluating = false;
    this.retrieveUsers();

    console.log(dataService.currentUser);
  }

  public selectUser(user:User){
    this.selectedUser = user;
    this.updatedScores = new Array<number>(user.evaluation.topics.size);
  }

  public retrieveUsers(){
      this.users = this.dataService.getAllUsers();
      location.reload;
  }

  evaluateUser(user:User){
    console.log("LOGGINGN SCORES");
    if(this.selectedUser && this.isEvaluating){
      for(let i = 0;i<this.updatedScores.length;i++){
        if(this.updatedScores[i] == undefined){
          this.updatedScores[i] = 0;
        }
        console.log(this.updatedScores[i])
      }
      let temp = 0;
      let total = 0;
      this.selectedUser.evaluation.topics.forEach((evaltopic:EvaluationTopic, name:string)=>{
        console.log(name + " " + this.updatedScores[temp])
        evaltopic.score = this.updatedScores[temp];
        total = +total + +evaltopic.score;
        temp++; 
      });
      this.selectedUser.evaluation.totalScore = total;
      this.dataService.updateUser(this.selectedUser);
    }

    this.isEvaluating = !this.isEvaluating;
    console.log(user);
  }

  getEvaluateButtonText(){
    return this.isEvaluating? "Save" : "Evaluate";
  }

  calculateTotal(){
    let total:number = 0;
    this.selectedUser?.evaluation.topics.forEach((evaltopic:EvaluationTopic, name:string)=>{
      let score:number = evaltopic.score;
      total = +total + +evaltopic.score;  
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
