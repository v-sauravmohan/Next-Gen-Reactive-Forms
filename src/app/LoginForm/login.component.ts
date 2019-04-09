import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
}
cancel(){
    this.router.navigate(['/']);
}
}