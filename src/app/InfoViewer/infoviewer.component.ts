import { Component , OnDestroy } from '@angular/core';
import { GetEntry } from '../Services/getentry.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./infoviewer.template.html',
    styleUrls: ['./infoviewer.style.css']
})
export class InfoViewer implements OnDestroy {
    //message: any = {};
    message: String;
    //subscription: Subscription;
    constructor(private data: GetEntry, private router:Router) {
        //this.subscription = this.data.getMessage().subscribe(message => {this.message = message;});
        //console.log(this.message.data);
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state as {
            data: string  };
        this.message = state.data;
        console.log(this.message);
    }  

    ngOnDestroy(){
        //this.subscription.unsubscribe();
    }
}