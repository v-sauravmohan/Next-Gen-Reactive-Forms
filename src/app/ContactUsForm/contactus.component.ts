import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match


@Component({
    templateUrl: './contactus.template.html',
    styleUrls: ['./contactus.style.css']
})

// tslint:disable-next-line: component-class-suffix
export class ContactUs implements OnInit {
    contactUsForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

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
    }
}
