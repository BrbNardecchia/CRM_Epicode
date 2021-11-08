import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritorioComponent } from './territorio.component';

describe('TerritorioComponent', () => {
  let component: TerritorioComponent;
  let fixture: ComponentFixture<TerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
