import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { EvaluationComponent } from './evaluation/evaluation.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'evaluation-head', component: EvaluationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]
