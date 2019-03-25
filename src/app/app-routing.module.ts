import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginForm } from './LoginForm/login.component';

const routes: Routes = [
  {path: "login" , component: LoginForm },
  {path:'', redirectTo :'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
