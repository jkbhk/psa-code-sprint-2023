import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CourseTrackerComponent } from './course-tracker/course-tracker.component';
import { DepartmentManagementComponent } from './department-management/department-management.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EvaluationComponent,
    CourseTrackerComponent,
    DepartmentManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
