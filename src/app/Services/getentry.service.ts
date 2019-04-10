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