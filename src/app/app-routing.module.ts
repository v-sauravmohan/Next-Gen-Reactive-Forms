import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginForm } from './LoginForm/login.component';
import { Home } from './Home/home.component';

const routes: Routes = [
  {path: "login" , component: LoginForm },
  {path: "home" , component: Home},
  {path:'', redirectTo :'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
