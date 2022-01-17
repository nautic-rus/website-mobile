import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SawcComponent } from './sawc.component';

describe('SawcComponent', () => {
  let component: SawcComponent;
  let fixture: ComponentFixture<SawcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SawcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SawcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
