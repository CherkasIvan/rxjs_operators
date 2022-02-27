import { Injectable } from '@angular/core';
import { delay, interval, map, repeat, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StreamService {
  public numbers$ = interval(1000).pipe(take(20));

  public source1 = interval(200).pipe(
    take(10),
    map((val) => val)
  );

  public source2 = interval(300).pipe(
    take(10),
    map((val) => val)
  );

  public source3 = interval(400).pipe(
    take(10),
    map((val) => val)
  );

  constructor() {}
}
