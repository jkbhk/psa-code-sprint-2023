import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { User } from '../user.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() email_input:string;

  constructor(private dataService: DataService, private router:Router){
    this.email_input = ""
  }

  authenticate(){

    let user = this.dataService.getUserByEmail(this.email_input!);
    if(user){
      this.dataService.setCurrentUser(user);
      this.router.navigate(['/dashboard']);
    }else{
      alert("invalid user");
    }
  }

  test(){   
    let c = this.dataService.getUserByEmail("charlie@gmail.com")
    if(c != undefined){
      c.evaluation.setScore("Reliability", 99);
      this.dataService.logScores();
    }
  }
}
