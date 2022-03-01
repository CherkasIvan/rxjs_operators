import { Component, OnInit } from '@angular/core';
import {
  map,
  mergeMap,
  delay,
  finalize,
  mapTo,
  merge,
  concat,
  zip,
  Observable,
  forkJoin,
} from 'rxjs';
import { combineLatest } from 'rxjs/operators';

import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
})
export class ThirdComponent implements OnInit {
  public new__complete_arr$: number[] = [];
  public new__arr$: number[] = [];
  public three_new_el$: number[] = [];

  public firstStream$: Observable<number> = this.streamService.source1;
  public secondStream$: Observable<number> = this.streamService.source2;
  public thirdStream$: Observable<number> = this.streamService.source3;

  public intermediate_value$: number[] = [];

  constructor(private streamService: StreamService) {}

  ngOnInit(): void {}

  // get combined array
  public get_new_array(): void {
    this.firstStream$
      .pipe(combineLatest(this.secondStream$, this.thirdStream$))
      .subscribe((value: number[]) => this.new__arr$.push(...value));
  }

  // Completed three values in tha array
  public get_complete_array(): void {
    const joindEl = forkJoin(
      this.firstStream$,
      this.secondStream$,
      this.thirdStream$
    );
    joindEl.subscribe((value: number[]) => (this.new__complete_arr$ = value));
  }

  //All Values ​​of the three streams in order
  public get_three_new_el(): void {
    zip(this.firstStream$, this.secondStream$, this.thirdStream$)
      .pipe(
        map(([firstElements, secondsElements, thirdElements]) => [
          firstElements,
          secondsElements,
          thirdElements,
        ])
      )
      .subscribe((value: number[]) => this.three_new_el$.push(...value));
  }
}
