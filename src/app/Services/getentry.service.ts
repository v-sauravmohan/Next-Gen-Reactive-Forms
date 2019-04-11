/*
Deperecated but sustained 
the code is not of use as we have found new ways to sent data
through unrealted components
Service is not getting deleted as this can act as a template to other Services.
*/

import { Injectable } from '@angular/core';
import { Subject , Observable } from 'rxjs';

@Injectable()
export class GetEntry {

  private subject = new Subject<any>();


  currentMessage = this.subject.asObservable();

  sendMessage(message: string) {
    this.subject.next({data: message});
      }

  clearMessage() {
    this.subject.next();
    }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
    }
}