import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CustomEventEmitter {
  public onCustomEventTriggered: BehaviorSubject<any>;
  public onCustomExternalTriggered: BehaviorSubject<any>;
  private _subject = new Subject<any>();

  constructor() {
    this.onCustomEventTriggered = new BehaviorSubject(null);
    this.onCustomExternalTriggered = new BehaviorSubject(null);
  }

  public handleCustomEvent(event: any): void {
    this.onCustomEventTriggered.next(event);
  }

  public handleExternalEventStatus(event: any) {
    this.onCustomExternalTriggered.next(event);
  }

  public sendMessage(message: any) {
    this._subject.next(message);
  }

  public clearMessage() {
    this._subject.next();
  }

  public onMessage(): Observable<any> {
    return this._subject.asObservable();
  }
}