import {Injectable} from '@angular/core';
import {BehaviorSubject, take, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  page$ = new BehaviorSubject<number>(0);

  decrement() {
    let curr = this.page$.value - 1;
    if (curr < 0) {
      curr = 0;
    }
    this.page$.next(curr);
  }

  increment() {
    let curr = this.page$.value + 1;
    this.page$.next(curr);
  }
}
