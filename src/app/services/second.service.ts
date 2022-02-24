import { Injectable } from '@angular/core';
import { delay, filter, interval, map, repeat, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor() {}
  public numbers = interval(1000).pipe(take(20));

  public timeoutData() {
    this.numbers
      .pipe(tap((value): any => delay(200), repeat(1000)))
      .subscribe((value: number) => console.log(value));
  }

  public evenData() {
    this.numbers
      .pipe(
        filter((value) => (value % 2 === 0)),
        repeat(5),
      )
      .subscribe((value: number) => console.log(value));
  }
}
