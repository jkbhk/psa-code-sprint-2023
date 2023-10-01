import { Component } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hrintel';
  showSideNav = false;
  loggedIn = false;

  constructor(public dataService:DataService){
    //show sign in button if user not sign in

    //show side nav if not at homepage or sign in page
    if(window.location.href!=='http://localhost:4200/' && window.location.href !== 'http://localhost:4200/login'){
      this.showSideNav = true;
    }
  }
}
