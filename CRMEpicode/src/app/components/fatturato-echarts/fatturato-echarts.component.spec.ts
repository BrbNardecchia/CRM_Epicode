import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatturatoEchartsComponent } from './fatturato-echarts.component';

describe('FatturatoEchartsComponent', () => {
  let component: FatturatoEchartsComponent;
  let fixture: ComponentFixture<FatturatoEchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatturatoEchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatturatoEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
