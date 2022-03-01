import { Component, OnInit } from '@angular/core';
import { filter, forkJoin, map, takeWhile, toArray } from 'rxjs';
import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  public x3$: number[] = [];
  public seven_elements$: number[] = [];
  public divisor$: number[] = [];

  constructor(private streamService: StreamService) {}

  ngOnInit(): void {}

  public get_x3(): void {
    this.streamService.numbers$
      .pipe(map((value: number) => value * 3))
      .subscribe((value: number) => {
        this.x3$.push(value);
      });
  }

  public seven_el() {
    this.streamService.numbers$
      .pipe(takeWhile((value: number) => value < 7))
      .subscribe((value: number) => this.seven_elements$.push(value));
  }

  public divised_el() {
    this.streamService.numbers$
      .pipe(filter((value: number) => value % 2 === 0))
      .subscribe((value: number) => this.divisor$.push(value));
  }
}
