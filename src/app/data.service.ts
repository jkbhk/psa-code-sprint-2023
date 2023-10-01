import { Injectable } from '@angular/core';
import { User } from './user.model';
import { EvaluationTopic } from './evaluation-topic.model';
import { Course } from './course.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  users = new Map<string,User>();
  currentUser?:User = undefined;

  constructor() { 
    // init mock data
    //alert("CRATED")
    this.createUser("Alice","alice@gmail.com","HR");
    this.createUser("Bob","bob@gmail.com","Employee");
    
    this.createUser("Harry","harry@gmail.com","Employee");
    this.createUser("Jenny","jenny@gmail.com","Employee");

    // department head
    let charlie = new User("charlie@gmail.com","Charlie","Department Head");
    charlie.managing.push("alice@gmail.com","harry@gmail.com","jenny@gmail.com");
    this.users.set(charlie.email,charlie);

  }

  setCurrentUser(user:User){
    this.currentUser = user;
    console.log("sett");
  }

  getAllUsers(){
    return this.users;
  }

  getUserByEmail(email:string){
    return this.users.get(email);
  }

  getDepartmentHead(){
      return this.getUserByEmail("charlie@gmail.com");
  }

  createUser(name:string, email:string, role:string ){
      let user = new User(email,name,role);
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
