import { Component, OnInit } from '@angular/core';
import { FormsDirectory } from '../Services/formsdirectory.service';
import { IForms } from '../Services/iforms.model';

@Component({
    templateUrl: './formspop.template.html',
    styleUrls: ['./formspop.style.css']
})
export class FormsPopulate implements OnInit{
Formslist: IForms[];
 constructor(private DirRetriver: FormsDirectory){}
    ngOnInit(): void {
    this.Formslist = this.DirRetriver.getForms();
    console.log(this.Formslist[0]);
    console.log(typeof(this.Formslist[1]));
    }
}
