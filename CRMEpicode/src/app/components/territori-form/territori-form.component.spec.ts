import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoriFormComponent } from './territori-form.component';

describe('TerritoriFormComponent', () => {
  let component: TerritoriFormComponent;
  let fixture: ComponentFixture<TerritoriFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerritoriFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoriFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
