import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginForm } from './LoginForm/login.component';
import { Home } from './Home/home.component';
import { Register } from './RegisterForm/regf.component';
import { ContactUs } from './ContactUsForm/contactus.component';
import { NavBar } from './Navbar/navbar.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginForm,
    Home,
    Register,
    ContactUs,
    NavBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
