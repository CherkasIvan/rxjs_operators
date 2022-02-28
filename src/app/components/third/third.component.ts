import { Component, OnInit } from '@angular/core';
import { map, mergeMap, delay, finalize } from 'rxjs';
import { combineLatest } from 'rxjs/operators';

import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
})
export class ThirdComponent implements OnInit {
  new__complete_arr$: Array<number> = [];
  new__arr$: Array<number> = [];
  three_new_el$: Array<number> = [];

  firstStream$ = this.streamService.source1;
  secondStream$ = this.streamService.source2;
  thirdStream$ = this.streamService.source3;

  intermediate_value$: Array<number> = [];

  constructor(private streamService: StreamService) {}

  ngOnInit(): void {}

  public get_new_array(): void {
    this.firstStream$
      .pipe(combineLatest(this.secondStream$, this.thirdStream$))
      .subscribe((value) => (this.new__arr$.push(...value)));
  }

  public get_complete_array(): void {
    this.firstStream$
      .pipe(
        combineLatest(this.secondStream$, this.thirdStream$),
        finalize(() => (this.new__complete_arr$ = this.intermediate_value$))
      )
      .subscribe((value) => (this.intermediate_value$ = value));
  }

  public get_three_new_el(): void {
    this.firstStream$
      .pipe(mergeMap((element: number) => this.secondStream$))
      .subscribe((value: any) => this.three_new_el$.push(value));
  }

  
}
