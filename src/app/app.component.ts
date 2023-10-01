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

  dataService:DataService

  constructor(dataService:DataService){
   this.dataService = dataService; 
  }
}
