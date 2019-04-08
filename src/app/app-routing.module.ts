import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginForm } from './LoginForm/login.component';
import { Home } from './Home/home.component';
import { Register } from './RegisterForm/regf.component';
import { ContactUs } from './ContactUsForm/contactus.component';

const routes: Routes = [
  {path: 'login' , component: LoginForm },
  {path: 'home' , component: Home},
  {path: 'register' ,component: Register},
  {path: 'contactus' , component:ContactUs},
  {path:'', redirectTo :'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
