import { Component , OnDestroy } from '@angular/core';
import { GetEntry } from '../Services/getentry.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl:'./infoviewer.template.html',
    styleUrls: ['./infoviewer.style.css']
})
export class InfoViewer implements OnDestroy {
    message: any = {};
    subscription: Subscription;
    constructor(private data: GetEntry) {
        this.subscription = this.data.getMessage().subscribe(message => {this.message = message;});
        console.log(this.message.data);
    }  

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}