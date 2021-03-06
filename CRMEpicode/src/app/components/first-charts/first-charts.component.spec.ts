import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChartsComponent } from './first-charts.component';

describe('FirstChartsComponent', () => {
  let component: FirstChartsComponent;
  let fixture: ComponentFixture<FirstChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
