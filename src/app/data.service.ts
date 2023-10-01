import { Injectable } from '@angular/core';
import { User } from './user.model';


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

  getUser(email:string){
    return this.users.get(email);
  }

  createUser(name:string, email:string ){
      let user = new User(email,name);
      this.users.set(email, user);
  }

  updateUser(user:User){
    this.users.set(user.email,user);
  }  

}
