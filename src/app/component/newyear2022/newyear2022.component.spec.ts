import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newyear2022Component } from './newyear2022.component';

describe('Newyear2022Component', () => {
  let component: Newyear2022Component;
  let fixture: ComponentFixture<Newyear2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newyear2022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Newyear2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
