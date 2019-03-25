import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginForm } from './LoginForm/login.component';
import { Home } from './Home/home.component';
import { Register } from './RegisterForm/regf.component';
import { ContactUs } from './ContactUsForm/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginForm,
    Home,
    Register,
    ContactUs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
