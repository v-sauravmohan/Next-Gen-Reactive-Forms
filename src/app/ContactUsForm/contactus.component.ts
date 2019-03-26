import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
templateUrl : './contactus.template.html',
styleUrls: ['./contactus.style.css']
})
export class ContactUs {
    constructor(private router:Router){}
    cancelBtn = function(){
        this.router.navigate('/');
    }
}