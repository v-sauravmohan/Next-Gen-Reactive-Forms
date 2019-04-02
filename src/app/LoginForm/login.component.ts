import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.template.html',
    styleUrls :['./login.style.css']
})

export class LoginForm {
constructor( private router:Router){}

cancel(){
    this.router.navigate(['/']);
}
}