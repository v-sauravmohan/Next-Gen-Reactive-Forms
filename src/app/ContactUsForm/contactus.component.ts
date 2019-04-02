import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup} from '@angular/forms';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Subject } from 'rxjs';

@Component({
templateUrl : './contactus.template.html',
styleUrls: ['./contactus.style.css']
})

export class ContactUs {
    contactUsForm = new FormGroup({
        fname: new FormControl(''),
        lname: new FormControl(''),
        country: new FormControl(''),
        subject: new FormControl('')
    })
    
    constructor(private router:Router){}
    cancel(){
        this.router.navigate(['/']);
    }
}