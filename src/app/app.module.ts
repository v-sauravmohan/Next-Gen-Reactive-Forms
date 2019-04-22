import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginForm } from './LoginForm/login.component';
import { Home } from './Home/home.component';
import { Register } from './RegisterForm/regf.component';
import { ContactUs } from './ContactUsForm/contactus.component';
import { NavBar } from './Navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterBar } from './FooterBar/footerbar.component';
import { AboutUs } from './AboutUs/aboutus.component';
import { GetEntry } from './Services/getentry.service';
import { InfoViewer } from './InfoViewer/infoviewer.component';
import { FormsDirectory } from './Services/formsdirectory.service';
import { FormsPopulate } from './FormsPopulate/formspop.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginForm,
    Home,
    Register,
    ContactUs,
    NavBar,
    FooterBar,
    AboutUs,
    InfoViewer,
    FormsPopulate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    GetEntry,
    FormsDirectory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
