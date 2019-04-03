import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
templateUrl : './contactus.template.html',
styleUrls: ['./contactus.style.css']
})

export class ContactUs implements OnInit {
contactUsForm:FormGroup
fnameCtrl: FormControl
lnameCtrl: FormControl
countryCtrl: FormControl
subjectCtrl: FormControl
constructor(private router:Router,private fb:FormBuilder){}
    
    ngOnInit(){
        this.fnameCtrl = this.fb.control('',[Validators.required,Validators.minLength(2)]);
        this.lnameCtrl = this.fb.control('',[Validators.required,Validators.minLength(2)]);
        this.countryCtrl = this.fb.control('',[Validators.required]);
        this.subjectCtrl = this.fb.control('',[Validators.required,Validators.minLength(10)]);
        this.createForm();

        
}
    
    createForm(){
    this.contactUsForm = this.fb.group({
            fname: this.fnameCtrl,
            lname: this.lnameCtrl,
            country: this.countryCtrl,
            subject: this.subjectCtrl
    })       
    }
    
    OnSubmit(){
//for Testing -> Display values entered to the form in the console.
    console.log(this.contactUsForm.value);
}
    OnCancel(){
    this.router.navigate(['/']);
    }
}