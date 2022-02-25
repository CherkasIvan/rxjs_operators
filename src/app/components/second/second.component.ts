import { Component, OnInit } from '@angular/core';
import { concat, delay, interval, map, of, repeat, switchMap, tap } from 'rxjs';

import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  time_out$: any;
  time_out_data$: any;
  clicks = this.streamService.numbers$;

  constructor(private streamService: StreamService) {}

  ngOnInit(): void {}

  public get_timeout_data(): void {
    this.clicks
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
    concat(this.clicks).subscribe((value) => (this.time_out_data$ = value));
  }

  // public get_devised_elements(): void {
  //   this.firstService.divised_el();
  // }
}
