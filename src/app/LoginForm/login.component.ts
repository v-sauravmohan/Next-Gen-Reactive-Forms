import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import {FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
    templateUrl: './login.template.html',
    styleUrls :['./login.style.css']
})

export class LoginForm implements OnInit {
loginForm:FormGroup
unameCtrl: FormControl
pswCtrl: FormControl
rememberCtrl: FormControl
constructor( private router:Router,private fb:FormBuilder){}

ngOnInit(){
    this.unameCtrl = this.fb.control('',[Validators.required,Validators.minLength(2)]);
    this.pswCtrl = this.fb.control('',[Validators.required,Validators.minLength(2)]);
    this.rememberCtrl = this.fb.control('');
    this.createForm();
}
createForm(){
this.loginForm = this.fb.group({
    uname : this.unameCtrl,
    psw : this.pswCtrl,
    remember : this.rememberCtrl
})
}
OnSubmit(){
    console.log(this.loginForm.value);
}
cancel(){
    this.router.navigate(['/']);
}
}