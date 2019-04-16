import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable({

})

export class ExtractJson {
    constructor(private http: HttpClient){
        this.getJSON().subscribe(data => {
            console.log(data);
        });
    }
    public getJSON(message: string): Observable<any> {
        return this.http.get(message);
    }
}