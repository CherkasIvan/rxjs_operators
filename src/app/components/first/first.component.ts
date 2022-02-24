import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  x3 = this.firstService.e;
  seven_elements: any;
  divisor: any;
  constructor(public firstService: FirstService) {}

  ngOnInit(): void {}

  public get_x3(): void {
    this.firstService.x3();
  }

  public get_7_elements(): void {
    this.firstService.seven_el();
  }

  public get_devised_elements(): void {
    this.firstService.divised_el();
  }
}
