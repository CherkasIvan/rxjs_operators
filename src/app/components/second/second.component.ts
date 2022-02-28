import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  concat,
  delay,
  filter,
  first,
  interval,
  map,
  mergeAll,
  mergeMap,
  of,
  repeat,
  Subject,
  Subscription,
  switchAll,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs';

import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent {
  time_out$: Array<number> = [];
  time_out_data$: Array<number> = [];
  divised_el$: Array<number> = [];
  multiple_el$: Array<number> = [];
  firstStream$ = this.streamService.numbers$;
  secondStream$ = this.streamService.numbers$;

  constructor(private streamService: StreamService) {}

  ngOnInit(): void {}

  public get_timeout_data(): void {
    this.firstStream$
      .pipe(mergeMap((ev) => of(ev).pipe(delay(200), repeat(4))))
      .subscribe((x: number) => {
        this.time_out$.push(x);
      });
  }

  public get_even_timeout_data(): void {
    concat(this.secondStream$, this.streamService.numbers$).subscribe((value) =>
      this.time_out_data$.push(value)
    );
  }

  public get_devised_elements(): void {
    this.secondStream$
      .pipe(
        mergeMap((ev) =>
          of(ev).pipe(
            filter((value) => value % 2 === 0),
            delay(200),
            repeat(4)
          )
        )
      )
      .subscribe((value: number) => this.divised_el$.push(value));
  }

  public get_all_mult_el(): void {
    this.secondStream$
      .pipe(switchMap((element) => of(element).pipe(delay(300), repeat(3))))
      .subscribe((value: number) => this.multiple_el$.push(value));
  }
}
