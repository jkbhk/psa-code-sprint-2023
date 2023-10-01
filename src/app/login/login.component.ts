import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private dataService: DataService){
  }

  authenticate(){
    // let user = this.dataService.getUserByEmail("bob@gmail.com");
    // if(user){
    //   this.dataService.setCurrentUser(user);
    //   window.location.href="/evaluation-head";
    // }else{
    //   alert("invalid user");
    // }
    window.location.href="/evaluation-head";
  }

  test(){   
    let c = this.dataService.getUserByEmail("charlie@gmail.com")
    if(c != undefined){
      c.evaluation.setScore("Reliability", 99);
      this.dataService.logScores();
    }
  }
}
