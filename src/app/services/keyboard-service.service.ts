import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KeyboardServiceService {
  private keyDownSubject = new Subject<KeyboardEvent>();

  constructor() {
    window.addEventListener('keydown', (event) => {
      this.keyDownSubject.next(event);
    });
  }

  getKeyDownEvent(): Observable<KeyboardEvent> {
    return this.keyDownSubject.asObservable();
  }
}
