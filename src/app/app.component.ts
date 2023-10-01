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
  isHomePage = false;

  constructor(public dataService:DataService){
    if (window.location.href=='http://localhost:4200/'){
      this.isHomePage = true;
    }
  }
}
