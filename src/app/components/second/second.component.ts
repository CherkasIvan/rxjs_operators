import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  concat,
  concatMap,
  delay,
  exhaustMap,
  filter,
  first,
  interval,
  map,
  mergeAll,
  mergeMap,
  Observable,
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
  public time_out$: number[] = [];
  public time_out_data$: number[] = [];
  public divised_el$: number[] = [];
  public multiple_el$: number[] = [];
  public firstStream$: Observable<number> = this.streamService.numbers$;
  public secondStream$: Observable<number> = this.streamService.numbers$;

  constructor(private streamService: StreamService) {}

  ngOnInit(): void {}

  // Repeating element
  public get_timeout_data(): void {
    this.firstStream$
      .pipe(switchMap((ev: number) => of(ev).pipe(delay(200), repeat(4))))
      .subscribe((x: number) => {
        this.time_out$ = [...this.time_out$, x];
      });
  }

  // Concated streem
  public get_even_timeout_data(): void {
    this.firstStream$
      .pipe(concatMap((value: number) => this.streamService.numbers$))
      .subscribe(
        (value: number) =>
          (this.time_out_data$ = [...this.time_out_data$, value])
      );
  }

  // Even elements
  public get_devised_elements(): void {
    this.secondStream$
      .pipe(
        exhaustMap((ev: number) =>
          of(ev).pipe(
            filter((value: number) => value % 2 === 0),
            delay(200),
            repeat(4)
          )
        )
      )
      .subscribe(
        (value: number) => (this.divised_el$ = [...this.divised_el$, value])
      );
  }

  // is not completed
  public get_all_mult_el(): void {
    this.secondStream$
      .pipe(
        mergeMap((element: number) => of(element).pipe(delay(300), repeat(3)))
      )
      .subscribe(
        (value: number) => (this.multiple_el$ = [...this.multiple_el$, value])
      );
  }
}
