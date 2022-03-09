import { Injectable } from '@angular/core';
import { delay, interval, map, Observable, repeat, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StreamService {
  public numbers$: Observable<number> = interval(1000).pipe(take(20));

  public source1: Observable<number> = interval(200).pipe(
    take(10),
    map((val) => val)
  );

  public source2: Observable<number> = interval(300).pipe(
    take(10),
    map((val) => val)
  );

  public source3 = interval(400).pipe(
    take(10),
    map((val) => val)
  );

  constructor() {}
}
