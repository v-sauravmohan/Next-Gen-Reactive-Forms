import { Directive, ElementRef, Input, OnInit } from '@angular/core';


@Directive({
// tslint:disable-next-line: directive-selector
    selector: '[JParser]'
})

// tslint:disable-next-line: directive-class-suffix
export class JParser implements OnInit {
    @Input() jsonObject: string;
    constructor(private elementRef: ElementRef){}
    ngOnInit(){
        console.log(this.elementRef);
        console.log('In Parser: ', this.jsonObject);
    }
}