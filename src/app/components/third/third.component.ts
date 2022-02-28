import { Component, OnInit } from '@angular/core';
import { map, mergeMap, delay, finalize, mapTo, merge, concat } from 'rxjs';
import { combineLatest } from 'rxjs/operators';

import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
})
export class ThirdComponent implements OnInit {
  public new__complete_arr$: Array<number> = [];
  public new__arr$: Array<number> = [];
  public three_new_el$: Array<number> = [];

  public firstStream$ = this.streamService.source1;
  public secondStream$ = this.streamService.source2;
  public thirdStream$ = this.streamService.source3;

  public intermediate_value$: Array<number> = [];

  constructor(private streamService: StreamService) {}

  ngOnInit(): void {}

  public get_new_array(): void {
    this.firstStream$
      .pipe(combineLatest(this.secondStream$, this.thirdStream$))
      .subscribe((value: number[]) => this.new__arr$.push(...value));
  }

  public get_complete_array(): void {
    this.firstStream$
      .pipe(
        combineLatest(this.secondStream$, this.thirdStream$),
        finalize(() => (this.new__complete_arr$ = this.intermediate_value$))
      )
      .subscribe((value: number[]) => (this.intermediate_value$ = value));
  }

  public get_three_new_el(): void {
    concat(this.firstStream$, this.secondStream$, this.thirdStream$).subscribe(
      (val: number) => this.three_new_el$.push(val)
    );
  }
}
