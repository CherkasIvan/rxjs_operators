import { Component, OnInit } from '@angular/core';
import { map, mergeMap, delay } from 'rxjs';
import { combineLatest } from 'rxjs/operators';

import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
})
export class ThirdComponent implements OnInit {
  new__complete_arr$: Array<number> = [];
  three_new_el$: Array<number> = [];
  firstStream$ = this.streamService.source1;
  secondStream$ = this.streamService.source2;
  therdStream$ = this.streamService.source3;

  constructor(private streamService: StreamService) {}

  ngOnInit(): void {}

  public get_complete_array(): void {
    this.firstStream$
      .pipe(combineLatest(this.secondStream$, this.therdStream$), delay(1000))
      .subscribe((value) => (this.new__complete_arr$ = value));
  }

  public get_three_new_el(): void {
    this.firstStream$
      .pipe(mergeMap((element: number) => this.secondStream$))
      .subscribe((value: any) => this.three_new_el$.push(value));
  }
}
