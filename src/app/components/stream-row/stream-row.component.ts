import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stream-row',
  templateUrl: './stream-row.component.html',
  styleUrls: ['./stream-row.component.scss']
})
export class StreamRowComponent {
  @Input() streamValues!: number[]
  @Input() allNumbers!: number[]
  @Input() buttonTitle: string =''
  @Output() getEvenOfFirstSeven = new EventEmitter<void>();

  onButtonClick(): void {
    this.getEvenOfFirstSeven.emit();
  }
}
