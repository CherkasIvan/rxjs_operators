import { Injectable } from '@angular/core';
import { filter, interval, map, take, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  e: any;
  numbers = interval(1000).pipe(take(20));
  constructor() {}

  public x3() {
    this.numbers
      .pipe(map((value) => value * 3))
      .subscribe((value: number) => console.log((this.e = value)));
  }

  public seven_el() {
    this.numbers
      .pipe(takeWhile((value) => value < 7))
      .subscribe((value: number) => console.log(value));
  }

  public divised_el() {
    this.numbers
      .pipe(filter((value) => value % 2 === 0))
      .subscribe((value: number) => console.log(value));
  }
}
