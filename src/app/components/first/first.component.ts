import { Component, OnInit } from '@angular/core';
import { filter, forkJoin, map, takeWhile, toArray } from 'rxjs';
import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  x3$: Array<number> = [];
  seven_elements$: Array<number> = [];
  divisor$: Array<number> = [];

  constructor(private streamService: StreamService) {}

  ngOnInit(): void {}

  public get_x3(): void {
    this.streamService.numbers$
      .pipe(map((value) => value * 3))
      .subscribe((value: number) => {
        this.x3$.push(value);
      });
  }

  public seven_el() {
    this.streamService.numbers$
      .pipe(takeWhile((value) => value < 7))
      .subscribe((value) => this.seven_elements$.push(value));
  }

  public divised_el() {
    this.streamService.numbers$
      .pipe(filter((value) => value % 2 === 0))
      .subscribe((value: number) => this.divisor$.push(value));
  }
}
