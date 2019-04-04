import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
templateUrl : './contactus.template.html',
styleUrls: ['./contactus.style.css']
})

export class ContactUs implements OnInit {
submitted = false;
contactUsForm:FormGroup;
fnameCtrl: FormControl;
lnameCtrl: FormControl;
countryCtrl: FormControl;
subjectCtrl: FormControl;
constructor(private router: Router, private fb: FormBuilder){ 
}
    
    ngOnInit(){
        
        this.contactUsForm = this.fb.group({
            fname:['',[Validators.required,Validators.minLength(2)]],
            lname:['',[Validators.required,Validators.minLength(2)]],
            country: ['',[Validators.required]],
            subject:['',[Validators.required,Validators.minLength(10)]]
    });      
        /*this.fnameCtrl = this.fb.control('',[Validators.required,Validators.minLength(2)]);
        this.lnameCtrl = this.fb.control('',[Validators.required,Validators.minLength(2)]);
        this.countryCtrl = this.fb.control('',[Validators.required]);
        this.subjectCtrl = this.fb.control('',[Validators.required,Validators.minLength(10)]); */
        //this.createForm();
        
}
    
    createForm(){
    this.contactUsForm = this.fb.group({
        
          /*fname: this.fnameCtrl,
            lname: this.lnameCtrl,
            country: this.countryCtrl,
            subject: this.subjectCtrl*/
            
    //Try @ validation option 2
            fname:['',[Validators.required,Validators.minLength(2)]],
            lname:['',[Validators.required,Validators.minLength(2)]],
            country: ['',[Validators.required]],
            subject:['',[Validators.required,Validators.minLength(10)]]
    });      
    }
    
    OnSubmit(){
//for Testing -> Display values entered to the form in the console.
    console.log(this.contactUsForm.value);
    this.submitted = true;
}
    OnCancel(){
    this.router.navigate(['/']);
    }
}