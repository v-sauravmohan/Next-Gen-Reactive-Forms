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
Formslist: Routes[];

 constructor(private DirRetriver: FormsDirectory) { }
    ngOnInit(): void {
        this.Formslist = this.DirRetriver.getForms();
        console.log('Forms Populate', typeof(this.Formslist));
    }
}
