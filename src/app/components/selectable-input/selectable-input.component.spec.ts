import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableInputComponent } from './selectable-input.component';

describe('SelectableInputComponent', () => {
  let component: SelectableInputComponent;
  let fixture: ComponentFixture<SelectableInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectableInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
