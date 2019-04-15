import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../Services/firebase.service';


@Component({
templateUrl  : './regf.template.html',
styleUrls : ['./regf.style.css']
})


export class Register implements OnInit {
regForm: FormGroup;
submitted = false;
constructor(private formBuilder: FormBuilder, private firebaseservice: FirebaseService) {}
ngOnInit(){
        this.regForm = this.formBuilder.group({
            email: ['',[Validators.required, Validators.email]],
            psw: ['',[Validators.required, Validators.minLength(8)]],
            psw_repeat: ['',[Validators.required, Validators.minLength(8)]]
        })
    }

    get f() { return this.regForm.controls; }

    OnSubmit(){
    this.submitted = true;
    if( this.regForm.invalid){
        return;
    }
    console.log(this.regForm.value);
    //Firebase Connect test purposes
    this.firebaseservice.registerUser(this.regForm.value).then(res=>{
    })
}
}
