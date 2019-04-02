import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
templateUrl : './contactus.template.html',
styleUrls: ['./contactus.style.css']
})

export class ContactUs {

    
    constructor(private router:Router){}
    cancel(){
        this.router.navigate(['/']);
    }
}