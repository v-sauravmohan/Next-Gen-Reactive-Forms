import { Component , OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    templateUrl: './infoviewer.template.html',
    styleUrls: ['./infoviewer.style.css']
})
// tslint:disable-next-line: component-class-suffix
export class InfoViewer {
    message: string[];

 constructor(private router: Router, private location: Location) {
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state as {
            data: string[]  };
        this.message = state.data;
    }
    OnClickBack(){
        this.location.back();
    }
}
