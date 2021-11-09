import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattureFormComponent } from './fatture-form.component';

describe('FattureFormComponent', () => {
  let component: FattureFormComponent;
  let fixture: ComponentFixture<FattureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattureFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FattureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
