import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

// import custom validator to validate that password and confirm password fields match
/*navigationExtras is used to sent the data from any component to infoviewer */

// tslint:disable-next-line: no-var-keyword

let navigationExtras: NavigationExtras = {
    state:{
        data : '' }
    };

@Component({
    templateUrl: './contactus.template.html',
    styleUrls: ['./contactus.style.css']
})

// tslint:disable-next-line: component-class-suffix
export class ContactUs implements OnInit {
    contactUsForm: FormGroup;
    submitted = false;
    entries: string[];

    constructor(private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.contactUsForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            country: ['', Validators.required],
            subject: ['', [Validators.required, Validators.minLength(15)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.contactUsForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.contactUsForm.invalid) {
            return;
        }

        console.log(this.contactUsForm.value);
        this.entries = [this.contactUsForm.value.firstName,
                        this.contactUsForm.value.lastName,
                        this.contactUsForm.value.email,
                        this.contactUsForm.value.country,
                        this.contactUsForm.value.subject];
        navigationExtras = {
            state: {
                data : this.entries }
            };
        this.router.navigate(['/entryviewer'], navigationExtras);
    }
}
