import { Component, OnInit } from '@angular/core';
import {
  concat,
  delay,
  filter,
  first,
  interval,
  map,
  mergeAll,
  of,
  repeat,
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
export class SecondComponent implements OnInit {
  time_out$: any;
  time_out_data$: Array<number> = [];
  divised_el$: Array<number> = [];
  firstStream$ = this.streamService.numbers$;

  constructor(private streamService: StreamService) {}

  ngOnInit(): void {}

  public get_timeout_data(): void {
    this.firstStream$
      .pipe(
        switchMap((ev) => interval(500)),
        delay(200),
        repeat(1000)
      )
      .subscribe((x: any) => {
        this.time_out$ = x;
      });
  }

  public get_even_timeout_data(): void {
    concat(this.firstStream$, this.streamService.numbers$).subscribe((value) =>
      this.time_out_data$.push(value)
    );
  }

  public get_devised_elements(): void {
    this.firstStream$
      .pipe(
        filter((value) => (value % 2 === 0)),
        delay(300), 
        repeat(5)
      )
      .subscribe((value: number) => this.divised_el$.push(value));
  }
}
