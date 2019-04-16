import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { MatchPsw } from '../Services/matchpsw.validator';


/*navigationExtras is used to sent the data from any component to infoviewer */

// tslint:disable-next-line: no-var-keyword
let navigationExtras: NavigationExtras = {
    state:{
        data : '' }
    };

@Component({
templateUrl  : './regf.template.html',
styleUrls : ['./regf.style.css']
})


// tslint:disable-next-line: component-class-suffix
export class Register implements OnInit {
regForm: FormGroup;
submitted = false;
entries: string[];

constructor(private router: Router, private formBuilder: FormBuilder) {}
ngOnInit() {
        this.regForm = this.formBuilder.group({
            email: ['',[Validators.required, Validators.email]],
            psw: ['',[Validators.required, Validators.minLength(8)]],
// tslint:disable-next-line: whitespace
            psw_repeat: ['',[Validators.required, Validators.minLength(8)]]
        }, {
            validator: MatchPsw('psw', 'psw_repeat')
        });
    }

    get f() { return this.regForm.controls; }

    OnSubmit(){
    this.submitted = true;
    if( this.regForm.invalid){
        return;
    }
    console.log(this.regForm.value);
    this.entries = [this.regForm.value.email, this.regForm.value.psw, this.regForm.value.psw_repeat];
    navigationExtras = {
        state: {
            data: this.entries}
    };
    this.router.navigate(['/entryviewer'], navigationExtras);
}
}
