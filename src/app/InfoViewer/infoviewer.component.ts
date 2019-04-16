import { Component , OnDestroy } from '@angular/core';
import { GetEntry } from '../Services/getentry.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./infoviewer.template.html',
    styleUrls: ['./infoviewer.style.css']
})
export class InfoViewer{
    message: string;
    constructor(private router:Router) {
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state as {
            data: string  };
        this.message = state.data;
        console.log(this.message);
    }
}
