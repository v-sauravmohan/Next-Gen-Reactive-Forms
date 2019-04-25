import { Component, OnInit } from '@angular/core';
import { FormsDirectory } from '../Services/formsdirectory.service';
import { IForms } from '../Services/iforms.model';
import { Routes } from '../Services/routeindex';
@Component({
    templateUrl: './formspop.template.html',
    styleUrls: ['./formspop.style.css']
})
// tslint:disable-next-line: component-class-suffix
export class FormsPopulate implements OnInit{
//Formslist: IForms[];
Formslist = [
    new Routes('forms1', 'Route1'),
    new Routes('forms2', 'Route2'),
    new Routes('forms3', 'Route3'),
    new Routes('forms4', 'Route4'),
];

 constructor(private DirRetriver: FormsDirectory) {}
    ngOnInit(): void {
        console.log('Forms Populate', typeof(this.Formslist[0].name));
    }
}
