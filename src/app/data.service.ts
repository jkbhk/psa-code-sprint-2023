import { Injectable } from '@angular/core';
import { User } from './user.model';
import { EvaluationTopic } from './evaluation-topic.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  users = new Map<string,User>();

  constructor() { 
    // init mock data
    this.createUser("Alice","alice@gmail.com");
    this.createUser("Bob","bob@gmail.com");
    this.createUser("Charlie","charlie@gmail.com");
  }

  getAllUsers(){
    return this.users;
  }

  getUserByEmail(email:string){
    return this.users.get(email);
  }

  createUser(name:string, email:string ){
      let user = new User(email,name);
      this.users.set(email, user);
      
  }

  updateUser(user:User){
    this.users.set(user.email,user);
  }  

  logScores(){
    this.users.forEach((u: User, email: string) => {
      console.log("scores for " + email + " (" + u.name + "):");
      console.log("--------------------------------");
      this.users.get(email)?.evaluation.topics.forEach((t:EvaluationTopic, tn:string)=>{
          console.log(tn + " : " + t.score);
      })
      console.log("--------------------------------");
    });
  }
}
