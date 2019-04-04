import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
templateUrl  : './regf.template.html',
styleUrls : ['./regf.style.css']
})


export class Register implements OnInit{ 
regForm:FormGroup
emailCtrl: FormControl
pswCtrl:FormControl
psw_repeatCtrl: FormControl
constructor(private fb:FormBuilder){}
    
    ngOnInit(){
        this.emailCtrl=this.fb.control('',[Validators.required,Validators.email,Validators.minLength(2)])
        this.pswCtrl=this.fb.control('',[Validators.required,Validators.minLength(2)])
        this.psw_repeatCtrl = this.fb.control('',[Validators.required,Validators.minLength(2)])
        this.createForm();
    }
    
    createForm(){
        this.regForm = this.fb.group({
            email : this.emailCtrl,
            psw: this.pswCtrl,
            psw_repeat:  this.psw_repeatCtrl
        })
    }
    OnSubmit(){
        console.log(this.regForm.value);
    }
}