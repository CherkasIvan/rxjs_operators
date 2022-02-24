import { Component, OnInit } from '@angular/core';
import { SecondService } from '../../services/second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  constructor(private secondService: SecondService) {}

  ngOnInit(): void {}

  public get_timeout_data(): void {
    this.secondService.timeoutData();
  }

  public get_even_timeout_data(): void {
    this.secondService.evenData();
  }


  // public get_devised_elements(): void {
  //   this.firstService.divised_el();
  // }
}
