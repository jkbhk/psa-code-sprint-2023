import { Component } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hrintel';

  constructor(public dataService:DataService, public router:Router){
    //show sign in button if user not sign in

  }
}
