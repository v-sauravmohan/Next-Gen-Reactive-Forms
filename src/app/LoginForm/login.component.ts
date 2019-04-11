import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/*navigationExtras is used to sent the data from any component to infoviewer */

let navigationExtras: NavigationExtras = {
    state:{
        data : '' }
    };


@Component({
    templateUrl: './login.template.html',
    styleUrls :['./login.style.css']
})

export class LoginForm implements OnInit {
loginForm: FormGroup;
submitted = false;

constructor( private router: Router, private formBuilder: FormBuilder) {}
ngOnInit() {
    this.loginForm = this.formBuilder.group({
        uname: ['',Validators.required],
        psw: ['',Validators.required],
        remember: ['']
    });
}
get f() { return this.loginForm.controls; }

OnSubmit(){
   this.submitted = true;
   if (this.loginForm.invalid){
       return;
   }
   console.log(this.loginForm.value);
   navigationExtras = {
    state: {
        data : this.loginForm.value }
    };
   this.router.navigate(['/entryviewer'],navigationExtras);
}
cancel() {
    this.router.navigate(['/']);
}
}



