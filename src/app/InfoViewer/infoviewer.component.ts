import { Component , OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './infoviewer.template.html',
    styleUrls: ['./infoviewer.style.css']
})
// tslint:disable-next-line: component-class-suffix
export class InfoViewer {
    message: string[];
    obj: any;
    uname: string;
    @Input()
    ngSwitch: any;

    constructor(private router: Router) {
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state as {
            data: string[]  };
        this.message = state.data;
    }
}
