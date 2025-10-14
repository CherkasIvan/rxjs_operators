import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamRowComponent } from './stream-row.component';

describe('StreamRowComponent', () => {
  let component: StreamRowComponent;
  let fixture: ComponentFixture<StreamRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
