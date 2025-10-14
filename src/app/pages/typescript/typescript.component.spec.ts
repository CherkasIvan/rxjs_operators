import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScriptComponent } from './typescript.component';

describe('TypeScriptComponent', () => {
  let component: TypeScriptComponent;
  let fixture: ComponentFixture<TypeScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
